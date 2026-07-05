import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the OpenFlow AI website and services.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 5, 2026"
      intro="These Terms of Service govern your access to and use of the OpenFlow AI website and services. By using our site, you agree to these terms."
    >
      <section>
        <h2>Use of our services</h2>
        <p>
          You may use our website and demos for lawful business purposes. You agree not to misuse the services,
          interfere with their operation, attempt to access them in unauthorized ways, or use them to send unlawful,
          harmful, or abusive content.
        </p>
      </section>

      <section>
        <h2>Demos and intake submissions</h2>
        <p>
          Our live demo and intake forms are provided to help you evaluate OpenFlow AI. Information you submit is handled
          as described in our <Link href="/privacy">Privacy Policy</Link>. Any pricing, timelines, or results discussed
          are estimates and not a binding offer unless set out in a separate signed agreement.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The site, its content, and the OpenFlow AI brand are owned by OpenFlow AI. You may not copy, reproduce, or
          redistribute them without permission.
        </p>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          Our services rely on third-party providers (such as hosting, voice, and scheduling). Your use of those
          features may also be subject to those providers&apos; terms.
        </p>
      </section>

      <section>
        <h2>Disclaimers &amp; limitation of liability</h2>
        <p>
          The website and demos are provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent
          permitted by law, OpenFlow AI is not liable for any indirect, incidental, or consequential damages arising
          from your use of the site.
        </p>
      </section>

      <section>
        <h2>Changes &amp; contact</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes means you accept the
          updated terms. Questions? <Link href="/partner-intake">Contact us</Link>.
        </p>
      </section>
    </LegalPage>
  )
}
