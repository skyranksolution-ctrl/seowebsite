"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, BarChart2, CheckCircle2, ChevronRight, HelpCircle, FileText } from "lucide-react";
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
    glowColor: "rgba(0, 102, 255, 0.15)",
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
    glowColor: "rgba(0, 194, 255, 0.15)",
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
    glowColor: "rgba(168, 85, 247, 0.15)",
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

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              Growth roadmaps
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Growth Case Studies</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
              Read how SkyRank Solution engineers resolved index errors, built high-value keyword structures, and drove conversions.
            </p>
          </div>

          {/* Interactive Selector Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector buttons */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest block mb-2 px-2">Select Campaign</span>
              {cases.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setSelectedCase(c.slug)}
                  className={`w-full text-left rounded-xl p-4 transition border ${
                    selectedCase === c.slug
                      ? "bg-primary/10 border-primary text-white shadow-[0_0_15px_rgba(0,102,255,0.1)]"
                      : "bg-[#0a0f26]/40 border-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{c.category}</span>
                  <h4 className="text-sm font-bold mt-1">{c.client}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-green-400 font-semibold">{c.growthMetric}</span>
                    <ChevronRight className={`h-4 w-4 text-zinc-500 transition-transform ${selectedCase === c.slug ? "translate-x-1" : ""}`} />
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
                  <GlowingCard glowColor={activeCase.glowColor} className="p-8 border-white/5 bg-[#0a0f26]/50">
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 gap-4">
                        <div>
                          <span className="text-xs text-primary font-bold uppercase tracking-wider">{activeCase.category}</span>
                          <h2 className="text-2xl font-extrabold text-white mt-1">{activeCase.title}</h2>
                        </div>
                        <div className="rounded-xl bg-gradient-to-r from-primary/20 to-secondary/15 border border-primary/30 px-4 py-2 shrink-0 text-center">
                          <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono">Result</span>
                          <span className="text-base font-bold text-green-400">{activeCase.growthMetric}</span>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-300 italic font-medium leading-relaxed">
                        &ldquo;{activeCase.subtitle}&rdquo;
                      </p>

                      {/* Challenge */}
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">The Challenge:</span>
                        <p className="text-xs text-zinc-300 leading-relaxed bg-[#050816]/30 rounded-lg p-3 border border-white/5">
                          {activeCase.challenge}
                        </p>
                      </div>

                      {/* Strategy */}
                      <div className="space-y-3">
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Applied SkyRank Strategy:</span>
                        <div className="space-y-2">
                          {activeCase.strategy.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="space-y-2 border-t border-white/5 pt-6">
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Business Outcome:</span>
                        <p className="text-xs text-zinc-300 leading-relaxed bg-primary/5 border border-primary/20 rounded-lg p-3">
                          {activeCase.outcome}
                        </p>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Link
                          href="/contact"
                          className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-white hover:bg-opacity-95 shadow-md flex items-center gap-1.5 transition"
                        >
                          <span>Replicate These Results</span>
                          <ChevronRight className="h-3.5 w-3.5" />
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
