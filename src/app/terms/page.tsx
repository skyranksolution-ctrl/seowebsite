"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import { ShieldCheck, FileText, ChevronRight } from "lucide-react";

export default function TermsOfServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - SkyRank Solution",
    "description": "Terms of Service and Master Service Agreement for SkyRank Solution services and platform."
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 text-[#051A41]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-8">
            <Link href="/" className="hover:text-[#005FFF] transition">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#051A41] font-bold">Terms of Service</span>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-lg space-y-8">
            <div className="border-b border-zinc-100 pb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF] mb-3">
                <FileText className="h-3.5 w-3.5" /> Master Service Agreement
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#051A41]">Terms of Service</h1>
              <p className="text-xs text-zinc-500 font-bold mt-2 font-mono">Last Updated: January 2026</p>
            </div>

            <div className="space-y-6 text-sm text-zinc-700 leading-relaxed font-medium">
              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">1. Agreement Acceptance</h2>
                <p>
                  By accessing or using the SkyRank Solution website, SaaS audit engine, web development services, mobile application engineering, or cloud infrastructure management, you agree to be legally bound by these Terms of Service. If you do not agree to these terms, please refrain from using our platform and services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">2. Services & Deliverables Scope</h2>
                <p>
                  SkyRank Solution provides digital marketing consulting, AI search engine optimization, web development (Next.js, React, Node.js), mobile application creation (Flutter, React Native), server support (24/7 DevOps), and secure tunnel services. Detailed deliverables, project timelines, and execution phases are documented in individual Statements of Work (SOW) or active subscription plans.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">3. Intellectual Property Rights</h2>
                <p>
                  Upon full payment of agreed project invoices, all custom source code, design assets, graphical UI elements, and bespoke application deliverables become the exclusive property of the client. Proprietary pre-existing SaaS algorithms, crawler scripts, and core SkyRank AI tools remain the intellectual property of SkyRank Solution.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">4. White-Hat Compliance & Guarantees</h2>
                <p>
                  All search optimization activities strictly adhere to Google's Search Quality Rater & Webmaster Guidelines. While SkyRank Solution deploys industry-leading algorithmic strategies, organic search engines update independently; therefore, specific rank positions cannot be guaranteed on un-owned third-party search engines.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">5. Payments, Subscriptions & Cancellations</h2>
                <p>
                  Subscription fees for SaaS tools and recurring agency retainers are billed according to your selected plan (monthly or annual). Subscriptions may be cancelled at any time prior to the next billing cycle with no cancellation penalties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">6. Contact & Support</h2>
                <p>
                  If you have questions regarding these terms, please contact our legal and support team at <a href="mailto:skyranksolution@gmail.com" className="text-[#005FFF] font-bold underline">skyranksolution@gmail.com</a> or call +91 97373 56415.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
