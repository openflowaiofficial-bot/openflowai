import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { RetellWidget } from "@/components/retell-widget"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const SITE_URL = "https://www.openflowai.io"
const TITLE = "OpenFlow AI — AI Voice Agents for Calls, SMS, and Email"
const DESCRIPTION =
  "OpenFlow AI's voice agents answer, qualify, schedule, and follow up across calls, SMS, and email — so your business never misses a lead."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | OpenFlow AI",
  },
  description: DESCRIPTION,
  applicationName: "OpenFlow AI",
  keywords: [
    "AI voice agent",
    "AI receptionist",
    "AI phone answering",
    "call automation",
    "SMS automation",
    "appointment booking AI",
    "lead qualification",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "OpenFlow AI",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OpenFlow AI",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${_geistMono.variable}`}>
      <body className={`${geistSans.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <RetellWidget />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
