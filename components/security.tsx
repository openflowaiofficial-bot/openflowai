"use client"

export function Security() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 md:mb-24 text-center px-4">
          <div className="mb-4 md:mb-6 inline-block rounded-full bg-blue-50 px-4 md:px-6 py-1.5 md:py-2">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600">
              Enterprise-Grade Security
            </span>
          </div>
          <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
            Security and data privacy
            <br />
            <span className="text-gray-600">trusted by the Fortune 500</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
            Built with industry-leading security standards to protect your business and customer data at every
            touchpoint
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* SOC 2 Type II */}
          <div className="group flex flex-col items-center gap-2 md:gap-3">
            <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img
                src="/soc2-badge.png"
                alt="SOC 2 Type II Certified"
                className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700">SOC 2 Type II</span>
          </div>

          {/* HIPAA */}
          <div className="group flex flex-col items-center gap-2 md:gap-3">
            <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img
                src="/hipaa-compliance-badge-medical-symbol.jpg"
                alt="HIPAA Compliant"
                className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700">HIPAA</span>
          </div>

          {/* ISO 42001 */}
          <div className="group flex flex-col items-center gap-2 md:gap-3">
            <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img
                src="/iso-42001-certification-badge-globe.jpg"
                alt="ISO 42001 Certified"
                className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700">ISO 42001</span>
          </div>

          {/* PCI DSS */}
          <div className="group flex flex-col items-center gap-2 md:gap-3">
            <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img
                src="/pci-dss-compliant-badge-credit-card.jpg"
                alt="PCI DSS Compliant"
                className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700">PCI DSS</span>
          </div>

          {/* GDPR */}
          <div className="group flex flex-col items-center gap-2 md:gap-3">
            <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 items-center justify-center rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <img
                src="/gdpr-compliance-badge-shield.jpg"
                alt="GDPR Compliant"
                className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700">GDPR</span>
          </div>
        </div>
      </div>
    </section>
  )
}
