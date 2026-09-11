"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp, Search, Link as LinkIcon, Cpu, Sparkles, Layout, Zap,
  Mail, ArrowRight, ShieldCheck, CheckCircle
} from "lucide-react";

export default function ToolsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SkyRank SaaS SEO Tools - Coming Soon",
    "description": "Preview our upcoming AI-powered SEO SaaS tools: Rank Tracker, Keyword Tool, Backlink Checker, Schema Generator, and Speed Test."
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const futureProducts = [
    { title: "AI Rank Tracker", icon: TrendingUp, desc: "Monitor daily keyword ranks across 120 countries on ZIP code levels with automated SERP crawlers." },
    { title: "Keyword Research Tool", icon: Search, desc: "Unlock search query volumes, competitor difficulty tiers, and semantic keyword maps." },
    { title: "Backlink Checker Engine", icon: LinkIcon, desc: "Crawl index link profiles, analyze referring domain authority, and spot spam link anchors." },
    { title: "Technical Audit Scanner", icon: Cpu, desc: "Automate technical code audits, locating canonical mistakes, broken redirects, and speed logs." },
    { title: "AI Content Brief Generator", icon: Sparkles, desc: "Input target search queries to compile content outlines, headings, and semantic keyword counts." },
    { title: "Structured Schema Generator", icon: Layout, desc: "Automatically draft JSON-LD FAQ, LocalBusiness, and Product structured markup snippets." },
    { title: "Website Speed & CWV Tester", icon: Zap, desc: "Benchmark mobile Largest Contentful Paint metrics and generate automated asset optimizations." },
  ];

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
          {/* Header & Waitlist lead */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF]">
              SaaS Suite (Coming Soon)
            </span>
            <h1 className="text-4xl font-extrabold text-[#051A41] sm:text-5xl">SkyRank AI SEO SaaS Platform</h1>

            <p className="text-zinc-700 text-sm font-medium leading-relaxed max-w-xl mx-auto">
              Our automated search intelligence tools are entering private beta. Join the waitlist to receive immediate access to rank trackers and structured generators.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto pt-4">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="waitlist-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleWaitlistSubmit}
                    className="flex flex-col sm:flex-row gap-2.5 bg-white border border-[#005FFF]/20 rounded-2xl p-2 shadow-md"
                  >
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full rounded-xl border-0 bg-transparent py-2.5 pl-10 pr-4 text-sm text-[#051A41] placeholder-zinc-400 focus:outline-none focus:ring-0 font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-[#FF5800] hover:bg-[#e04d00] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                    >
                      <span>Join Beta</span>
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-green-500/30 bg-white p-5 flex flex-col items-center gap-2 text-center shadow-md"
                  >
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <span className="font-extrabold text-[#051A41] text-base">You are on the list!</span>
                    <p className="text-xs text-zinc-600 font-medium">
                      We will notify you at your email as soon as private beta spots open.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4 justify-center mt-4 text-[11px] text-zinc-600 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[#005FFF]" /> No Credit Card Required</span>
                <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[#005FFF]" /> Direct Sandbox Access</span>
              </div>
            </div>
          </div>

          {/* Grid Preview of upcoming products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProducts.map((prod) => {
              const Icon = prod.icon;
              return (
                <GlowingCard
                  key={prod.title}
                  glowColor="rgba(0, 95, 255, 0.15)"
                  className="p-6 bg-white border border-[#005FFF]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="rounded-xl bg-[#005FFF]/10 border border-[#005FFF]/20 p-3 text-[#005FFF] w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#051A41] flex items-center justify-between">
                      <span>{prod.title}</span>
                      <span className="rounded-full bg-[#FF5800]/10 border border-[#FF5800]/20 px-2 py-0.5 text-[10px] font-bold text-[#FF5800] uppercase tracking-wider">Coming Soon</span>
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">{prod.desc}</p>
                  </div>
                </GlowingCard>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
