import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OpenFlow AI collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 5, 2026"
      intro="This Privacy Policy explains what information OpenFlow AI collects when you use our website and services, how we use it, and the choices you have. By using our site, you agree to the practices described here."
    >
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Information you give us.</strong> When you request a demo or submit our intake form, we collect
            details such as your name, business name, email, phone number, and the information you choose to share about
            your business.
          </li>
          <li>
            <strong>Demo interactions.</strong> If you try our live AI voice demo, the call audio and transcript are
            processed by our voice provider to power the demo.
          </li>
          <li>
            <strong>Booking information.</strong> When you schedule a call, our scheduling provider collects the details
            needed to book the meeting.
          </li>
          <li>
            <strong>Usage information.</strong> We collect standard analytics such as pages visited and general device
            and browser information to understand how the site is used.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To respond to your requests and provide and improve our services.</li>
          <li>To schedule and conduct demos and follow up with you.</li>
          <li>To secure our services, prevent abuse, and comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Service providers we use</h2>
        <p>
          We share information only with the providers that help us operate, and only as needed to deliver our services:
        </p>
        <ul>
          <li>Vercel — website hosting and privacy-friendly analytics.</li>
          <li>Retell — powering the live AI voice demo.</li>
          <li>Cal.com — scheduling demo calls.</li>
          <li>n8n — routing your intake submissions to us.</li>
          <li>Apollo.io — website analytics, loaded only if you accept cookies.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>

      <section>
        <h2>Data retention &amp; security</h2>
        <p>
          We keep information only as long as needed for the purposes above, then delete or anonymize it. We protect
          data with encryption in transit and least-privilege access — see our security practices on the homepage.
        </p>
      </section>

      <section>
        <h2>Your choices &amp; rights</h2>
        <p>
          You can request access to, correction of, or deletion of your personal information, and you can withdraw
          cookie consent at any time. To make a request, <Link href="/partner-intake">contact us here</Link>.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>Our services are intended for businesses and are not directed to children under 16.</p>
      </section>

      <section>
        <h2>Changes &amp; contact</h2>
        <p>
          We may update this policy from time to time; the &ldquo;last updated&rdquo; date above reflects the latest
          version. Questions? <Link href="/partner-intake">Reach out to us</Link>.
        </p>
      </section>
    </LegalPage>
  )
}
