import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Voice AI", href: "/products/ai-voice" },
        { name: "SMS AI", href: "/products/sms-automation" },
        { name: "Appointment Booking", href: "/products/appointment" },
        { name: "Lead Qualification", href: "/products/lead-qualification" },
        { name: "Call Recording", href: "/products/call-recording" },
        { name: "Analytics", href: "/products/analytics" },
        { name: "Automations", href: "/automations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Car Dealerships", href: "/solutions/car-dealerships" },
        { name: "Medical Offices", href: "/solutions/medical-offices" },
        { name: "HVAC", href: "/solutions/hvac" },
        { name: "Plumbers", href: "/solutions/plumbers" },
        { name: "Home Services", href: "/solutions/handyman" },
        { name: "Salons", href: "/solutions/salons" },
        { name: "Spas & Wellness", href: "/solutions/spas" },
        { name: "Insurance", href: "/solutions/insurance" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Integrations", href: "/integrations" },
        { name: "Free Guides", href: "/#free-resources" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Team", href: "/team" },
        { name: "Pricing", href: "/pricing" },
        { name: "Book a Demo", href: "/partner-intake" },
        { name: "Contact", href: "/partner-intake" },
      ],
    },
  ]

  return (
    <footer className="border-t border-gray-200 bg-white px-4 md:px-8 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 md:gap-12 sm:grid-cols-2 md:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/openflow-icon-only.png"
                alt="OpenFlow AI"
                width={32}
                height={32}
                className="h-7 w-7 md:h-8 md:w-8"
              />
              <span className="text-base md:text-[18px] font-semibold text-gray-900">OpenFlow AI</span>
            </div>
            <p className="mt-3 md:mt-4 text-sm md:text-[14px] leading-relaxed text-gray-600">
              AI voice agents that answer, qualify, and book — for modern businesses.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-3 md:mb-4 text-sm md:text-[14px] font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-[14px] text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 border-t border-gray-200 pt-6 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs md:text-[14px] text-gray-600">© {year} OpenFlow AI. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-xs md:text-[14px] text-gray-600 transition-colors hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs md:text-[14px] text-gray-600 transition-colors hover:text-gray-900"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-xs md:text-[14px] text-gray-600 transition-colors hover:text-gray-900"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
