"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion } from "framer-motion";
import { Eye, Shield, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SkyRank Solution",
    "description": "Learn about the mission, vision, timeline, and expert team behind SkyRank Solution AI-Powered SEO Agency + SEO SaaS Platform.",
    "publisher": {
      "@type": "Organization",
      "name": "SkyRank Solution",
      "logo": "https://skyrank.io/logo.png"
    }
  };

  const values = [
    { title: "Our Mission", text: "To democratize search engine rankings by providing cutting-edge AI technologies and white-hat consultation that delivers measurable organic ROI.", icon: Target },
    { title: "Our Vision", text: "To become the global standard for organic web optimizations, transforming how companies index context and build trust parameters.", icon: Eye },
    { title: "Our Integrity", text: "100% white-hat operations. We build search presence with stable compliance rules matching Google search quality guidelines.", icon: Shield },
  ];

  const milestones = [
    { year: "2023", title: "Company Founding", desc: "SkyRank was founded by a small group of search engineers and AI researchers aiming to automate keyword crawling." },
    { year: "2024", title: "Launch of SaaS Platform v1", desc: "We rolled out our automatic rank tracking and live schema generator to 100+ beta testers, boosting organic traffic averages by 140%." },
    { year: "2025", title: "Agency Integration & Expansion", desc: "Combined SaaS automation with high-touch agency consulting, building a full-stack SEO suite supporting enterprise clients." },
    { year: "2026", title: "AI Agent Search Core", desc: "Introduced large language context checkers and automated content briefs matching semantic search engines." },
  ];


  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        {/* Ambient background glows */}
        <div className="glow-sphere bg-[#005FFF] w-[400px] h-[400px] -top-20 -right-20 opacity-15"></div>
        <div className="glow-sphere bg-[#FF5800] w-[300px] h-[300px] bottom-20 left-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF]">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold text-[#051A41] sm:text-5xl">Meet SkyRank Solution</h1>
            <p className="text-zinc-700 text-base font-medium leading-relaxed max-w-2xl mx-auto">
              We are an AI-powered SEO agency and SaaS platform dedicated to helping modern organizations dominate organic search feeds.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <GlowingCard
                  key={val.title}
                  glowColor="rgba(0, 95, 255, 0.15)"
                  className="p-8 flex flex-col gap-4 bg-white border border-[#005FFF]/15 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className="rounded-xl bg-[#005FFF]/10 border border-[#005FFF]/20 p-3 text-[#005FFF] w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#051A41]">{val.title}</h3>
                  <p className="text-xs text-zinc-600 font-medium leading-relaxed">{val.text}</p>
                </GlowingCard>
              );
            })}
          </div>

          {/* Our Story & History Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#005FFF] bg-[#005FFF]/10 px-3 py-1 rounded-full w-fit border border-[#005FFF]/20">Our Journey</h2>
              <h3 className="text-3xl font-extrabold text-[#051A41] leading-tight">How We Sparked Rank Automation</h3>
              <p className="text-zinc-700 text-sm font-medium leading-relaxed">
                SkyRank Solution began with a simple observation: search engines evolved into semantic models, but standard SEO tools remained stuck in old static word density checks.
              </p>
              <p className="text-zinc-600 text-sm font-medium leading-relaxed">
                We developed a proprietary crawler model that scans modern pages, runs NLP mapping parameters, and suggests structural patches in real time. Today, we power organic pipelines for hundreds of businesses globally.
              </p>
            </div>

            <div className="lg:col-span-7 relative border-l-2 border-[#005FFF]/30 pl-6 space-y-8 ml-4 lg:ml-0">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#005FFF] border-2 border-white shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                  </div>
                  
                  <span className="text-xs font-mono font-extrabold text-[#FF5800] bg-[#FF5800]/10 px-2.5 py-0.5 rounded-md border border-[#FF5800]/20">{milestone.year}</span>
                  <h4 className="text-lg font-bold text-[#051A41] mt-1.5">{milestone.title}</h4>
                  <p className="text-xs text-zinc-600 font-medium mt-1 leading-relaxed">{milestone.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </>
  );
}
