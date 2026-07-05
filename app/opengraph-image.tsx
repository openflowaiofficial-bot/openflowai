import { ImageResponse } from "next/og"

export const alt = "OpenFlow AI — AI voice agents for calls, SMS, and email"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f1419 0%, #1a2332 55%, #17324a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              marginRight: 18,
              background: "linear-gradient(135deg, #2563eb, #0d9488)",
            }}
          />
          OpenFlow AI
        </div>
        <div style={{ marginTop: 40, fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
          AI voice agents that never miss a lead
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#9fb0c3", maxWidth: 860 }}>
          Answer, qualify, schedule, and follow up — across calls, SMS, and email.
        </div>
      </div>
    ),
    { ...size },
  )
}
