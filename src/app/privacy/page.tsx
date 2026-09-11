"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - SkyRank Solution",
    "description": "Privacy Policy and data protection terms for SkyRank Solution services and SaaS platforms."
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
            <span className="text-[#051A41] font-bold">Privacy Policy</span>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-lg space-y-8">
            <div className="border-b border-zinc-100 pb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF] mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Data Security & Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#051A41]">Privacy Policy</h1>
              <p className="text-xs text-zinc-500 font-bold mt-2 font-mono">Last Updated: January 2026</p>
            </div>

            <div className="space-y-6 text-sm text-zinc-700 leading-relaxed font-medium">
              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">1. Overview & Commitment</h2>
                <p>
                  At SkyRank Solution, we are committed to safeguarding the privacy and confidential data of our clients, website visitors, and SaaS platform users. This Privacy Policy details how we collect, process, store, and protect your personal and analytical information when you interact with our websites, software tools, and digital marketing services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">2. Information We Collect</h2>
                <p>
                  We collect information to provide high-performance SEO audits, web development services, and cloud server management:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
                  <li><strong>Account & Contact Information:</strong> Name, business email address, phone number, and company URL when requesting audits, custom proposals, or service inquiries.</li>
                  <li><strong>Technical Search Telemetry:</strong> Domain URL submissions, sitemap structures, search console API read authorization, and keyword ranking tracking metrics.</li>
                  <li><strong>Automated Analytics:</strong> IP addresses, browser specifications, page view duration, and device configurations logged for security and load-balancing optimization.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">3. How We Use Your Data</h2>
                <p>
                  Your information is strictly used to deliver, optimize, and protect our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
                  <li>Executing instant website SEO audits, performance crawlers, and Core Web Vitals diagnostic reports.</li>
                  <li>Building custom web engineering solutions, mobile applications, and cloud server infrastructure.</li>
                  <li>Providing weekly and monthly white-label rank tracking and analytics dashboards.</li>
                  <li>Communicating technical support updates, proposals, and service notifications.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">4. Data Protection & Security</h2>
                <p>
                  We deploy enterprise-grade security protocols to protect client datasets against unauthorized access, alteration, or disclosure. All data transmissions are encrypted using 256-bit TLS/SSL protocols. Our infrastructure operates behind zero-trust edge proxies, automated firewalls, and daily backup rotations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">5. Third-Party Services & Integrations</h2>
                <p>
                  We do not sell, rent, or trade your personal or business data to third parties. We strictly integrate with verified cloud infrastructure providers (such as AWS, Cloudflare, Google Cloud, and Stripe) exclusively for hosting, analytics processing, and payment processing compliance.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#051A41]">6. Your Data Rights & Support</h2>
                <p>
                  You retain complete ownership of your business data. You may request access, export, update, or total deletion of your personal and technical audit records at any time by contacting our privacy compliance team at <a href="mailto:skyranksolution@gmail.com" className="text-[#005FFF] font-bold underline">skyranksolution@gmail.com</a>.
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
