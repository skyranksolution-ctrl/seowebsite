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

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        {/* Glow Spheres */}
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>
        <div className="glow-sphere bg-secondary w-[300px] h-[300px] bottom-20 right-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header & Waitlist lead */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              SaaS Suite (Coming Soon)
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">SkyRank AI SEO SaaS Platform</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
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
                    className="flex flex-col sm:flex-row gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 backdrop-blur-md"
                  >
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full rounded-xl border-0 bg-transparent py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-opacity-95 transition"
                    >
                      <span>Join Beta Waitlist</span>
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-secondary/30 bg-secondary/10 p-5 flex flex-col items-center gap-2 text-center"
                  >
                    <CheckCircle className="h-8 w-8 text-secondary" />
                    <span className="font-bold text-white text-base">You are on the list!</span>
                    <p className="text-xs text-zinc-400">
                      We will notify you at email inputs as soon as we open server spots.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4 justify-center mt-4 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> No Credit Card Required</span>
                <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Direct Sandbox Access</span>
              </div>
            </div>
          </div>

          {/* Grid Preview of upcoming products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProducts.map((prod, idx) => {
              const Icon = prod.icon;
              return (
                <GlowingCard
                  key={prod.title}
                  glowColor="rgba(0, 194, 255, 0.08)"
                  className="p-6 border-white/5 bg-[#0a0f26]/30 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 text-zinc-400 w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      {prod.title}
                      <span className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[9px] text-zinc-500 uppercase tracking-widest">WIP</span>
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{prod.desc}</p>
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
