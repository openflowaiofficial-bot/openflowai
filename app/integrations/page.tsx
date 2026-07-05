"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Search, Check } from "lucide-react"
import { DemoModal } from "@/components/demo-modal"

const integrations = [
  // CRM Systems
  { name: "Salesforce", logo: "/salesforce-logo.png", category: "CRM" },
  { name: "HubSpot", logo: "/hubspot-logo.png", category: "CRM" },
  { name: "Zoho CRM", logo: "/zoho-crm-logo.png", category: "CRM" },
  { name: "Pipedrive", logo: "/pipedrive-logo.jpg", category: "CRM" },
  { name: "Close CRM", logo: "/close-crm-logo.jpg", category: "CRM" },
  { name: "Microsoft Dynamics", logo: "/microsoft-dynamics-logo.jpg", category: "CRM" },
  { name: "Follow Up Boss", logo: "/follow-up-boss-logo.png", category: "CRM" },
  { name: "Copper CRM", logo: "/copper-crm-logo.jpg", category: "CRM" },
  { name: "Insightly", logo: "/insightly-logo.jpg", category: "CRM" },
  { name: "Nimble", logo: "/nimble-crm-logo.jpg", category: "CRM" },
  { name: "Keap", logo: "/keap-logo.jpg", category: "CRM" },
  { name: "Nutshell", logo: "/nutshell-crm-logo.jpg", category: "CRM" },
  { name: "Agile CRM", logo: "/agile-crm-logo.jpg", category: "CRM" },
  { name: "SugarCRM", logo: "/sugarcrm-logo.png", category: "CRM" },
  { name: "Capsule CRM", logo: "/capsule-crm-logo.jpg", category: "CRM" },

  // Automotive
  { name: "VinSolutions", logo: "/vinsolutions-logo.jpg", category: "Automotive" },
  { name: "Cox Automotive", logo: "/cox-automotive-logo.jpg", category: "Automotive" },
  { name: "vAuto", logo: "/vauto-logo.jpg", category: "Automotive" },
  { name: "DealerSocket", logo: "/dealersocket-logo.jpg", category: "Automotive" },
  { name: "Elead CRM", logo: "/elead-crm-logo.jpg", category: "Automotive" },
  { name: "CDK Global", logo: "/cdk-global-logo.jpg", category: "Automotive" },
  { name: "Reynolds & Reynolds", logo: "/reynolds-reynolds-logo.jpg", category: "Automotive" },
  { name: "Dominion DMS", logo: "/dominion-dms-logo.jpg", category: "Automotive" },
  { name: "AutoManager", logo: "/automanager-logo.jpg", category: "Automotive" },
  { name: "DealerCenter", logo: "/dealercenter-logo.jpg", category: "Automotive" },

  // Home Services
  { name: "ServiceTitan", logo: "/servicetitan-logo.png", category: "Home Services" },
  { name: "Jobber", logo: "/jobber-crm-logo.jpg", category: "Home Services" },
  { name: "Housecall Pro", logo: "/housecall-pro-logo.jpg", category: "Home Services" },
  { name: "FieldEdge", logo: "/fieldedge-logo.jpg", category: "Home Services" },
  { name: "ServiceM8", logo: "/servicem8-logo.jpg", category: "Home Services" },
  { name: "ServiceFusion", logo: "/servicefusion-logo.jpg", category: "Home Services" },
  { name: "Zuper", logo: "/zuper-logo.jpg", category: "Home Services" },
  { name: "mHelpDesk", logo: "/mhelpdesk-logo.jpg", category: "Home Services" },
  { name: "Workiz", logo: "/placeholder.svg?height=100&width=100", category: "Home Services" },
  { name: "ServiceMonster", logo: "/placeholder.svg?height=100&width=100", category: "Home Services" },
  { name: "Vonigo", logo: "/placeholder.svg?height=100&width=100", category: "Home Services" },
  { name: "BuildOps", logo: "/placeholder.svg?height=100&width=100", category: "Home Services" },

  // Wellness & Beauty
  { name: "MindBody", logo: "/mindbody-inspired-logo.png", category: "Wellness" },
  { name: "Vagaro", logo: "/vagaro-logo.jpg", category: "Wellness" },
  { name: "Booker", logo: "/booker-business-software-logo.jpg", category: "Wellness" },
  { name: "Fresha", logo: "/fresha-logo.jpg", category: "Wellness" },
  { name: "Zenoti", logo: "/zenoti-logo.jpg", category: "Wellness" },
  { name: "Square Appointments", logo: "/placeholder.svg?height=100&width=100", category: "Wellness" },
  { name: "Schedulicity", logo: "/placeholder.svg?height=100&width=100", category: "Wellness" },
  { name: "Phorest", logo: "/placeholder.svg?height=100&width=100", category: "Wellness" },
  { name: "GlossGenius", logo: "/placeholder.svg?height=100&width=100", category: "Wellness" },
  { name: "Meevo", logo: "/placeholder.svg?height=100&width=100", category: "Wellness" },

  // Communication
  { name: "Twilio", logo: "/twilio-logo.jpg", category: "Communication" },
  { name: "Slack", logo: "/slack-logo.jpg", category: "Communication" },
  { name: "Microsoft Teams", logo: "/microsoft-teams-logo.jpg", category: "Communication" },
  { name: "Intercom", logo: "/intercom-logo.jpg", category: "Communication" },
  { name: "Zoom", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "Discord", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "WhatsApp Business", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "Telegram", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "RingCentral", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "8x8", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "Vonage", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },
  { name: "Nextiva", logo: "/placeholder.svg?height=100&width=100", category: "Communication" },

  // Customer Support
  { name: "Zendesk", logo: "/zendesk-logo.jpg", category: "Support" },
  { name: "Freshdesk", logo: "/freshdesk-logo.jpg", category: "Support" },
  { name: "Help Scout", logo: "/helpscout-logo.jpg", category: "Support" },
  { name: "Gorgias", logo: "/placeholder.svg?height=100&width=100", category: "Support" },
  { name: "Kustomer", logo: "/placeholder.svg?height=100&width=100", category: "Support" },
  { name: "Front", logo: "/placeholder.svg?height=100&width=100", category: "Support" },
  { name: "Tidio", logo: "/placeholder.svg?height=100&width=100", category: "Support" },
  { name: "LiveChat", logo: "/placeholder.svg?height=100&width=100", category: "Support" },
  { name: "Crisp", logo: "/placeholder.svg?height=100&width=100", category: "Support" },
  { name: "Drift", logo: "/placeholder.svg?height=100&width=100", category: "Support" },

  // Automation & Integration
  { name: "Zapier", logo: "/zapier-logo.jpg", category: "Automation" },
  { name: "Make", logo: "/make-logo.jpg", category: "Automation" },
  { name: "n8n", logo: "/n8n-logo.jpg", category: "Automation" },
  { name: "IFTTT", logo: "/placeholder.svg?height=100&width=100", category: "Automation" },
  { name: "Integromat", logo: "/placeholder.svg?height=100&width=100", category: "Automation" },
  { name: "Workato", logo: "/placeholder.svg?height=100&width=100", category: "Automation" },
  { name: "Tray.io", logo: "/placeholder.svg?height=100&width=100", category: "Automation" },
  { name: "Automate.io", logo: "/placeholder.svg?height=100&width=100", category: "Automation" },

  // Scheduling
  { name: "Calendly", logo: "/calendly-logo.jpg", category: "Scheduling" },
  { name: "Cal.com", logo: "/calcom-logo.jpg", category: "Scheduling" },
  { name: "Acuity Scheduling", logo: "/acuity-logo.jpg", category: "Scheduling" },
  { name: "Setmore", logo: "/placeholder.svg?height=100&width=100", category: "Scheduling" },
  { name: "SimplyBook", logo: "/placeholder.svg?height=100&width=100", category: "Scheduling" },
  { name: "10to8", logo: "/placeholder.svg?height=100&width=100", category: "Scheduling" },
  { name: "Appointlet", logo: "/placeholder.svg?height=100&width=100", category: "Scheduling" },
  { name: "Doodle", logo: "/placeholder.svg?height=100&width=100", category: "Scheduling" },

  // Productivity
  { name: "Google Workspace", logo: "/google-workspace-logo.png", category: "Productivity" },
  { name: "Microsoft 365", logo: "/microsoft-365-logo.jpg", category: "Productivity" },
  { name: "Notion", logo: "/placeholder.svg?height=100&width=100", category: "Productivity" },
  { name: "Evernote", logo: "/placeholder.svg?height=100&width=100", category: "Productivity" },
  { name: "Airtable", logo: "/placeholder.svg?height=100&width=100", category: "Productivity" },
  { name: "Coda", logo: "/placeholder.svg?height=100&width=100", category: "Productivity" },
  { name: "Dropbox", logo: "/placeholder.svg?height=100&width=100", category: "Productivity" },
  { name: "Box", logo: "/placeholder.svg?height=100&width=100", category: "Productivity" },

  // Project Management
  { name: "Monday.com", logo: "/monday-logo.jpg", category: "Project Management" },
  { name: "Asana", logo: "/asana-logo.jpg", category: "Project Management" },
  { name: "Trello", logo: "/trello-logo.jpg", category: "Project Management" },
  { name: "Jira", logo: "/placeholder.svg?height=100&width=100", category: "Project Management" },
  { name: "ClickUp", logo: "/placeholder.svg?height=100&width=100", category: "Project Management" },
  { name: "Basecamp", logo: "/placeholder.svg?height=100&width=100", category: "Project Management" },
  { name: "Wrike", logo: "/placeholder.svg?height=100&width=100", category: "Project Management" },
  { name: "Smartsheet", logo: "/placeholder.svg?height=100&width=100", category: "Project Management" },
  { name: "Teamwork", logo: "/placeholder.svg?height=100&width=100", category: "Project Management" },

  // Marketing & Email
  { name: "ActiveCampaign", logo: "/activecampaign-logo.jpg", category: "Marketing" },
  { name: "Mailchimp", logo: "/mailchimp-logo.jpg", category: "Marketing" },
  { name: "Constant Contact", logo: "/constant-contact-logo.jpg", category: "Marketing" },
  { name: "SendGrid", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "ConvertKit", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "Klaviyo", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "Drip", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "GetResponse", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "AWeber", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "Campaign Monitor", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "Pardot", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },
  { name: "Marketo", logo: "/placeholder.svg?height=100&width=100", category: "Marketing" },

  // Payments
  { name: "Stripe", logo: "/stripe-logo.jpg", category: "Payments" },
  { name: "Square", logo: "/square-logo.jpg", category: "Payments" },
  { name: "PayPal", logo: "/paypal-logo.jpg", category: "Payments" },
  { name: "Braintree", logo: "/placeholder.svg?height=100&width=100", category: "Payments" },
  { name: "Authorize.net", logo: "/placeholder.svg?height=100&width=100", category: "Payments" },
  { name: "Adyen", logo: "/placeholder.svg?height=100&width=100", category: "Payments" },
  { name: "Worldpay", logo: "/placeholder.svg?height=100&width=100", category: "Payments" },
  { name: "2Checkout", logo: "/placeholder.svg?height=100&width=100", category: "Payments" },
  { name: "Razorpay", logo: "/placeholder.svg?height=100&width=100", category: "Payments" },

  // Accounting
  { name: "QuickBooks", logo: "/quickbooks-logo.jpg", category: "Accounting" },
  { name: "Xero", logo: "/xero-logo.jpg", category: "Accounting" },
  { name: "FreshBooks", logo: "/freshbooks-logo.jpg", category: "Accounting" },
  { name: "Wave", logo: "/placeholder.svg?height=100&width=100", category: "Accounting" },
  { name: "Sage", logo: "/placeholder.svg?height=100&width=100", category: "Accounting" },
  { name: "Zoho Books", logo: "/placeholder.svg?height=100&width=100", category: "Accounting" },
  { name: "NetSuite", logo: "/placeholder.svg?height=100&width=100", category: "Accounting" },
  { name: "Bill.com", logo: "/placeholder.svg?height=100&width=100", category: "Accounting" },

  // E-commerce
  { name: "Shopify", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },
  { name: "WooCommerce", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },
  { name: "BigCommerce", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },
  { name: "Magento", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },
  { name: "PrestaShop", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },
  { name: "Wix", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },
  { name: "Squarespace", logo: "/placeholder.svg?height=100&width=100", category: "E-commerce" },

  // Social Media
  { name: "Facebook", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },
  { name: "Instagram", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },
  { name: "Twitter", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },
  { name: "LinkedIn", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },
  { name: "TikTok", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },
  { name: "Hootsuite", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },
  { name: "Buffer", logo: "/placeholder.svg?height=100&width=100", category: "Social Media" },

  // HR & Recruiting
  { name: "BambooHR", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "Workday", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "ADP", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "Gusto", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "Rippling", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "Namely", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "Greenhouse", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
  { name: "Lever", logo: "/placeholder.svg?height=100&width=100", category: "HR" },
]

const categories = [
  "All",
  "CRM",
  "Automotive",
  "Home Services",
  "Wellness",
  "Communication",
  "Support",
  "Automation",
  "Scheduling",
  "Productivity",
  "Project Management",
  "Marketing",
  "Payments",
  "Accounting",
  "E-commerce",
  "Social Media",
  "HR",
]

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1026] via-[#1a2742] to-[#0A1026] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-2">
              Connect to the Tools{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                You Already Use
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              OpenFlow AI seamlessly integrates with your existing CRM, scheduling tools, and business software. No
              disruption, just enhanced automation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6 sm:mb-8">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-sm sm:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-cyan-400 hover:bg-cyan-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {filteredIntegrations.length} Integration{filteredIntegrations.length !== 1 ? "s" : ""} Available
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Connect OpenFlow AI to your favorite tools in minutes
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {filteredIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-blue-50 transition-all duration-300">
                      <Image
                        src={integration.logo || "/placeholder.svg"}
                        alt={integration.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{integration.name}</h3>
                    <span className="text-xs sm:text-sm text-gray-500">{integration.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1026] to-[#1a2742]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8">
            Don&apos;t See Your Tool?
          </h2>
          <p className="text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
            We&apos;re constantly adding new integrations. Request a custom integration or connect via our API.
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Integration
          </button>
        </div>
      </section>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <Footer />
    </div>
  )
}
