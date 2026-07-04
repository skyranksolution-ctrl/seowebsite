"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, TrendingUp, BarChart3, Shield, Star, Globe, ChevronUp, Sparkles } from "lucide-react";

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<"rank" | "analytics" | "backlinks">("rank");
  const [typedText, setTypedText] = useState("");
  const searchQuery = "best ai seo platform 2026";
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < searchQuery.length) {
        setTypedText((prev) => prev + searchQuery.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsSearching(true);
        setTimeout(() => {
          setIsSearching(false);
          setShowResults(true);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const results = [
    { title: "SkyRank Solution - AI-Powered SEO & Growth SaaS", url: "https://skyrank.io", snippet: "Rank higher and grow faster with the #1 AI-driven SEO platform. Automated optimization, real-time keywords, daily tracking...", isSkyRank: true, position: 1 },
    { title: "Traditional SEO Tools: A Review", url: "https://seogeeks.com", snippet: "Reviewing static keywords and rank tracking solutions for enterprise teams...", isSkyRank: false, position: 2 },
    { title: "10 SEO Tips for Beginners", url: "https://searchenginebasics.org", snippet: "Learn the fundamentals of optimization, content structure, metadata tags...", isSkyRank: false, position: 3 },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#070b1e]/90 p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Top dashboard header bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-xs font-mono text-zinc-500 ml-2">skyrank-saas-dashboard v2.6</span>
        </div>
        <div className="flex rounded-full bg-white/5 p-1 border border-white/10">
          {(["rank", "analytics", "backlinks"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main dashboard content container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tab 1: Rank Tracking Simulator */}
        <AnimatePresence mode="wait">
          {activeTab === "rank" && (
            <motion.div
              key="rank"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:col-span-3 space-y-6"
            >
              {/* Google Search Mockup */}
              <div className="rounded-xl border border-white/10 bg-[#050816] p-4 relative">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-4">
                  <Search className="h-4 w-4 text-zinc-400" />
                  <div className="text-sm text-white font-medium flex-1">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-[2px] h-4 bg-primary ml-0.5 align-middle"
                    />
                  </div>
                  {isSearching && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent"
                    />
                  )}
                </div>

                <div className="space-y-4">
                  {showResults ? (
                    results.map((res) => (
                      <motion.div
                        key={res.position}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: res.position * 0.2 }}
                        className={`rounded-lg p-3 border transition ${
                          res.isSkyRank
                            ? "border-primary/40 bg-primary/5 shadow-[0_0_15px_rgba(0,102,255,0.15)]"
                            : "border-white/5 bg-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary font-mono font-semibold">
                            Position #{res.position} {res.isSkyRank && "🚀"}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">{res.url}</span>
                        </div>
                        <h4 className={`text-sm font-semibold mt-1 ${res.isSkyRank ? "text-secondary" : "text-white"}`}>
                          {res.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1">{res.snippet}</p>
                      </motion.div>
                    ))
                  ) : (
                    <div className="h-36 flex flex-col items-center justify-center text-zinc-500 text-xs gap-2">
                      <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                      <span>Typing query and crawling web references...</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Analytics Simulator */}
          {activeTab === "analytics" && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:col-span-3 space-y-6"
            >
              {/* Traffic Chart */}
              <div className="rounded-xl border border-white/10 bg-[#050816] p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-zinc-500">Monthly Organic Traffic</span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                      145,280 <span className="text-xs font-normal text-green-400 flex items-center"><ChevronUp className="h-3 w-3" /> +24.8%</span>
                    </h3>
                  </div>
                  <BarChart3 className="h-5 w-5 text-secondary" />
                </div>

                <div className="h-44 w-full relative flex items-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <span className="w-full border-t border-dashed border-white/20"></span>
                    <span className="w-full border-t border-dashed border-white/20"></span>
                    <span className="w-full border-t border-dashed border-white/20"></span>
                  </div>

                  {/* SVG Chart Line */}
                  <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Glow Line */}
                    <motion.path
                      d="M0,40 Q15,35 30,28 T60,18 T90,5 T100,2"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M0,40 Q15,35 30,28 T60,18 T90,5 T100,2"
                      fill="none"
                      stroke="#0066FF"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="opacity-30 blur-[4px]"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Fill Gradient under the curve */}
                    <path
                      d="M0,40 Q15,35 30,28 T60,18 T90,5 T100,2 L100,40 L0,40 Z"
                      fill="url(#chartGradient)"
                      className="opacity-15"
                    />
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00C2FF" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* X-Axis labels */}
                  <div className="absolute -bottom-5 w-full flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Nov</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Backlinks Mockup */}
          {activeTab === "backlinks" && (
            <motion.div
              key="backlinks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:col-span-3 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#050816] p-4 text-center">
                  <span className="text-xs text-zinc-500 block mb-1">Domain Rating</span>
                  <div className="text-2xl font-bold text-white flex items-center justify-center gap-1">
                    78 <span className="text-[10px] text-primary font-mono">DR</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 mt-2 block">Top 1.5% globally</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#050816] p-4 text-center">
                  <span className="text-xs text-zinc-500 block mb-1">Referring Domains</span>
                  <div className="text-2xl font-bold text-white">4,892</div>
                  <span className="text-[10px] text-green-400 font-semibold block mt-1">+12.4% this week</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#050816] p-4 text-center">
                  <span className="text-xs text-zinc-500 block mb-1">Toxic Backlinks</span>
                  <div className="text-2xl font-bold text-emerald-400">0%</div>
                  <span className="text-[10px] text-zinc-400 block mt-1">AI Spam Filter Active</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#050816] p-4">
                <span className="text-xs text-zinc-400 block mb-3 font-semibold">New High-Authority Backlinks</span>
                <div className="space-y-2">
                  {[
                    { source: "techcrunch.com", anchor: "ai seo automation platform", dr: 92 },
                    { source: "forbes.com", anchor: "top marketing tools for startups", dr: 94 },
                    { source: "github.com", anchor: "open-source ranking check code", dr: 96 }
                  ].map((link, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <div>
                        <span className="font-semibold text-white block">{link.source}</span>
                        <span className="text-[10px] text-zinc-500">Anchor: &quot;{link.anchor}&quot;</span>
                      </div>
                      <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">DR {link.dr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating dynamic analytics widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">SEO ROI</span>
            <span className="text-sm font-bold text-white">412% Average Increase</span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
          <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Core Web Vitals</span>
            <span className="text-sm font-bold text-white">100/100 Audited Score</span>
          </div>
        </div>
      </div>
    </div>
  );
}
