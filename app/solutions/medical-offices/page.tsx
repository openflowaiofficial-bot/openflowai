import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MedicalOfficeDemo } from "@/components/industry-demos/medical-office-demo"

export default function MedicalOfficesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 mb-6 border border-blue-500/20">
              <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm font-medium text-blue-300">Healthcare Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Elevate Patient Care with <span className="text-blue-400">AI-Powered</span> Communication
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              HIPAA-compliant AI voice agents that handle appointment scheduling, prescription refills, and patient
              inquiries with empathy and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-medium shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30">
                Schedule Demo
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium bg-transparent"
              >
                HIPAA Compliance Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="font-semibold text-gray-900">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-semibold text-gray-900">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                />
              </svg>
              <span className="font-semibold text-gray-900">256-bit Encryption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">40%</div>
              <div className="text-xs sm:text-sm text-gray-600">Reduction in No-Shows</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">60%</div>
              <div className="text-xs sm:text-sm text-gray-600">Less Staff Phone Time</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Patient Support</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 text-center">Illustrative example — actual results vary by business.</p>
        </div>
      </section>

      {/* Animated Conversation Demo Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">See How It Works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Watch our AI handle a patient appointment request from start to finish
            </p>
          </div>
          <MedicalOfficeDemo />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-3 md:mb-4 px-4">
              Comprehensive Patient Communication
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              From appointment scheduling to follow-up care, our AI handles every patient touchpoint with care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Appointment Scheduling */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Appointment Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Patients can book, reschedule, or cancel appointments 24/7 with intelligent provider matching.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Provider availability sync
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Insurance verification
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated reminders
                </li>
              </ul>
            </div>

            {/* Prescription Refills */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Prescription Refills</h3>
              <p className="text-gray-600 mb-4">
                Streamline refill requests with automated pharmacy coordination and provider approval workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pharmacy lookup
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Provider approval routing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Refill status updates
                </li>
              </ul>
            </div>

            {/* Patient Triage */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Intelligent Triage</h3>
              <p className="text-gray-600 mb-4">
                AI-powered symptom assessment to route urgent cases appropriately and reduce unnecessary ER visits.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Symptom assessment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Urgency scoring
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Emergency escalation
                </li>
              </ul>
            </div>

            {/* Lab Results */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Lab Result Inquiries</h3>
              <p className="text-gray-600 mb-4">
                Securely answer patient questions about test results and schedule follow-up consultations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure result delivery
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Provider callback requests
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Follow-up scheduling
                </li>
              </ul>
            </div>

            {/* Insurance & Billing */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Insurance & Billing</h3>
              <p className="text-gray-600 mb-4">
                Handle billing inquiries, payment plans, and insurance questions with automated verification.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Coverage verification
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Payment processing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Balance inquiries
                </li>
              </ul>
            </div>

            {/* Post-Visit Follow-up */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Post-Visit Follow-up</h3>
              <p className="text-gray-600 mb-4">
                Automated check-ins to monitor patient recovery and medication adherence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recovery check-ins
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Medication reminders
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Satisfaction surveys
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EHR Integration Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Seamless EHR Integration</h2>
              <p className="text-lg text-blue-100 mb-8">
                OpenFlow AI integrates with all major Electronic Health Record systems for real-time patient data access
                and updates.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 border border-white/20 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">Epic</span>
                  </div>
                  <span className="text-white font-medium">Epic Systems</span>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/20 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">Cerner</span>
                  </div>
                  <span className="text-white font-medium">Cerner</span>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/20 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">ath</span>
                  </div>
                  <span className="text-white font-medium">Athenahealth</span>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/20 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">eCW</span>
                  </div>
                  <span className="text-white font-medium">eClinicalWorks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 border border-white/20">
                <div className="h-full rounded-xl bg-slate-900/50 backdrop-blur-sm p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm text-gray-300">Connected to Epic MyChart</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm text-gray-300">Patient records synced</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm text-gray-300">HIPAA audit logging active</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-xs text-gray-400 mb-2">Recent activity</div>
                    <div className="text-white font-medium">Appointment booked: Sarah M. - Annual Checkup</div>
                    <div className="text-blue-400 text-sm mt-1">Synced to Dr. Johnson's calendar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Transform Patient Communication?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join healthcare providers nationwide using OpenFlow AI to improve patient outcomes and reduce
              administrative burden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-medium">
                Schedule Demo
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">© 2025 OpenFlow AI. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                HIPAA
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
