import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How OpenFlow AI uses cookies and similar technologies, and how to manage them.",
  alternates: { canonical: "/cookies" },
}

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="July 5, 2026"
      intro="This Cookie Policy explains how OpenFlow AI uses cookies and similar technologies on our website, and how you can control them."
    >
      <section>
        <h2>What we use</h2>
        <ul>
          <li>
            <strong>Essential.</strong> Needed for the site to function and to remember your cookie choice.
          </li>
          <li>
            <strong>Analytics (privacy-friendly).</strong> Vercel Analytics helps us understand aggregate traffic
            without tracking cookies.
          </li>
          <li>
            <strong>Marketing analytics.</strong> The Apollo.io website tracker loads only after you select
            &ldquo;Accept&rdquo; on our cookie banner.
          </li>
        </ul>
      </section>

      <section>
        <h2>Managing your choices</h2>
        <p>
          When you first visit, you can accept or decline non-essential cookies. You can change your mind at any time by
          clearing this site&apos;s data in your browser, which will bring the banner back. You can also block cookies
          through your browser settings.
        </p>
      </section>

      <section>
        <h2>More information</h2>
        <p>
          For how we handle the data these tools collect, see our <Link href="/privacy">Privacy Policy</Link>. Questions?{" "}
          <Link href="/partner-intake">Contact us</Link>.
        </p>
      </section>
    </LegalPage>
  )
}
