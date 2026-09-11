"use client";

import { useState } from "react";
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
import PartnerLogos from "@/components/PartnerLogos";
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
  XCircle,
  Activity,
  Award,
  Clock,
  ThumbsUp,
  ShieldCheck,
  UserCheck,
  Building2,
  Users,
  MessageSquare,
  ChevronRight,
  PhoneCall
} from "lucide-react";

export default function Home() {
  const [heroUrl, setHeroUrl] = useState("");

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (heroUrl) {
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Homepage Proposal Request",
            email: "proposal-request@skyrank.io",
            subject: `Free Growth Proposal Request for ${heroUrl}`,
            message: `Website URL submitted from Hero Section: ${heroUrl}`,
          }),
        });
      } catch (err) {
        console.error(err);
      }
      window.location.href = `/audit?url=${encodeURIComponent(heroUrl)}`;
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkyRank Solution",
    "url": "https://skyrank.io",
    "logo": "https://skyrank.io/logo.png",
    "description": "India's Best Digital Marketing & AI SEO Agency | 360* Digital Marketing Solutions",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-97373-56415",
      "contactType": "Customer Support"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://instagram.com"
    ]
  };


  const services = [
    { title: "AI Search Engine Optimization", href: "/services/seo-services", icon: Search, desc: "Dominate Google search results with certified SEO managers and AI-driven keyword rank strategies." },
    { title: "Website Development", href: "/services/website-development", icon: Globe, desc: "Ultra-fast custom websites & web applications built with Next.js, React, and 100/100 Core Web Vitals." },
    { title: "Mobile App Development", href: "/services/mobile-app-development", icon: Cpu, desc: "Native & cross-platform Android and iOS mobile applications built with Flutter and React Native." },
    { title: "Application Development (SaaS)", href: "/services/application-development", icon: Layers, desc: "Custom multi-tenant cloud software, SaaS platforms, and enterprise CRM solutions." },
    { title: "Server Support & DevOps", href: "/services/server-support", icon: BarChart, desc: "24/7 Linux & Windows server monitoring, cloud infrastructure support, security hardening, and backups." },
    { title: "Technical SEO & Speed", href: "/services/technical-seo", icon: Target, desc: "Fix crawl roadblocks, Javascript rendering bottlenecks, schema tags, and Core Web Vitals speed scores." },
  ];

  const stats = [
    { value: "2L+", label: "Keyword Rank Boosted" },
    { value: "700+", label: "Successful Projects" },
    { value: "5.5M", label: "Organic Traffic Generated" },
    { value: "1,281", label: "Happy Clients Worldwide" },
  ];

  const timeline = [
    { year: "2011", title: "21st-Century Agency", desc: "Recognizing digital marketing gaps, founders Deepak & Sumit partnered to launch SkyRank Solution." },
    { year: "2013", title: "Team Expansion", desc: "SkyRank expanded operations to 10+ core members, scaling traffic for over 55+ businesses." },
    { year: "2015", title: "Move to Gurugram", desc: "Shifted main headquarters to Welldone Tech Park, Millennium City Gurugram." },
    { year: "2017", title: "New Benchmarks", desc: "Crossed 350+ active enterprise accounts with a 50+ member specialist team." },
    { year: "2021", title: "Expansion to Dubai & Global", desc: "Established UAE branch in Prism Tower, Business Bay Dubai for international growth." },
  ];

  const faqs = [
    { question: "How does SkyRank Solution differ from traditional SEO agencies?", answer: "SkyRank Solution combines high-touch strategic consulting with an AI-powered SaaS platform. This gives you live daily rank updates, technical speed optimizations, and automated schema code injections that legacy agencies cannot provide." },
    { question: "How long does it take to see positive ranking results?", answer: "While traditional SEO requires 3 to 6 months, our technical speed patches, AI content briefs, and editorial outreach frequently yield SERP improvements within 4 to 8 weeks." },
    { question: "Does SkyRank Solution comply with Google's guidelines?", answer: "Yes, 100%. We strictly enforce white-hat SEO practices focusing on Core Web Vitals, JSON-LD schema markup, high-context link building, and user intent optimization." },
    { question: "Can I get a custom digital marketing proposal for my business?", answer: "Absolutely! Enter your URL in our audit tool or submit a contact request, and our senior growth architects will send a personalized growth roadmap within 24 hours." },
  ];

  return (
    <>
      <SchemaMarkup data={organizationSchema} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] text-[#051A41] pt-28 overflow-x-hidden relative">
        {/* HERO SECTION */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-4 py-1.5 text-xs font-extrabold text-[#005FFF]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>India's #1 Digital Marketing & AI SEO Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-[#051A41] sm:text-5xl lg:text-6xl leading-tight"
              >
                Results-Driven Digital Marketing Agency With <span className="text-[#005FFF]">18+ Years of Experience</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto lg:mx-0 max-w-xl text-base text-zinc-700 leading-relaxed font-medium"
              >
                We create data-backed digital marketing strategies to empower your next business evolution. Rank Higher. Grow Faster.
              </motion.p>

              {/* Free Proposal Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleHeroSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-lg border border-[#051A41]/10"
              >
                <div className="relative flex-1">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#005FFF]" />
                  <input
                    type="url"
                    required
                    value={heroUrl}
                    onChange={(e) => setHeroUrl(e.target.value)}
                    placeholder="Enter Website URL (e.g. https://yoursite.com)"
                    className="w-full pl-10 pr-4 py-3 text-sm text-[#051A41] bg-transparent outline-none placeholder:text-zinc-400 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-[#FF5800] hover:bg-[#e04d00] px-6 py-3 text-sm font-extrabold text-white shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Get Free Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.form>
            </div>

            {/* Right Hero Interactive Dashboard */}
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

        {/* OFFICIAL PARTNERS & BRANDS SHOWCASE */}
        <PartnerLogos />

        {/* ARE YOU FRUSTRATED SECTION */}
        <section className="py-20 bg-[#051A41] text-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Box - Frustrations */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                <h2 className="text-3xl font-extrabold text-white leading-tight mb-4">
                  Are You <span className="text-[#FF5800]">Frustrated</span> With Your SEO Growth?
                </h2>
                <ul className="space-y-4 text-sm font-medium text-zinc-300">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Google Keeps Changing Its Algorithms Unexpectedly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Poorly Designed Competitor Sites Outranking You</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Frustrated With Stagnant Organic Search Traffic & Sales</span>
                  </li>
                </ul>
              </div>

              {/* Right Box - Effective Marketing Solutions */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF] bg-[#005FFF]/20 px-3.5 py-1 rounded-full border border-[#005FFF]/30">
                  Effective Solutions
                </span>
                <h3 className="text-3xl font-extrabold text-white">We Bring You Result-Oriented Growth</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Being a renowned SEO solutions agency, we offer advanced positioning techniques to increase your brand visibility and the organic revenue you deserve.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#005FFF]">
                      <CheckCircle className="h-4 w-4" />
                      <h4 className="font-bold text-white text-sm">Dedicated Growth Manager</h4>
                    </div>
                    <p className="text-xs text-zinc-400">An experienced marketing manager leads your account to maximize organic conversions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#005FFF]">
                      <CheckCircle className="h-4 w-4" />
                      <h4 className="font-bold text-white text-sm">Top-Of-the-Line Support</h4>
                    </div>
                    <p className="text-xs text-zinc-400">Constant transparency and rapid communication set our team apart.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#005FFF]">
                      <CheckCircle className="h-4 w-4" />
                      <h4 className="font-bold text-white text-sm">Data-Backed Strategies</h4>
                    </div>
                    <p className="text-xs text-zinc-400">Detailed weekly reports with main performance indicators to track campaign ROI.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FF5800]">
                      <CheckCircle className="h-4 w-4" />
                      <h4 className="font-bold text-white text-sm">Transparent Execution</h4>
                    </div>
                    <p className="text-xs text-zinc-400">Clear roadmap plotting every milestone before charging forward.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID SECTION */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF]">Digital Marketing Services</span>
            <h3 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">SEO Management & Strategy Services</h3>
            <p className="text-zinc-600 text-sm">
              Our certified managers engineer top-tier search strategies to achieve the rank positioning you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <GlowingCard
                  key={srv.title}
                  glowColor="rgba(0, 95, 255, 0.12)"
                  className="p-6 flex flex-col justify-between bg-white border-[#051A41]/10 text-left hover:border-[#005FFF]"
                >
                  <div className="space-y-4">
                    <div className="rounded-xl bg-[#005FFF]/10 p-3 text-[#005FFF] w-fit">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-extrabold text-[#051A41]">{srv.title}</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">{srv.desc}</p>
                  </div>
                  <Link
                    href={srv.href}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#FF5800] mt-6 hover:text-[#e04d00]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </GlowingCard>
              );
            })}
          </div>
        </section>

        {/* NUMBERS STATS COUNTER SECTION */}
        <section className="py-16 bg-[#005FFF] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold">Let's Talk Numbers</h2>
              <p className="text-sm opacity-90 mt-1">Experience and Mindset in Building Search Success</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-4xl sm:text-5xl font-extrabold block text-amber-300">{st.value}</span>
                  <span className="text-xs font-bold uppercase tracking-wider block mt-2 opacity-90">{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE OF OUR JOURNEY SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF]">Our Journey</span>
            <h3 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">A Timeline of SkyRank Solution</h3>
            <p className="text-zinc-600 text-sm">From initial inception to international growth hubs across India & UAE.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#051A41]/10 shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-[#005FFF] block">0{idx + 1}</span>
                  <span className="text-3xl font-extrabold text-[#FF5800] block mt-1">{item.year}</span>
                  <h4 className="text-base font-extrabold text-[#051A41] mt-2">{item.title}</h4>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-20 bg-white border-y border-[#051A41]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF]">Pricing Plans</span>
              <h3 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">Flexible, Transparent Pricing</h3>
              <p className="text-zinc-600 text-sm">Choose the suite size that fits your business goals. Upgrade or cancel anytime.</p>
            </div>
            <PricingSection />
          </div>
        </section>

        {/* AUDIT SECTION */}
        <section id="audit" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5800] bg-[#FF5800]/10 px-3.5 py-1 rounded-full border border-[#FF5800]/20">
                Free SEO Scanner
              </span>
              <h3 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">Test Your Page Crawl Score Now</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Enter your website URL to trigger a live crawl scan. Review ranking bottlenecks, mobile performance issues, and metadata errors.
              </p>
              <div className="space-y-2 text-xs font-bold text-[#051A41] text-left max-w-xs mx-auto lg:mx-0">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#005FFF]" /> Crawls site in under 60 seconds</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#005FFF]" /> Identifies Core Web Vitals fixes</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#FF5800]" /> Generates JSON-LD schema snippets</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AuditForm />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-white border-t border-[#051A41]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF]">Client Reviews</span>
              <h3 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">Reviews From Our Customers</h3>
              <p className="text-zinc-600 text-sm">Hear directly from business leaders who scale organic pipelines with SkyRank Solution.</p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF]">FAQ</span>
            <h3 className="text-3xl font-extrabold text-[#051A41] sm:text-4xl">Frequently Asked Questions</h3>
          </div>
          <FAQAccordion items={faqs} />
        </section>

        {/* FINAL CTA BANNER */}
        <section className="py-20 bg-[#051A41] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-3xl font-extrabold sm:text-4xl">Improve Your Search Ranking Now!</h3>
            <p className="text-zinc-300 text-sm max-w-xl mx-auto">
              Reach out to our expert digital marketing consultants to discuss how SkyRank Solution can help you achieve your revenue goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="/audit"
                className="rounded-full bg-[#FF5800] hover:bg-[#e04d00] px-8 py-3.5 text-sm font-extrabold text-white shadow-md transition hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                Connect With Expert
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

