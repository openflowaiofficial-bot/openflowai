"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Loader2, ArrowLeft } from "lucide-react"

const WEBHOOK_URL = "https://keebler-automations.app.n8n.cloud/webhook/2183c551-7a08-4ca9-a9f5-00cc38292818"
const CAL_BOOKING_URL = "https://cal.com/openflowai-meeting/30min"

const businessTypes = [
  "Car Dealership",
  "Medical Office / Healthcare",
  "Home Services (HVAC, Plumbing, etc.)",
  "Legal Services",
  "Real Estate",
  "Insurance Agency",
  "Financial Services",
  "Retail / E-commerce",
  "Restaurant / Hospitality",
  "Other",
]

const communicationMethods = [
  "Phone calls",
  "Text/SMS",
  "Email",
  "Live chat",
  "Social media DMs",
  "Contact forms",
]

export default function PartnerIntakePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessType: "",
    otherBusinessType: "",
    currentMethods: [] as string[],
    painPoints: "",
    monthlyVolume: "",
    advertisingSpend30Days: "",
    crmUsed: "",
    missedCallSystem: "",
    customerGeneration: "",
    successLooksLike: "",
    missedOpportunityCost: "",
    referredBy: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (method: string) => {
    setFormData((prev) => ({
      ...prev,
      currentMethods: prev.currentMethods.includes(method)
        ? prev.currentMethods.filter((m) => m !== method)
        : [...prev.currentMethods, method],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        ...formData,
        businessType: formData.businessType === "Other" ? formData.otherBusinessType : formData.businessType,
        currentMethods: formData.currentMethods.join(", "),
        submittedAt: new Date().toISOString(),
      }

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      })

      // Redirect to cal.com booking page
      window.location.href = CAL_BOOKING_URL
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-teal-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;ve received your information and will be in touch within 24 hours to discuss how OpenFlow AI can help transform your customer communications.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/openflow-icon-only.png" alt="OpenFlow AI" width={32} height={32} className="w-8 h-8" />
            <span className="font-semibold text-gray-900">OpenFlow AI</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Form Container */}
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Intro */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Client Intake Form
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Tell us about your business and customer communication needs. We&apos;ll create a custom AI solution tailored to your workflow.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Information */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Business Information</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Acme Auto Sales"
                />
              </div>
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Owner / Contact Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  required
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="john@acmeauto.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Business Type / Vertical <span className="text-red-500">*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white"
                >
                  <option value="">Select your industry...</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {formData.businessType === "Other" && (
                  <input
                    type="text"
                    name="otherBusinessType"
                    value={formData.otherBusinessType}
                    onChange={handleInputChange}
                    className="w-full mt-3 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Please specify your industry..."
                  />
                )}
              </div>
              <div>
                <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Referred By
                </label>
                <input
                  type="text"
                  id="referredBy"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Name of person who referred you"
                />
              </div>
            </div>
          </section>

          {/* Current Communication */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Communication</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How do you currently handle customer communications? <span className="text-gray-400">(Select all that apply)</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {communicationMethods.map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.currentMethods.includes(method)
                        ? "border-teal-500 bg-teal-50 text-teal-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.currentMethods.includes(method)}
                      onChange={() => handleCheckboxChange(method)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        formData.currentMethods.includes(method)
                          ? "bg-teal-500 border-teal-500"
                          : "border-gray-300"
                      }`}
                    >
                      {formData.currentMethods.includes(method) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="monthlyVolume" className="block text-sm font-medium text-gray-700 mb-1.5">
                Approximate monthly volume of inbound/outbound calls
              </label>
              <input
                type="text"
                id="monthlyVolume"
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                placeholder="e.g., 500 calls/month, 200 inbound + 300 outbound"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="advertisingSpend30Days" className="block text-sm font-medium text-gray-700 mb-1.5">
                What is your ad spend in the last 30 days?
              </label>
              <input
                type="text"
                id="advertisingSpend30Days"
                name="advertisingSpend30Days"
                value={formData.advertisingSpend30Days}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                placeholder="e.g., $5,000 on Google Ads, $2,000 on Facebook"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="crmUsed" className="block text-sm font-medium text-gray-700 mb-1.5">
                What CRM are you currently using?
              </label>
              <input
                type="text"
                id="crmUsed"
                name="crmUsed"
                value={formData.crmUsed}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                placeholder="e.g., Salesforce, HubSpot, GoHighLevel, None"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="missedCallSystem" className="block text-sm font-medium text-gray-700 mb-1.5">
                What is your current system for handling missed calls or calls that come in outside of business hours?
              </label>
              <textarea
                id="missedCallSystem"
                name="missedCallSystem"
                rows={3}
                value={formData.missedCallSystem}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                placeholder="e.g., Voicemail, answering service, call forwarding to cell, nothing currently in place..."
              />
            </div>

            <div className="mt-5">
              <label htmlFor="customerGeneration" className="block text-sm font-medium text-gray-700 mb-1.5">
                How are you currently generating new customers?
              </label>
              <textarea
                id="customerGeneration"
                name="customerGeneration"
                rows={3}
                value={formData.customerGeneration}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                placeholder="e.g., Google Ads, Facebook Ads, referrals, SEO, direct mail, word of mouth..."
              />
            </div>
          </section>

          {/* Pain Points & Goals */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Business Right Now</h2>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="painPoints" className="block text-sm font-medium text-gray-700 mb-1.5">
                  What&apos;s your average sale worth?
                </label>
                <textarea
                  id="painPoints"
                  name="painPoints"
                  rows={3}
                  value={formData.painPoints}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                  placeholder="e.g., $500 per service call, $30,000 per vehicle sale, $2,000 per new patient..."
                />
              </div>

              <div>
                <label htmlFor="successLooksLike" className="block text-sm font-medium text-gray-700 mb-1.5">
                  How many calls or messages do you estimate go unanswered each week?
                </label>
                <textarea
                  id="successLooksLike"
                  name="successLooksLike"
                  rows={3}
                  value={formData.successLooksLike}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                  placeholder="e.g., 20-30 missed calls per week, 50+ after-hours inquiries, 10 voicemails we don't get to..."
                />
              </div>

              <div>
                <label htmlFor="missedOpportunityCost" className="block text-sm font-medium text-gray-700 mb-1.5">
                  What would a missed opportunity cost your business?
                </label>
                <textarea
                  id="missedOpportunityCost"
                  name="missedOpportunityCost"
                  rows={3}
                  value={formData.missedOpportunityCost}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                  placeholder="e.g., A missed call could mean losing a $5,000 sale, or a patient going to a competitor..."
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-teal-500/25 min-w-[200px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Information"
              )}
            </button>
            <p className="text-sm text-gray-500 mt-4">
              We&apos;ll review your information and reach out within 24 hours.
            </p>
          </div>
        </form>
      </main>
    </div>
  )
}
