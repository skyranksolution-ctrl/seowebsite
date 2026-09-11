"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  growthMetric: string;
  challenge: string;
  strategy: string[];
  outcome: string;
  glowColor: string;
}

const cases: CaseStudy[] = [
  {
    slug: "saasflow",
    client: "SaaSFlow Corp.",
    title: "How SaaSFlow Multiplied Signups by 3.4x",
    subtitle: "Scaling keyword clustering and metadata compliance rules for developer integrations.",
    category: "SaaS SEO",
    growthMetric: "+340% Signups",
    challenge: "SaaSFlow had high product relevance but lacked keyword impressions on search engines because competitors targeted general product comparison terms.",
    strategy: [
      "Clustered developer intent keywords targeting integration queries.",
      "Injected automated product feature breadcrumbs and Schema schemas.",
      "Conducted outreach for contextual editorial backlink assets.",
    ],
    outcome: "Signups grew from 1,200/mo to 4,100/mo in 120 days. Gained #1 spots for 80+ high-traffic developer keywords.",
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    slug: "ecom-universe",
    client: "E-Com Universe",
    title: "E-Com Universe Captured +210% Search Revenue",
    subtitle: "Fixing faceted navigation crawl errors and injecting merchant product schemas.",
    category: "Ecommerce SEO",
    growthMetric: "+210% Revenue",
    challenge: "Search crawlers could not access category variations because of faceted filtering loops, resulting in index bloat and lost indexations.",
    strategy: [
      "Cleaned canonical mapping tags across 5,000 product pages.",
      "Optimized Largest Contentful Paint image assets to improve Core Web Vitals.",
      "Automated Product Schema JSON-LD code outputs.",
    ],
    outcome: "Lighthouse mobile score reached 98/100. Organic revenue increased by $145K monthly within a 6-month indexing term.",
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    slug: "fintech-prime",
    client: "Fintech Prime SaaS",
    title: "Fintech Prime Dominates High-Value Finance Keywords",
    subtitle: "Generating high-intent article frameworks and ranking on top positions.",
    category: "Enterprise SEO",
    growthMetric: "DR 42 to 64",
    challenge: "High competing bids on search advertising made PPC leads expensive. Fintech Prime needed organic presence to lower customer acquisition costs.",
    strategy: [
      "Analyzed top content strategies using semantic AI context writers.",
      "Designed comparison guides targeting high CPC keywords.",
      "Secured editorial links across high-authority financial blogs.",
    ],
    outcome: "Domain Rating scaled from 42 to 64. Organic Customer Acquisition Cost (CAC) decreased by 54% over two quarters.",
    glowColor: "rgba(255, 88, 0, 0.15)",
  },
];

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState<string>("saasflow");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SkyRank SEO Case Studies",
    "description": "Read in-depth SEO case studies showing how we help SaaS, E-commerce, and Enterprise companies scale traffic."
  };

  const activeCase = cases.find((c) => c.slug === selectedCase) || cases[0];

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        <div className="glow-sphere bg-[#005FFF] w-[400px] h-[400px] -top-20 -left-20 opacity-15"></div>
        <div className="glow-sphere bg-[#FF5800] w-[300px] h-[300px] bottom-20 right-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF]">
              Growth Roadmaps
            </span>
            <h1 className="text-4xl font-extrabold text-[#051A41] sm:text-5xl">Growth Case Studies</h1>
            <p className="text-zinc-700 text-sm font-medium leading-relaxed max-w-xl mx-auto">
              Read how SkyRank Solution engineers resolved index errors, built high-value keyword structures, and drove conversions.
            </p>
          </div>

          {/* Interactive Selector Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector buttons */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[11px] font-bold text-[#051A41] uppercase tracking-widest block mb-2 px-1">Select Campaign</span>
              {cases.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setSelectedCase(c.slug)}
                  className={`w-full text-left rounded-2xl p-5 transition border ${
                    selectedCase === c.slug
                      ? "bg-[#005FFF] border-[#005FFF] text-white shadow-md"
                      : "bg-white border-[#005FFF]/15 text-[#051A41] hover:border-[#005FFF]/40 shadow-sm"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block ${
                    selectedCase === c.slug ? "bg-white/20 text-white" : "bg-[#005FFF]/10 text-[#005FFF]"
                  }`}>
                    {c.category}
                  </span>
                  <h4 className="text-base font-bold mt-2">{c.client}</h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5">
                    <span className={`text-xs font-bold ${selectedCase === c.slug ? "text-white" : "text-green-600"}`}>{c.growthMetric}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${selectedCase === c.slug ? "translate-x-1 text-white" : "text-zinc-400"}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Right details card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlowingCard glowColor={activeCase.glowColor} className="p-8 bg-white border border-[#005FFF]/15 shadow-md">
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-5 gap-4">
                        <div>
                          <span className="text-xs text-[#005FFF] font-extrabold uppercase tracking-wider bg-[#005FFF]/10 px-3 py-1 rounded-full border border-[#005FFF]/20">{activeCase.category}</span>
                          <h2 className="text-2xl font-extrabold text-[#051A41] mt-2.5">{activeCase.title}</h2>
                        </div>
                        <div className="rounded-2xl bg-[#EBEAFA] border border-[#005FFF]/20 px-5 py-2.5 shrink-0 text-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Result</span>
                          <span className="text-base font-extrabold text-green-600">{activeCase.growthMetric}</span>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-700 italic font-semibold leading-relaxed">
                        &ldquo;{activeCase.subtitle}&rdquo;
                      </p>

                      {/* Challenge */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-[#051A41] uppercase tracking-wider block">The Challenge:</span>
                        <p className="text-xs text-zinc-700 font-medium leading-relaxed bg-[#EBEAFA]/60 rounded-xl p-4 border border-[#005FFF]/10">
                          {activeCase.challenge}
                        </p>
                      </div>

                      {/* Strategy */}
                      <div className="space-y-3">
                        <span className="text-xs font-bold text-[#051A41] uppercase tracking-wider block">Applied SkyRank Strategy:</span>
                        <div className="space-y-2">
                          {activeCase.strategy.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                              <CheckCircle2 className="h-4 w-4 text-[#005FFF] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="space-y-2 border-t border-zinc-100 pt-5">
                        <span className="text-xs font-bold text-[#051A41] uppercase tracking-wider block">Business Outcome:</span>
                        <p className="text-xs text-zinc-800 font-semibold leading-relaxed bg-green-50 border border-green-200 rounded-xl p-4">
                          {activeCase.outcome}
                        </p>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Link
                          href="/contact"
                          className="rounded-full bg-[#FF5800] hover:bg-[#e04d00] px-7 py-3 text-xs font-bold text-white shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 transition"
                        >
                          <span>Replicate These Results</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
