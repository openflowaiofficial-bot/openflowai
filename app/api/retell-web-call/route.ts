import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

const RATE_LIMIT = 3 // calls per hour
const RATE_LIMIT_WINDOW = 60 * 60 // 1 hour in seconds

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number; resetIn: number }> {
  const key = `retell_rate_limit:${ip}`
  
  const currentCount = await redis.get<number>(key) || 0
  
  if (currentCount >= RATE_LIMIT) {
    const ttl = await redis.ttl(key)
    return { allowed: false, remaining: 0, resetIn: ttl > 0 ? ttl : RATE_LIMIT_WINDOW }
  }
  
  // Increment and set expiry if new key
  const newCount = await redis.incr(key)
  if (newCount === 1) {
    await redis.expire(key, RATE_LIMIT_WINDOW)
  }
  
  return { allowed: true, remaining: RATE_LIMIT - newCount, resetIn: RATE_LIMIT_WINDOW }
}

export async function POST(request: NextRequest) {
  // Get client IP for rate limiting
  const forwardedFor = request.headers.get("x-forwarded-for")
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown"
  
  // Check rate limit
  const { allowed, remaining, resetIn } = await checkRateLimit(ip)
  
  if (!allowed) {
    return NextResponse.json(
      { 
        error: "Rate limit exceeded. Please try again later.",
        resetIn: resetIn,
        message: `You've reached the limit of ${RATE_LIMIT} calls per hour. Try again in ${Math.ceil(resetIn / 60)} minutes.`
      },
      { 
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(resetIn),
        }
      }
    )
  }

  const apiKey = process.env.RETELL_API_KEY
  const agentId = process.env.NEXT_PUBLIC_RETELL_AGENT_ID

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Voice demo is not configured" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: agentId,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Voice API error:", errorData)
      return NextResponse.json(
        { error: "Failed to create web call" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({ accessToken: data.access_token })
  } catch (error) {
    console.error("[v0] Error creating web call:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
