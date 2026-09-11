"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PortfolioItem {
  clientName: string;
  category: "SaaS" | "E-commerce" | "Local SEO" | "Enterprise";
  description: string;
  metrics: {
    trafficGrowth: string;
    keywordRanked: string;
    drIncrease: string;
  };
  glowColor: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    clientName: "SaaSFlow Corp.",
    category: "SaaS",
    description: "Scaled sign-ups by optimizing semantic search terms on landing blogs and structuring comparison folders.",
    metrics: { trafficGrowth: "+340% Traffic", keywordRanked: "1.2k Keywords", drIncrease: "+18 DR points" },
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    clientName: "E-Com Universe",
    category: "E-commerce",
    description: "Re-indexed 5,000 product pages, optimized structured merchant schemas, and cleaned filter URL parameters.",
    metrics: { trafficGrowth: "+210% Traffic", keywordRanked: "840 Keywords", drIncrease: "+12 DR points" },
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    clientName: "Denver Medical Center",
    category: "Local SEO",
    description: "Synced Name, Address, and Phone directories, capturing local patient searches on Map Packs.",
    metrics: { trafficGrowth: "+180% Leads", keywordRanked: "320 Keywords", drIncrease: "+8 DR points" },
    glowColor: "rgba(255, 88, 0, 0.15)",
  },
  {
    clientName: "Fintech Prime SaaS",
    category: "SaaS",
    description: "Optimized transactional search briefs, building high-authority links across editorial financial journals.",
    metrics: { trafficGrowth: "+410% Traffic", keywordRanked: "2.8k Keywords", drIncrease: "+22 DR points" },
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    clientName: "Vertex Logistics",
    category: "Enterprise",
    description: "Designed sub-domain architectures, redirected broken logs, and optimized mobile Web Vitals speeds.",
    metrics: { trafficGrowth: "+150% Traffic", keywordRanked: "980 Keywords", drIncrease: "+15 DR points" },
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    clientName: "Apex Retail Group",
    category: "E-commerce",
    description: "Automated category pagination and structural breadcrumbs, increasing rank speeds across key collections.",
    metrics: { trafficGrowth: "+280% Sales", keywordRanked: "1.4k Keywords", drIncrease: "+14 DR points" },
    glowColor: "rgba(255, 88, 0, 0.15)",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"All" | "SaaS" | "E-commerce" | "Local SEO" | "Enterprise">("All");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SkyRank Portfolio & Client Success",
    "description": "Browse our portfolio of SEO campaigns across SaaS, E-commerce, Local Business, and Enterprise platforms."
  };

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        {/* Glow Spheres */}
        <div className="glow-sphere bg-[#005FFF] w-[400px] h-[400px] -top-20 -left-20 opacity-15"></div>
        <div className="glow-sphere bg-[#FF5800] w-[300px] h-[300px] bottom-20 right-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF]">
              Client Success
            </span>
            <h1 className="text-4xl font-extrabold text-[#051A41] sm:text-5xl">Our Optimized Projects</h1>
            <p className="text-zinc-700 text-sm font-medium leading-relaxed max-w-xl mx-auto">
              Explore how we optimize crawler compliance, search intent context, and loading performance to drive actual organic leads.
            </p>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(["All", "SaaS", "E-commerce", "Local SEO", "Enterprise"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-[#005FFF] text-white shadow-sm"
                    : "bg-white border border-[#005FFF]/20 text-zinc-700 hover:text-[#051A41] hover:bg-[#005FFF]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.clientName}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlowingCard
                    glowColor={item.glowColor}
                    className="p-6 bg-white border border-[#005FFF]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-[#005FFF]/10 border border-[#005FFF]/20 px-3 py-0.5 text-[10px] font-bold text-[#005FFF] uppercase tracking-wider">
                          {item.category}
                        </span>
                        <TrendingUp className="h-4.5 w-4.5 text-[#FF5800]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#051A41] mt-2">{item.clientName}</h3>
                      <p className="text-xs text-zinc-600 font-medium leading-relaxed">{item.description}</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-zinc-100 text-center">
                      <div className="bg-[#EBEAFA]/70 rounded-xl p-2.5 border border-[#005FFF]/10">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-wider">Traffic</span>
                        <span className="text-xs font-bold text-green-600 block mt-0.5">{item.metrics.trafficGrowth}</span>
                      </div>
                      <div className="bg-[#EBEAFA]/70 rounded-xl p-2.5 border border-[#005FFF]/10">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-wider">Keywords</span>
                        <span className="text-xs font-bold text-[#051A41] block mt-0.5">{item.metrics.keywordRanked}</span>
                      </div>
                      <div className="bg-[#EBEAFA]/70 rounded-xl p-2.5 border border-[#005FFF]/10">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-wider">Domain</span>
                        <span className="text-xs font-bold text-[#005FFF] block mt-0.5">{item.metrics.drIncrease}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-2">
                      <Link
                        href="/case-studies"
                        className="inline-flex items-center justify-center w-full rounded-xl bg-[#005FFF] hover:bg-[#0047cc] py-2.5 text-xs font-bold text-white shadow-sm hover:shadow-md transition group"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
