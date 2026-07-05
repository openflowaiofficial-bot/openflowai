import type { MetadataRoute } from "next"

const SITE_URL = "https://www.openflowai.io"

const routes = [
  "",
  "/how-it-works",
  "/team",
  "/automations",
  "/integrations",
  "/partner-intake",
  "/privacy",
  "/terms",
  "/cookies",
  "/products/crm",
  "/products/ai-voice",
  "/products/sms-automation",
  "/products/appointment",
  "/products/analytics",
  "/products/call-recording",
  "/products/lead-qualification",
  "/solutions/car-dealerships",
  "/solutions/medical-offices",
  "/solutions/hvac",
  "/solutions/plumbers",
  "/solutions/handyman",
  "/solutions/salons",
  "/solutions/spas",
  "/solutions/insurance",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
