import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Voice AI", href: "/products/ai-voice" },
        { name: "SMS AI", href: "/products/sms-automation" },
        { name: "Appointment Booking", href: "/products/appointment" },
        { name: "Analytics", href: "/products/analytics" },
        { name: "Automations", href: "/automations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Car Dealerships", href: "/solutions/car-dealerships" },
        { name: "Medical Offices", href: "/solutions/medical-offices" },
        { name: "Spas & Wellness", href: "/solutions/spas" },
        { name: "Salons", href: "/solutions/salons" },
        { name: "Home Services", href: "/solutions/handyman" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#documentation" },
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "White Papers", href: "#white-papers" },
        { name: "Webinars", href: "#webinars" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Contact", href: "#contact" },
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
              Enterprise-grade AI voice agents for modern businesses
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
            <p className="text-xs md:text-[14px] text-gray-600">© 2025 OpenFlow AI. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                href="#privacy"
                className="text-xs md:text-[14px] text-gray-600 transition-colors hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-xs md:text-[14px] text-gray-600 transition-colors hover:text-gray-900"
              >
                Terms of Service
              </Link>
              <Link
                href="#cookies"
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
