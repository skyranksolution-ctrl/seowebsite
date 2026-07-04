"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Check, X, ShieldAlert } from "lucide-react";

export default function PricingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SkyRank SEO Subscription Tiers",
    "description": "Choose the best SkyRank plan for your site - Basic SEO, Standard SEO, Premium SEO, or Custom Enterprise.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "2999",
      "highPrice": "9999",
      "offerCount": "3"
    }
  };

  const featureComparison = [
    { category: "Keyword Capacity", starter: "250 tracked", business: "1,000 tracked", agency: "5,000 tracked", enterprise: "Unlimited" },
    { category: "Audit Frequency", starter: "Weekly", business: "Daily", agency: "Unlimited", enterprise: "Real-time API" },
    { category: "Competitor Monitors", starter: "1 domain", business: "5 domains", agency: "Unlimited", enterprise: "Custom Lists" },
    { category: "AI Content Briefs", starter: "5/mo", business: "20/mo", agency: "100/mo", enterprise: "Unlimited" },
    { category: "White-label Reports", starter: false, business: false, agency: true, enterprise: true },
    { category: "API Endpoint Access", starter: false, business: false, agency: true, enterprise: true },
    { category: "Dedicated Account Lead", starter: false, business: false, agency: false, enterprise: true },
  ];

  const faqs = [
    { question: "Is there a free trial period?", answer: "Yes, all plans (Basic, Standard, and Premium) include a 14-day free trial so you can track keywords and run index audits." },
    { question: "Can I swap plans or cancel anytime?", answer: "Yes. Downgrading or cancelling can be configured from your settings page. You will retain database capacity until the end of the billing term." },
    { question: "Do you offer discounts for annual billing?", answer: "Absolutely. Selecting yearly billing cycle saves 20% off the standard monthly pricing across all plans." },
  ];

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              Flexible Plans
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Transparent Pricing Solutions</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
              Boost your site ranks with a plan tailored to your site size. Start with a 14-day sandbox sandbox test.
            </p>
          </div>

          {/* Pricing Grid */}
          <PricingSection />

          {/* Detailed Matrix Comparison */}
          <div className="mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">Compare Plan Specifications</h3>
              <p className="text-zinc-400 text-xs mt-2">See exact limits and integration access tiers.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0a0f24]/50 backdrop-blur-md overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-zinc-300 font-semibold uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Feature</th>
                    <th className="p-4">Basic</th>
                    <th className="p-4 text-primary">Standard</th>
                    <th className="p-4">Premium</th>
                    <th className="p-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {featureComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition">
                      <td className="p-4 sm:p-5 font-medium text-white">{row.category}</td>
                      <td className="p-4">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? <Check className="h-4.5 w-4.5 text-secondary" /> : <X className="h-4.5 w-4.5 text-zinc-600" />
                        ) : row.starter}
                      </td>
                      <td className="p-4 font-semibold text-primary">
                        {typeof row.business === "boolean" ? (
                          row.business ? <Check className="h-4.5 w-4.5 text-secondary" /> : <X className="h-4.5 w-4.5 text-zinc-600" />
                        ) : row.business}
                      </td>
                      <td className="p-4">
                        {typeof row.agency === "boolean" ? (
                          row.agency ? <Check className="h-4.5 w-4.5 text-secondary" /> : <X className="h-4.5 w-4.5 text-zinc-600" />
                        ) : row.agency}
                      </td>
                      <td className="p-4 text-white">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? <Check className="h-4.5 w-4.5 text-secondary" /> : <X className="h-4.5 w-4.5 text-zinc-600" />
                        ) : row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing FAQ */}
          <div className="mt-28">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white">Pricing FAQs</h3>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
