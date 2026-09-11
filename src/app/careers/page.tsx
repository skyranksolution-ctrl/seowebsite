"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import GlowingCard from "@/components/GlowingCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  Code2,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Compass,
  GraduationCap,
  TrendingUp,
  Target,
  Zap,
  Lightbulb,
  Award,
  MessageSquare,
  ChevronRight,
  Cpu,
  Layers,
  BookOpen
} from "lucide-react";
import Link from "next/link";

interface CareerTrack {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
  badge: string;
  tagline: string;
  overview: string;
  roadmapSteps: { step: string; title: string; desc: string; skills: string[] }[];
  essentialTools: string[];
  salaryRange: string;
  demandLevel: string;
}

const careerTracks: CareerTrack[] = [
  {
    id: "seo-growth",
    title: "SEO Specialist & Organic Growth Strategist",
    category: "Search Optimization",
    icon: Search,
    gradient: "from-[#005FFF] to-[#00C2FF]",
    badge: "High Demand",
    tagline: "Help businesses rank #1 on Google & capture high-intent traffic.",
    overview: "Search Engine Optimization is one of the highest ROI digital skills globally. An SEO Specialist analyzes search algorithms, technical crawl bottlenecks, and semantic content strategies to drive organic revenue.",
    roadmapSteps: [
      {
        step: "Phase 1",
        title: "Master Search Engine Fundamentals",
        desc: "Understand how Google crawls, indexes, and ranks web pages. Learn search intent (informational vs transactional), keyword research, and SERP dynamics.",
        skills: ["Google Search Console", "Keyword Research", "SERP Analysis"]
      },
      {
        step: "Phase 2",
        title: "Technical SEO & Core Web Vitals",
        desc: "Learn page speed optimization, sitemap architecture, robots.txt directives, canonical tags, and structured JSON-LD Schema markup.",
        skills: ["PageSpeed Insights", "Schema.org", "Screaming Frog", "Core Web Vitals"]
      },
      {
        step: "Phase 3",
        title: "Content Marketing & Semantic NLP",
        desc: "Master drafting search briefs, optimization for NLP engines (like ChatGPT & Gemini search), topic clustering, and internal linking strategies.",
        skills: ["Semantic Briefs", "Content Clustering", "Ahrefs / SEMrush"]
      },
      {
        step: "Phase 4",
        title: "Authority Building & Data Telemetry",
        desc: "Acquire white-hat editorial backlinks, conduct competitor link audits, and set up Google Analytics 4 (GA4) revenue telemetry dashboards.",
        skills: ["Digital PR", "Link Outreach", "GA4 Analytics", "Rank Tracking"]
      }
    ],
    essentialTools: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Google Analytics 4"],
    salaryRange: "₹4.5 LPA – ₹24 LPA+ ($45k – $135k/year)",
    demandLevel: "Very High (Exponential Growth)"
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Developer (Next.js & React)",
    category: "Web Engineering",
    icon: Code2,
    gradient: "from-[#FF5800] to-[#FFAA00]",
    badge: "Core Engineering",
    tagline: "Architect ultra-fast modern websites, SaaS portals & web applications.",
    overview: "Modern web development combines frontend interactive components with high-speed server-side rendering (SSR) and cloud APIs. Developers in this field build scalable digital platforms.",
    roadmapSteps: [
      {
        step: "Phase 1",
        title: "Frontend Foundations (HTML, CSS & JS)",
        desc: "Build strong fundamentals in semantic HTML5, modern CSS flexbox/grid layout math, vanilla JavaScript (ES6+), DOM manipulation, and Git version control.",
        skills: ["HTML5 / CSS3", "JavaScript ES6+", "Git / GitHub", "Responsive Design"]
      },
      {
        step: "Phase 2",
        title: "React 19 & Modern CSS Frameworks",
        desc: "Master component-based architecture, state management, hooks, and utility-first styling with Tailwind CSS.",
        skills: ["React 19", "Tailwind CSS", "TypeScript", "State Management"]
      },
      {
        step: "Phase 3",
        title: "Next.js 15 & Server Architecture",
        desc: "Learn server components, API routes, Server-Side Rendering (SSR), Static Site Generation (SSG), and edge performance tuning.",
        skills: ["Next.js App Router", "Server Components", "REST & GraphQL APIs"]
      },
      {
        step: "Phase 4",
        title: "Backend Databases & Cloud Deployment",
        desc: "Connect SQL/NoSQL databases (PostgreSQL, MongoDB), build secure authentication systems, and deploy on Vercel/AWS.",
        skills: ["PostgreSQL / Prisma", "Node.js", "Docker", "Vercel / Cloudflare"]
      }
    ],
    essentialTools: ["VS Code", "Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    salaryRange: "₹6.0 LPA – ₹35 LPA+ ($60k – $160k/year)",
    demandLevel: "Extremely High"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Developer (Flutter & React Native)",
    category: "Mobile Systems",
    icon: Smartphone,
    gradient: "from-[#7C3AED] to-[#A855F7]",
    badge: "Cross-Platform",
    tagline: "Build high-performance native iOS & Android apps with a single codebase.",
    overview: "Mobile app engineering is rapidly growing as mobile devices dominate web traffic. Master cross-platform development to publish sleek, fluid applications to Google Play and Apple App Store.",
    roadmapSteps: [
      {
        step: "Phase 1",
        title: "Programming Core & Mobile UX",
        desc: "Learn mobile design patterns, touch interactions, responsive layouts, and object-oriented programming (Dart / JavaScript).",
        skills: ["Dart / TypeScript", "Mobile UX Guidelines", "OOP Principles"]
      },
      {
        step: "Phase 2",
        title: "Cross-Platform Frameworks",
        desc: "Master Flutter or React Native to build reactive UI components, navigation stacks, and custom animations.",
        skills: ["Flutter", "React Native", "State Management (Bloc/Redux)"]
      },
      {
        step: "Phase 3",
        title: "Device Features & Cloud Integration",
        desc: "Connect push notifications (FCM), camera/GPS sensors, local database persistence, and REST API backends.",
        skills: ["Firebase", "REST APIs", "Native SDK Integration", "SQLite/Hive"]
      },
      {
        step: "Phase 4",
        title: "App Store Publishing & Security",
        desc: "Handle app signing, production builds (.aab/.ipa), TestFlight distributions, and Google Play/App Store compliance.",
        skills: ["Google Play Console", "Apple Developer Portal", "App Security"]
      }
    ],
    essentialTools: ["Flutter / Dart", "React Native", "Android Studio", "Xcode", "Firebase"],
    salaryRange: "₹5.5 LPA – ₹30 LPA+ ($55k – $150k/year)",
    demandLevel: "Very High"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Performance Media Lead",
    category: "Growth & Paid Ads",
    icon: BarChart3,
    gradient: "from-[#059669] to-[#10B981]",
    badge: "High Growth",
    tagline: "Run high-ROI ad campaigns across Google AdWords, Meta & LinkedIn.",
    overview: "Performance Marketers use data analysis, buyer psychological profiling, and targeted PPC ads to turn ad spend directly into customer acquisitions and revenue.",
    roadmapSteps: [
      {
        step: "Phase 1",
        title: "Marketing Fundamentals & Customer Funnels",
        desc: "Understand top-of-funnel (TOFU), middle-of-funnel (MOFU), and bottom-of-funnel (BOFU) buyer journeys and conversion strategy.",
        skills: ["Customer Personas", "Funnel Mapping", "Copywriting Basics"]
      },
      {
        step: "Phase 2",
        title: "Paid Search Ads (Google AdWords)",
        desc: "Master keyword match types, negative keywords, ad extensions, bidding strategies, and Quality Score optimization.",
        skills: ["Google Ads Certified", "PPC Bidding", "Conversion Tracking"]
      },
      {
        step: "Phase 3",
        title: "Social Media Advertising (Meta & LinkedIn)",
        desc: "Create high-converting video and graphic ad creatives, custom lookalike audiences, and retargeting pixel funnels.",
        skills: ["Meta Ads Manager", "LinkedIn Campaign Manager", "A/B Testing"]
      },
      {
        step: "Phase 4",
        title: "Analytics, CRO & Budget Scaling",
        desc: "Analyze ROAS (Return on Ad Spend), CAC (Customer Acquisition Cost), LTV (Lifetime Value), and perform landing page CRO.",
        skills: ["Google Analytics 4", "Heatmaps / Hotjar", "ROAS Optimization"]
      }
    ],
    essentialTools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Figma for Ads", "Hotjar"],
    salaryRange: "₹4.5 LPA – ₹22 LPA+ ($45k – $130k/year)",
    demandLevel: "High"
  }
];

export default function CareerGuidePage() {
  const [activeTrack, setActiveTrack] = useState<string>("seo-growth");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "Tech & Digital Marketing Career Roadmap Guide - SkyRank Solution",
    "description": "Comprehensive career guidance on how to start and scale a successful career in SEO, Web Development, Mobile App Dev, and Digital Marketing."
  };

  const selectedTrack = careerTracks.find((t) => t.id === activeTrack) || careerTracks[0];

  const careerPillars = [
    {
      title: "1. Build Real-World Projects",
      desc: "Theory is good, but building live websites, running real audits, or launching apps creates proof of work that employers love.",
      icon: Lightbulb
    },
    {
      title: "2. Master Modern AI Tools",
      desc: "AI won't replace professionals, but professionals who use AI tools effectively will outperform those who don't.",
      icon: Cpu
    },
    {
      title: "3. Publish Your Work Online",
      desc: "Share your learning journey on LinkedIn, GitHub, or X (Twitter). Public proof of expertise attracts high-paying job offers.",
      icon: TrendingUp
    },
    {
      title: "4. Focus on Measurable Results",
      desc: "Whether it's 100/100 load speed scores or +200% organic search traffic, always quantify your impact with numbers.",
      icon: Target
    }
  ];

  const careerFaqs = [
    {
      q: "Do I need a Computer Science degree to start a career in Tech or SEO?",
      a: "No! High-growth fields like SEO, Web Development, and Digital Marketing value practical skills, live project portfolios, and problem-solving ability far more than traditional degrees."
    },
    {
      q: "Which skill is best to learn in 2026?",
      a: "Both SEO/Digital Marketing and Full-Stack Web Development (Next.js/React) are in immense demand. If you enjoy creative analytical growth, choose SEO; if you enjoy building software interfaces, choose Web Development."
    },
    {
      q: "How long does it take to become job-ready?",
      a: "With dedicated 2-3 hours of daily practice, you can master foundational skills and build 3-4 portfolio projects within 3 to 6 months."
    },
    {
      q: "Can I work remotely in these fields?",
      a: "Yes! SEO, Web Engineering, and Performance Marketing are among the most remote-friendly professions globally with international freelance and remote job opportunities."
    }
  ];

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        {/* Background Decorative Glows */}
        <div className="glow-sphere bg-[#005FFF] w-[450px] h-[450px] -top-25 -left-20 opacity-15"></div>
        <div className="glow-sphere bg-[#FF5800] w-[350px] h-[350px] top-90 right-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-4 py-1.5 text-xs font-extrabold text-[#005FFF] shadow-sm">
              <Compass className="h-3.5 w-3.5 text-[#FF5800]" /> Career Growth & Roadmap Guide
            </span>
            <h1 className="text-4xl font-black text-[#051A41] sm:text-5xl tracking-tight leading-tight">
              How to Launch & Scale Your Career in <span className="text-[#005FFF]">Tech & Marketing</span>
            </h1>
            <p className="text-zinc-700 text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Step-by-step learning roadmaps, essential tool stacks, and industry growth guidance to help you master <strong className="text-[#005FFF]">SEO</strong>, <strong className="text-[#FF5800]">Web Engineering</strong>, <strong className="text-[#7C3AED]">Mobile Apps</strong> & <strong className="text-[#059669]">Digital Marketing</strong>.
            </p>
          </div>

          {/* Core Career Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {careerPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <GlowingCard
                  key={idx}
                  glowColor="rgba(0, 95, 255, 0.15)"
                  className="p-6 bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-2xl bg-[#005FFF]/10 border border-[#005FFF]/20 flex items-center justify-center text-[#005FFF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#051A41]">{pillar.title}</h3>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                </GlowingCard>
              );
            })}
          </div>

          {/* Interactive Career Track Navigation */}
          <div className="mb-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-[#051A41] mb-3">
              Choose Your Career Path Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-xl mx-auto mb-8">
              Click on a career track below to view its complete step-by-step roadmap, required tools, and salary expectations.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {careerTracks.map((track) => {
                const Icon = track.icon;
                const isActive = track.id === activeTrack;
                return (
                  <button
                    key={track.id}
                    onClick={() => setActiveTrack(track.id)}
                    className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-[#051A41] text-white shadow-lg shadow-[#051A41]/25 scale-105 border-2 border-[#005FFF]"
                        : "bg-white border border-zinc-200 text-zinc-700 hover:text-[#051A41] hover:bg-white hover:border-[#005FFF]/40"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-[#FF5800]" : "text-[#005FFF]"}`} />
                    <span>{track.title.split("&")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Career Roadmap Detail Showcase */}
          <motion.div
            key={selectedTrack.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-xl mb-24 space-y-10"
          >
            {/* Header Detail Box */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-100 pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${selectedTrack.gradient} text-white shadow-sm`}>
                    {selectedTrack.badge}
                  </span>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">
                    {selectedTrack.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#051A41]">
                  {selectedTrack.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#FF5800]">
                  {selectedTrack.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                  {selectedTrack.overview}
                </p>
              </div>

              {/* Salary & Demand Spec Box */}
              <div className="bg-[#EBEAFA] rounded-2xl p-5 border border-[#005FFF]/15 space-y-3 shrink-0 lg:w-72">
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block font-mono">Estimated Salary Range</span>
                  <span className="text-sm font-black text-[#051A41] block mt-0.5">{selectedTrack.salaryRange}</span>
                </div>
                <div className="pt-2 border-t border-zinc-200">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block font-mono">Global Market Demand</span>
                  <span className="text-xs font-extrabold text-[#005FFF] flex items-center gap-1 mt-0.5">
                    <TrendingUp className="h-3.5 w-3.5 text-[#FF5800]" />
                    {selectedTrack.demandLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Learning Timeline */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-black text-[#051A41] flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#005FFF]" />
                  Step-by-Step Learning Roadmap
                </h4>
                <span className="text-xs font-bold text-zinc-400 font-mono">4-Stage Pathway</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedTrack.roadmapSteps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="rounded-2xl bg-[#EBEAFA]/60 border border-[#005FFF]/10 p-6 space-y-3 hover:border-[#005FFF]/30 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black font-mono text-[#005FFF] bg-[#005FFF]/10 px-3 py-1 rounded-full border border-[#005FFF]/20">
                        {step.step}
                      </span>
                      <CheckCircle2 className="h-4 w-4 text-[#FF5800]" />
                    </div>
                    <h5 className="text-base font-bold text-[#051A41]">{step.title}</h5>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">{step.desc}</p>
                    
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {step.skills.map((sk, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[10px] font-bold bg-white text-[#051A41] px-2.5 py-1 rounded-lg border border-zinc-200"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Tools Stack */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <span className="text-xs font-extrabold text-[#051A41] uppercase tracking-wider block font-mono">
                Essential Industry Tools To Master:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTrack.essentialTools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-extrabold bg-[#051A41] text-white px-3.5 py-1.5 rounded-xl border border-[#005FFF]/30 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Career Guidance FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-20 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF] bg-[#005FFF]/10 px-3.5 py-1 rounded-full border border-[#005FFF]/20">
                Career Guidance FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#051A41]">
                Frequently Asked Career Questions
              </h2>
            </div>

            <div className="space-y-4">
              {careerFaqs.map((faq, fIdx) => (
                <div key={fIdx} className="rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-[#051A41] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF5800]" />
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed pl-4">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship & Advice CTA Banner */}
          <div className="rounded-3xl bg-[#051A41] border border-[#005FFF]/30 p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#005FFF]/20 border border-[#005FFF]/40 px-3.5 py-1 text-xs font-bold text-white">
                <GraduationCap className="h-3.5 w-3.5 text-[#FF5800]" /> SkyRank Career Mentorship
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Want Personal Tech or SEO Career Guidance?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                Connect with senior engineers and growth architects at SkyRank Solution for personalized advice on starting your digital career journey.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 justify-center">
                <button
                  onClick={() => window.dispatchEvent(new Event("openLeadModal"))}
                  className="rounded-2xl bg-[#FF5800] hover:bg-[#e04d00] px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Talk to Career Mentor</span>
                </button>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white transition flex items-center justify-center gap-2"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="h-4 w-4" />
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
