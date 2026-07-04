"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion } from "framer-motion";
import {
  Search, Cpu, Target, Globe, MapPin, ShoppingBag, Sparkles, FileText,
  Link as LinkIcon, Zap, Award, HelpCircle, CheckCircle, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Optimization Services",
    "provider": {
      "@type": "Organization",
      "name": "SkyRank Solution"
    },
    "description": "Comprehensive AI-Powered SEO Services including Keyword Research, Technical Audits, On-page Optimization, Local SEO, Ecommerce SEO, and Link Building."
  };

  const detailedServices = [
    {
      title: "Keyword Research",
      icon: Search,
      id: "keywords",
      desc: "Identify high-value keywords that align with target user intents. We analyze monthly search volumes, SERP click-through rates, and ranking difficulty metrics.",
      deliverables: ["Clustered Keyword Roadmap", "Competitor Search Query Audits", "Search Intent Categorizations", "Content Gap Mappings"],
      toolUsed: "SkyRank Keyword Engine, GSC",
    },
    {
      title: "Technical SEO",
      icon: Cpu,
      id: "technical",
      desc: "Remove structural crawling blocks that stop search engine bots from correctly reading your page index coordinates.",
      deliverables: ["Render Diagnostics & Speed Checks", "XML Sitemap & Robots.txt Audits", "Redirect Loops & Canonical Fixes", "Core Web Vitals Optimizations"],
      toolUsed: "SkyRank Auditor Core",
    },
    {
      title: "On-Page SEO",
      icon: Target,
      id: "onpage",
      desc: "Improve structural readability. We optimize headers, link structure, titles, image metadata, and contextual term weights.",
      deliverables: ["Title Tag & Meta Decs Audits", "H1-H4 Heading Structures", "Internal Link Hierarchy Maps", "Image ALT Text Injections"],
      toolUsed: "AI On-page Scanner",
    },
    {
      title: "Off-Page SEO",
      icon: Globe,
      id: "offpage",
      desc: "Establish brand authority across the web. We build external trust parameters through safe mentions, brand relations, and outreach.",
      deliverables: ["Brand Authority Reports", "Unlinked Mention Mappings", "Strategic PR Placements", "Profile Optimization Maps"],
      toolUsed: "Authority Outreach Engine",
    },
    {
      title: "Local SEO",
      icon: MapPin,
      id: "localseo",
      desc: "Dominate geographical searches. We position your physical store branches inside Google Maps and local 3-pack search result listings.",
      deliverables: ["Google Business Profile Setup", "Local Map Pack Optimization", "Local Directory Citation Audits", "Reviews Management Workflow"],
      toolUsed: "SkyRank Local Hub",
    },
    {
      title: "Ecommerce SEO",
      icon: ShoppingBag,
      id: "ecom",
      desc: "Optimize virtual shelves. Drive transactional search intent buyers to category grids, review blocks, and landing detail assets.",
      deliverables: ["Category Taxonomy Mappings", "Product Schema JSON-LDs", "Faceted Filter Navigation Fixes", "Transactional Keyword Funnels"],
      toolUsed: "Commerce Crawler Engine",
    },
    {
      title: "AI SEO Optimization",
      icon: Sparkles,
      id: "aiseo",
      desc: "Use advanced AI models to write meta tags, structure articles, and optimize content semantics for search engines.",
      deliverables: ["AI Schema.org Injections", "Semantic Content Optimizations", "NLP Search Query Matching", "Automated Content Briefs"],
      toolUsed: "SkyRank LLM Core",
    },
    {
      title: "Content Marketing",
      icon: FileText,
      id: "content",
      desc: "Write search content that converts. Our copy balances search engine crawler logic with real user reading habits.",
      deliverables: ["Content Editorial Calendars", "Long-Form Ranking Guides", "SEO Article Outline Briefs", "Conversion Copy Audits"],
      toolUsed: "SkyRank Writer SaaS",
    },
    {
      title: "Link Building",
      icon: LinkIcon,
      id: "linkbuilding",
      desc: "Acquire safe, high-authority editorial links from established industry publications, driving domain authority scores.",
      deliverables: ["Context Outreach Campaigns", "Editorial Placement Injections", "Competitor Backlink Audits", "Disavow Spam Audits"],
      toolUsed: "Outreach CRM Platform",
    },
    {
      title: "Website Speed Optimization",
      icon: Zap,
      id: "speed",
      desc: "Accelerate your page assets. Fast site architectures rank higher and experience 40% lower average landing page bounces.",
      deliverables: ["Image WebP Compress Optimization", "JS/CSS Minify configurations", "Server Response Time Audits", "Font Load Optimization Specs"],
      toolUsed: "Speed Diagnostic Core",
    },
    {
      title: "Google Business Profile",
      icon: Award,
      id: "gbp",
      desc: "Set up and sync business directories. Establish consistent Name, Address, and Phone (NAP) citations across local search hubs.",
      deliverables: ["NAP Citation Audits", "Business Directory Syncing", "Review Routing Optimizations", "Local Promotion Postings"],
      toolUsed: "SkyRank Citation Hub",
    },
    {
      title: "SEO Consultation",
      icon: HelpCircle,
      id: "consultation",
      desc: "Work directly with executive growth architects to design search strategies customized for your scaling goals.",
      deliverables: ["Bi-Weekly Progress Briefs", "Custom Enterprise Dashboards", "Quarterly ROI Search Audits", "Direct Slack Access Support"],
      toolUsed: "Executive Strategy Teams",
    },
  ];

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        {/* Decorative Glows */}
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-25 -left-20 opacity-20"></div>
        <div className="glow-sphere bg-secondary w-[300px] h-[300px] bottom-30 right-20 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              Our Capabilities
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Professional SEO Solutions</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
              Boost your search rankings, traffic pipelines, and conversions using our combination of AI tools and growth expert consulting.
            </p>
          </div>

          {/* Detailed Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <GlowingCard
                  key={srv.title}
                  id={srv.id}
                  glowColor="rgba(0, 102, 255, 0.08)"
                  className="p-6 border-white/5 bg-[#0a0f26]/30 flex flex-col justify-between scroll-mt-24"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{srv.toolUsed}</span>
                    </div>

                    <h3 className="text-base font-bold text-white">{srv.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{srv.desc}</p>
                    
                    {/* Deliverables List */}
                    <div className="pt-4 border-t border-white/5 space-y-2">
                      <span className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block">Deliverables:</span>
                      <div className="space-y-1.5">
                        {srv.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5 text-xs text-zinc-400">
                            <CheckCircle className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <Link
                      href="/audit"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition group"
                    >
                      <span>Audit This Asset</span>
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </GlowingCard>
              );
            })}
          </div>

          {/* CTA Area */}
          <div className="mt-24 rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/10 border border-primary/30 p-8 md:p-12 text-center relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-primary/5 filter blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Not Sure Where to Start?</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Run an instant SEO scan of your website to see what index blocks or crawl errors are holding back your organic visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/audit"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-xs font-semibold text-white shadow-md transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>Run Free SEO Audit</span>
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  Schedule A Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
