"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AuditForm from "@/components/AuditForm";
import FAQAccordion from "@/components/FAQAccordion";
import PricingSection from "@/components/PricingSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import {
  Search,
  Cpu,
  Target,
  BarChart,
  MapPin,
  ShoppingBag,
  Sparkles,
  Layers,
  Link as LinkIcon,
  Zap,
  Globe,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  MousePointer,
  CheckCircle,
  Bookmark,
  Activity,
  Award,
  Clock,
  ThumbsUp,
  ShieldCheck,
  UserCheck
} from "lucide-react";

export default function Home() {
  // Schema data for SEO Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkyRank Solution",
    "url": "https://skyrank.io",
    "logo": "https://skyrank.io/logo.png",
    "description": "AI-Powered SEO Agency + SEO SaaS Platform. Rank Higher. Grow Faster.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-RANK",
      "contactType": "Customer Support"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://youtube.com"
    ]
  };

  const services = [
    { title: "Keyword Research", icon: Search, desc: "Unlock thousands of high-traffic, low-difficulty search terms analyzed by our semantic AI engine." },
    { title: "Technical SEO", icon: Cpu, desc: "Crawl and diagnostic engines that find indexation, rendering, and structured data crawl blocks instantly." },
    { title: "On Page SEO", icon: Target, desc: "Optimize title tags, headings, content structure, and internal link assets matching target search queries." },
    { title: "Off Page SEO", icon: Globe, desc: "Increase search trust signals through brand authority building and strategic mention placements." },
    { title: "Local SEO", icon: MapPin, desc: "Dominate Google Maps and local search packs for all business branches, driving foot traffic." },
    { title: "Ecommerce SEO", icon: ShoppingBag, desc: "Optimize category filters, product listings, and merchant feeds to drive buyer intent traffic." },
    { title: "AI SEO Optimization", icon: Sparkles, desc: "Automate code schema generation and semantic context enhancement using state-of-the-art AI models." },
    { title: "Content Marketing", icon: FileText, desc: "Draft high-converting SEO copy engineered for humans and designed to rank on Google search feeds." },
    { title: "Link Building", icon: LinkIcon, desc: "Safely secure premium authority backlinks through white-hat editorial outreach and context relations." },
    { title: "Website Speed", icon: Zap, desc: "Optimize Core Web Vitals, images, caching systems, and page rendering, achieving a 100 Lighthouse score." },
    { title: "Google Business", icon: Award, desc: "Automate citation syncing, reviews routing, and Google Business Profile optimizations." },
    { title: "SEO Consultation", icon: HelpCircle, desc: "Receive direct strategic roadmaps from real enterprise growth architects and specialists." },
  ];

  const whyChooseUs = [
    { title: "AI Powered Engine", desc: "Automate keyword clustering, audits, and content audits with advanced LLMs.", icon: Cpu },
    { title: "500+ Rank Factors", desc: "Our platform tests pages against hundreds of search variables every single day.", icon: Layers },
    { title: "Transparent Reports", desc: "Access clean, readable dashboards showing exact ranking growths and metrics.", icon: BarChart },
    { title: "Daily Live Tracking", desc: "No more waiting weeks for report updates. View SERP changes in real time.", icon: Activity },
    { title: "Real SEO Experts", desc: "Partner with industry engineers who have scaled enterprise platforms.", icon: UserCheck },
    { title: "100% White Hat", desc: "Safe, long-term search growth that strictly complies with Google guidelines.", icon: ShieldCheck },
    { title: "24/7 Client Support", desc: "Enjoy round-the-clock chat assistance and technical support whenever needed.", icon: Clock },
    { title: "Affordable Pricing", desc: "Premium capabilities and expert consulting plans that scale with business size.", icon: ThumbsUp },
  ];

  const features = [
    { title: "Live Rank Tracking", desc: "Monitor daily keyword position fluctuations on global or local zip levels." },
    { title: "Competitor Analysis", desc: "Discover competing domains' backlink portfolios and traffic-generating pages." },
    { title: "Website Audit Scanner", desc: "Instantly analyze technical issues, index blocks, and accessibility scores." },
    { title: "Keyword Explorer", desc: "Unlock semantic keyword groups, search intents, and volume statistics." },
    { title: "Backlink Monitoring", desc: "Analyze raw referring domains, toxic links, and anchor distribution trends." },
    { title: "AI Content Drafts", desc: "Draft fully-optimized outlines and content briefs targeting search queries." },
    { title: "Schema.org Generator", desc: "Generate JSON-LD FAQ, LocalBusiness, and Product structured schemas." },
    { title: "Core Web Vitals Tracker", desc: "Track Largest Contentful Paint, interaction delays, and layout shifts." },
    { title: "Google Console Sync", desc: "Pull search queries and impressions straight into your central dashboard." },
    { title: "Google Analytics Integration", desc: "Cross-reference rank increases with actual revenue and user conversions." },
  ];

  const faqs = [
    { question: "How does SkyRank differ from traditional SEO agencies?", answer: "SkyRank combines high-touch consulting from expert SEO architects with our automated SaaS platform. This gives you deep technical insights, daily keyword tracking, and automated AI code schema injections that typical manual agencies cannot match." },
    { question: "How long does it take to see organic rank increases?", answer: "While traditional SEO can take 3 to 6 months, our AI optimizations and technical speed patches often yield positive indexing updates and SERP shifts within 4 to 8 weeks." },
    { question: "Does SkyRank comply with Google's guidelines?", answer: "Absolutely. We strictly enforce 100% white-hat SEO practices, focusing on page load times, proper schema structured data, semantic context mapping, and organic authority link outreach." },
    { question: "Can I cancel or change my pricing plan anytime?", answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any point from your billing panel. Upgrading immediately unlocks higher keyword tracking capacities." },
    { question: "Is the Free SEO Audit report personalized?", answer: "Yes! Our crawler scans your target domain metadata, speed signals, and indexing flags in real time to generate unique recommendations." },
  ];

  return (
    <>
      <SchemaMarkup data={organizationSchema} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-24 overflow-x-hidden relative">
        {/* Ambient Glow Orbs */}
        <div className="glow-sphere bg-primary w-[500px] h-[500px] -top-40 -left-60 opacity-30"></div>
        <div className="glow-sphere bg-secondary w-[400px] h-[400px] top-60 right-20 opacity-20"></div>

        {/* Grid Overlay background */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        {/* HERO SECTION */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-secondary"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen SEO Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Rank Higher.
                <span className="block text-gradient-blue mt-1">Grow Faster.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto lg:mx-0 max-w-xl text-lg text-zinc-300 leading-relaxed"
              >
                AI-Powered SEO solutions that help businesses dominate Google search results, capture warm buyer leads, and scale organic revenues.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/audit"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>Start Free Audit</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2"
                >
                  <span>Book Strategy Call</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 w-full max-w-2xl mx-auto"
            >
              <InteractiveDashboard />
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="relative z-10 py-24 border-t border-white/5 bg-[#030612]/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Our Expertise</h2>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Comprehensive SEO Services</h3>
              <p className="text-zinc-400 text-sm">
                From tech structures to automated off-page outreach, our platform manages all aspects of organic performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <GlowingCard
                    key={srv.title}
                    glowColor="rgba(0, 194, 255, 0.08)"
                    className="p-6 flex flex-col gap-4 border-white/5 bg-[#0a0f26]/30 text-left transition hover:border-primary/20"
                  >
                    <div className="rounded-lg bg-primary/10 p-2.5 text-primary w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">{srv.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{srv.desc}</p>
                  </GlowingCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SKYRANK */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side Static Content */}
              <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">The Difference</h2>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">Why Scale With SkyRank?</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  We built our framework to bridge the gap between slow manual agencies and raw unguided software. Get elite AI tools combined with top SEO consultant support.
                </p>
                <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start text-xs font-semibold text-zinc-400">
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-secondary" /> 500k+ Keywords Ranked</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-secondary" /> 98% Client Retention</span>
                </div>
              </div>

              {/* Right Side Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-5">
                      <div className="rounded-lg bg-secondary/10 p-2 text-secondary shrink-0 h-fit">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className="relative z-10 py-24 border-t border-white/5 bg-[#030612]/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Core Platform</h2>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Built-In Enterprise Features</h3>
              <p className="text-zinc-400 text-sm">
                Get full access to all rank optimization utilities directly inside a unified dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feat, idx) => (
                <GlowingCard
                  key={idx}
                  glowColor="rgba(0, 102, 255, 0.08)"
                  className="p-5 flex flex-col justify-between border-white/5 bg-[#070c20]/50"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">{feat.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 block mt-4 select-none">FT_0{idx + 1}</span>
                </GlowingCard>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="relative z-10 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary font-bold">Pricing Plans</h2>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Flexible, Transparent Pricing</h3>
              <p className="text-zinc-400 text-sm">
                Choose the suite size that fits your business. Cancel or change plans at any time.
              </p>
            </div>

            <PricingSection />
          </div>
        </section>

        {/* INSTANT AUDIT SECTION */}
        <section id="audit" className="relative z-10 py-24 border-t border-white/5 bg-[#030612]/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-secondary font-bold">SEO Audit Scanner</h2>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">Test Your Page Crawl Score Now</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Enter your website URL to trigger a live crawl scan. Review ranking bottlenecks, mobile performance issues, and meta errors immediately.
                </p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto lg:mx-0 text-xs text-zinc-400 text-left">
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Crawls in under 60 seconds</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Lists critical Core Web Vitals fixes</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Suggests schema structured codes</div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary font-bold">Testimonials</h2>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">What Our Clients Say</h3>
              <p className="text-zinc-400 text-sm">
                Hear from the marketing directors, founders, and developers who scale their organic pipelines with us.
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative z-10 py-24 border-t border-white/5 bg-[#030612]/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-primary font-bold">FAQ</h2>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h3>
              <p className="text-zinc-400 text-sm">
                Find quick answers to common questions about our platform, timeline, and SEO compliance guidelines.
              </p>
            </div>

            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* FINAL CTA PANEL */}
        <section className="relative z-10 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-tr from-primary to-secondary p-[1px] shadow-2xl relative overflow-hidden">
              <div className="rounded-[23px] bg-[#050816] px-8 py-16 text-center space-y-6 relative overflow-hidden">
                {/* Visual glows */}
                <div className="absolute -left-20 -top-20 w-44 h-44 rounded-full bg-primary/20 filter blur-[40px]"></div>
                <div className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full bg-secondary/20 filter blur-[40px]"></div>
                
                <h3 className="text-3xl font-bold text-white sm:text-4xl">Ready to Dominate Google Search Results?</h3>
                <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed">
                  Start your free audit crawler or book a custom growth strategy session to double your organic leads this quarter.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Link
                    href="/audit"
                    className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 group"
                  >
                    <span>Start Free Audit</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
