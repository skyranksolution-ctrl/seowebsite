"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion } from "framer-motion";
import { Compass, Eye, Shield, Target, Calendar, Award, Users } from "lucide-react";
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

  const team = [
    { name: "Pratik Kanzariya", role: "Co-Founder & Chief SEO Architect", desc: "10+ years scaling e-commerce platforms and technical crawler configurations.", initial: "PK" },
    { name: "Kartik Chauhan", role: "Co-Founder & Lead Growth Engineer", desc: "Expert in search algorithms, technical index sweeps, and performance scaling.", initial: "KC" },
  ];

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        {/* Ambient background glows */}
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -right-20 opacity-20"></div>
        <div className="glow-sphere bg-secondary w-[300px] h-[300px] bottom-20 left-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Meet SkyRank Solution</h1>
            <p className="text-zinc-300 text-base leading-relaxed">
              We are an AI-powered SEO agency and SaaS platform dedicated to helping modern organizations dominate organic search feeds.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <GlowingCard
                  key={val.title}
                  glowColor="rgba(0, 194, 255, 0.08)"
                  className="p-8 flex flex-col gap-4 border-white/5 bg-[#0a0f26]/30 text-left"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{val.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{val.text}</p>
                </GlowingCard>
              );
            })}
          </div>

          {/* Our Story & History Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Our Journey</h2>
              <h3 className="text-3xl font-bold text-white">How We Sparked Rank Automation</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                SkyRank Solution began with a simple observation: search engines evolved into semantic models, but standard SEO tools remained stuck in old static word density checks.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We developed a proprietary crawler model that scans modern pages, runs NLP mapping parameters, and suggests structural patches in real time. Today, we power organic pipelines for hundreds of businesses globally.
              </p>
            </div>

            <div className="lg:col-span-7 relative border-l border-white/10 pl-6 space-y-8 ml-4 lg:ml-0">
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
                  <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#050816] border border-secondary shadow-[0_0_10px_rgba(0,194,255,0.8)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                  </div>
                  
                  <span className="text-xs font-mono font-bold text-secondary">{milestone.year}</span>
                  <h4 className="text-base font-bold text-white mt-1">{milestone.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{milestone.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">The Team</h2>
              <h3 className="text-3xl font-bold text-white">Led By Search Experts</h3>
              <p className="text-zinc-400 text-sm">
                Meet the engineering architects and SEO consultants guiding our clients&apos; growth roadmaps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <GlowingCard
                  key={member.name}
                  glowColor="rgba(0, 102, 255, 0.08)"
                  className="p-6 border-white/5 bg-[#070c20]/45 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[1px] flex items-center justify-center text-white font-extrabold text-lg mb-6 shadow-md">
                      <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#050816]">
                        {member.initial}
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white">{member.name}</h4>
                    <p className="text-xs text-secondary font-semibold mt-1">{member.role}</p>
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{member.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </Link>
                  </div>
                </GlowingCard>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
