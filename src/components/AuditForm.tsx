"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, Sparkles, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    websiteUrl: "",
    email: "",
    phone: "",
  });
  const [step, setStep] = useState<"input" | "loading" | "results">("input");
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingStages = [
    "Establishing connection with target domain...",
    "Crawling meta tags, headers, and robots.txt...",
    "Testing Core Web Vitals & mobile responsiveness...",
    "Analyzing backlink authority & domain age...",
    "Compiling AI optimization report...",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl || !formData.email) return;

    setStep("loading");
    setLoadingStep(0);

    // Simulate audit stages
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingStages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setStep("results");
          // Trigger confetti celebration on result screen load
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#0066FF", "#00C2FF", "#ffffff"],
          });
          return prev;
        }
      });
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#0a0f24]/70 p-6 shadow-2xl backdrop-blur-lg relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute -right-20 -top-20 w-44 h-44 rounded-full bg-secondary/15 filter blur-[40px] pointer-events-none"></div>
      
      <AnimatePresence mode="wait">
        {step === "input" && (
          <motion.div
            key="input-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                <Sparkles className="h-3 w-3" /> AI Rank Scanner
              </span>
              <h3 className="text-2xl font-bold text-white">Get Your Free SEO Audit</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Discover critical rank errors, speed bottlenecks, and custom keyword opportunities.
              </p>
            </div>

            <form onSubmit={startAudit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-sm text-white focus:border-primary focus:outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="My Startup Inc."
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-sm text-white focus:border-primary focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="websiteUrl" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Website URL
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    required
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white focus:border-primary focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your work email"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-sm text-white focus:border-primary focus:outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-sm text-white focus:border-primary focus:outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] group mt-4"
              >
                <span>Run Instant SEO Audit</span>
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        )}

        {step === "loading" && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <Loader2 className="h-10 w-10 text-secondary animate-spin mb-6" />
            <h4 className="text-lg font-bold text-white mb-2">Analyzing {formData.websiteUrl.replace(/https?:\/\//i, "")}</h4>
            
            {/* Custom progress step list */}
            <div className="space-y-3 text-left w-full max-w-sm mt-6">
              {loadingStages.map((stage, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  {loadingStep > idx ? (
                    <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                  ) : loadingStep === idx ? (
                    <Loader2 className="h-4 w-4 text-secondary animate-spin shrink-0" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border border-white/20 shrink-0" />
                  )}
                  <span className={loadingStep === idx ? "text-white font-semibold" : loadingStep > idx ? "text-zinc-400" : "text-zinc-600"}>
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {step === "results" && (
          <motion.div
            key="results-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h4 className="font-bold text-white text-lg">SEO Report Summary</h4>
                <p className="text-xs text-zinc-500">{formData.websiteUrl.replace(/https?:\/\//i, "")}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-amber-400">74<span className="text-sm font-medium text-zinc-500">/100</span></span>
                <span className="block text-[10px] text-zinc-400 font-semibold uppercase mt-0.5">Needs Attention</span>
              </div>
            </div>

            {/* Audit findings */}
            <div className="space-y-3">
              <div className="flex gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white">Critical: Missing Schema Markup</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    Your website does not deploy structured schema.org JSON-LD data, reducing rich-snippet rankings on Google searches.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white">Warning: Poor Core Web Vitals (Mobile LCP)</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    Largest Contentful Paint exceeds 3.5s. Fast-loading layouts rank up to 60% higher on mobile platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white">Passed: Correct Robots.txt & Sitemap</span>
                  <p className="text-xs text-zinc-400 mt-1">
                    Your domain correctly allows indexing bots and has listed all page assets in a sitemap.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA to get help */}
            <div className="rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/10 border border-primary/30 p-5 text-center mt-6">
              <h5 className="font-bold text-white text-base flex items-center justify-center gap-1.5">
                <Shield className="h-4 w-4 text-secondary" /> SkyRank AI Auto-Fix Guide Ready
              </h5>
              <p className="text-xs text-zinc-300 mt-2 max-w-md mx-auto">
                We compiled a custom roadmap with automated code injections to boost {formData.websiteUrl.replace(/https?:\/\//i, "")} to 95+ score.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <button
                  onClick={() => setStep("input")}
                  className="rounded-full border border-white/10 bg-white/5 py-2 px-4 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  Scan Another Site
                </button>
                <a
                  href="/contact"
                  className="rounded-full bg-primary py-2 px-4 text-xs font-semibold text-white hover:bg-opacity-95 shadow-md flex items-center justify-center gap-1 transition"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
