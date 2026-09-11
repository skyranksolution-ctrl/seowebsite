"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Code2,
  Smartphone,
  Server,
  Network,
  Cpu,
  Layers,
  Globe,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Database,
  Cloud,
  Lock,
  Workflow,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  category: "all" | "seo" | "dev" | "app" | "infra";
  categoryLabel: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  gradient: string;
  desc: string;
  techStack: string[];
  deliverables: string[];
  toolUsed: string;
}

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "seo" | "dev" | "app" | "infra">("all");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SkyRank Full-Stack Digital & Technical Solutions",
    "provider": {
      "@type": "Organization",
      "name": "SkyRank Solution"
    },
    "description": "Comprehensive Technology & SEO Solutions: SEO Services, Website Development, Mobile App Development, Application Development, Server Support, and Secure Tunnel Services."
  };

  const servicesData: ServiceItem[] = [
    {
      id: "seo-services",
      category: "seo",
      categoryLabel: "Search Optimization",
      title: "AI SEO & Organic Growth Services",
      tagline: "Dominate Google SERPs & Organic Search Pipelines",
      icon: Search,
      badge: "Core Service",
      badgeColor: "bg-[#005FFF]/10 text-[#005FFF] border-[#005FFF]/20",
      gradient: "from-[#005FFF] to-[#00C2FF]",
      desc: "Comprehensive search ranking acceleration combining keyword clustering, live technical crawler audits, contextual link building, and NLP content briefs.",
      techStack: ["Google Search Console", "Ahrefs API", "SkyRank LLM Engine", "Schema JSON-LD"],
      deliverables: [
        "In-depth Keyword Clustering & Intent Mapping",
        "On-Page Heading & Meta Semantics Optimization",
        "High-Authority Editorial Link Acquisition",
        "Daily SERP Rank Tracking & Competitor Intelligence"
      ],
      toolUsed: "SkyRank AI Crawler Core"
    },
    {
      id: "website-dev",
      category: "dev",
      categoryLabel: "Web Engineering",
      title: "Website Development",
      tagline: "High-Performance, Ultra-Fast Modern Web Applications",
      icon: Code2,
      badge: "Full-Stack",
      badgeColor: "bg-[#FF5800]/10 text-[#FF5800] border-[#FF5800]/20",
      gradient: "from-[#FF5800] to-[#FFAA00]",
      desc: "Custom corporate websites, e-commerce storefronts, and web portals engineered with lightning-fast SSR architectures, responsive design, and SEO-first codebases.",
      techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Node.js", "WordPress"],
      deliverables: [
        "Custom UI/UX & Responsive Multi-Device Layouts",
        "100/100 Google Core Web Vitals Speed Score",
        "E-Commerce & Custom Payment Gateway Injections",
        "Automated SEO Sitemaps & Dynamic Meta Injections"
      ],
      toolUsed: "Next.js & Vercel Enterprise"
    },
    {
      id: "mobile-app-dev",
      category: "app",
      categoryLabel: "Mobile Systems",
      title: "Mobile App Development",
      tagline: "Native & Cross-Platform Android & iOS Applications",
      icon: Smartphone,
      badge: "iOS & Android",
      badgeColor: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20",
      gradient: "from-[#7C3AED] to-[#A855F7]",
      desc: "Build smooth, intuitive native and hybrid mobile applications with high framerates, offline storage, push telemetry, and automated app store deployments.",
      techStack: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Firebase"],
      deliverables: [
        "Cross-Platform Android & iOS Codebases",
        "Biometric Authentication & Payment SDKs",
        "Real-Time Push Notifications & Background Sync",
        "Play Store & Apple App Store Publishing"
      ],
      toolUsed: "Flutter & React Native Framework"
    },
    {
      id: "application-dev",
      category: "dev",
      categoryLabel: "Custom Software",
      title: "Application Development (SaaS & Cloud)",
      tagline: "Enterprise Software, Web Portals & Custom APIs",
      icon: Layers,
      badge: "SaaS & Cloud",
      badgeColor: "bg-[#059669]/10 text-[#059669] border-[#059669]/20",
      gradient: "from-[#059669] to-[#10B981]",
      desc: "Custom scalable business software, multi-tenant SaaS dashboards, robust microservices, and CRM workflows built for high transaction throughput.",
      techStack: ["Node.js / Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "REST APIs"],
      deliverables: [
        "Custom SaaS Web Application Architecture",
        "Role-Based Access Control (RBAC) & Authentication",
        "Scalable Database Schema & Cloud Storage",
        "Third-Party Webhook & CRM API Integrations"
      ],
      toolUsed: "Custom Cloud SaaS Architecture"
    },
    {
      id: "server-support",
      category: "infra",
      categoryLabel: "Cloud & DevOps",
      title: "Server Support & DevOps Management",
      tagline: "24/7 Linux & Windows Infrastructure Support",
      icon: Server,
      badge: "24/7 Support",
      badgeColor: "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20",
      gradient: "from-[#DC2626] to-[#F87171]",
      desc: "Round-the-clock server provisioning, load balancing, performance tuning, automated daily backups, and instant security patches for critical servers.",
      techStack: ["Linux (Ubuntu/CentOS)", "Windows Server", "AWS / GCP", "Nginx / Apache", "Docker"],
      deliverables: [
        "24/7 Server Uptime & Performance Monitoring",
        "SSL/TLS Encryption & Firewall Hardening",
        "Database Optimization & Automated Backups",
        "Disaster Recovery & Zero-Downtime Server Migration"
      ],
      toolUsed: "DevOps & Cloud Monitoring Hub"
    },
    {
      id: "tunnel-service",
      category: "infra",
      categoryLabel: "Network & Security",
      title: "Tunnel & Reverse Proxy Services",
      tagline: "Secure Local-to-Public Networking & Port Forwarding",
      icon: Network,
      badge: "Zero-Trust",
      badgeColor: "bg-[#0284C7]/10 text-[#0284C7] border-[#0284C7]/20",
      gradient: "from-[#0284C7] to-[#38BDF8]",
      desc: "Expose local development environments, self-hosted applications, and private APIs securely to public domains with end-to-end encryption and custom subdomains.",
      techStack: ["Cloudflare Tunnels", "Ngrok Enterprise", "WireGuard", "Reverse Proxy", "SSH Tunnels"],
      deliverables: [
        "Encrypted Public Endpoints for Local Servers",
        "Custom Branded Subdomains & HTTPS Routing",
        "Zero-Trust Access Policies & IP Whitelisting",
        "Ultra-Low Latency Edge WebSockets & Webhooks"
      ],
      toolUsed: "Secure Tunnel Mesh Core"
    },
    {
      id: "technical-seo",
      category: "seo",
      categoryLabel: "Search Optimization",
      title: "Technical SEO & Speed Optimization",
      tagline: "Fix Crawl Errors, Core Web Vitals & Index Bloat",
      icon: Cpu,
      badge: "Technical",
      badgeColor: "bg-[#005FFF]/10 text-[#005FFF] border-[#005FFF]/20",
      gradient: "from-[#005FFF] to-[#3B82F6]",
      desc: "Remove indexation roadblocks. We resolve canonical loops, JS render bottlenecks, broken redirect chains, and minify assets for sub-second page loads.",
      techStack: ["Lighthouse", "Google Bot Simulator", "Screaming Frog", "WebP Converter"],
      deliverables: [
        "Largest Contentful Paint (LCP) Acceleration",
        "XML Sitemap & Robots.txt Protocol Rebuild",
        "Canonical & Hreflang Configuration Sweeps",
        "Structured Schema.org JSON-LD Generation"
      ],
      toolUsed: "SkyRank Auditor Core"
    },
    {
      id: "ecommerce-solutions",
      category: "dev",
      categoryLabel: "Web Engineering",
      title: "E-Commerce Growth & Store Setup",
      tagline: "Scale Online Sales, Product Catalogs & Checkout Funnels",
      icon: Globe,
      badge: "E-Commerce",
      badgeColor: "bg-[#FF5800]/10 text-[#FF5800] border-[#FF5800]/20",
      gradient: "from-[#FF5800] to-[#EA580C]",
      desc: "Architect seamless shopping experiences with frictionless 1-click checkouts, multi-currency pricing, inventory automation, and merchant product schema.",
      techStack: ["Shopify Plus", "WooCommerce", "Next.js Commerce", "Stripe / Razorpay"],
      deliverables: [
        "Faceted Navigation & Product Filter Speed Optimization",
        "Merchant Center Product Schema Feeds",
        "Automated Cart Recovery & Conversion Funnels",
        "ERP & Warehouse Inventory API Syncing"
      ],
      toolUsed: "Commerce Crawler Engine"
    }
  ];

  const filteredServices = activeFilter === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeFilter);

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        {/* Ambient Decorative Glows */}
        <div className="glow-sphere bg-[#005FFF] w-[450px] h-[450px] -top-25 -left-20 opacity-20"></div>
        <div className="glow-sphere bg-[#FF5800] w-[350px] h-[350px] bottom-30 right-20 opacity-20"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-4 py-1.5 text-xs font-extrabold text-[#005FFF] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#FF5800]" /> Full-Spectrum Technical Suite
            </span>
            <h1 className="text-4xl font-black text-[#051A41] sm:text-5xl tracking-tight">
              Engineering & Digital Services
            </h1>
            <p className="text-zinc-700 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              From high-ranking <strong className="text-[#005FFF]">AI SEO campaigns</strong> and custom <strong className="text-[#FF5800]">Website & Mobile App Development</strong> to robust <strong className="text-[#051A41]">24/7 Server Support</strong> & <strong className="text-[#0284C7]">Secure Tunnel Services</strong>.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: "all", label: "All Services" },
              { id: "dev", label: "Website Development" },
              { id: "app", label: "Mobile & SaaS Apps" },
              { id: "seo", label: "SEO & Growth" },
              { id: "infra", label: "Server & Tunnel Support" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm ${
                  activeFilter === tab.id
                    ? "bg-[#005FFF] text-white shadow-md shadow-[#005FFF]/30 scale-105"
                    : "bg-white border border-[#005FFF]/15 text-zinc-700 hover:text-[#051A41] hover:bg-white hover:border-[#005FFF]/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services Dynamic Grid with Rich Hover Animations */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((srv) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={srv.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    className="group relative rounded-3xl bg-white border border-zinc-200/90 hover:border-[#005FFF]/40 p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Hover Top Glow Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#005FFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top Bar: Icon + Category Badge */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${srv.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${srv.badgeColor}`}>
                          {srv.badge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl font-black text-[#051A41] group-hover:text-[#005FFF] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-bold text-[#FF5800] mt-1 mb-3">
                        {srv.tagline}
                      </p>
                      <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-5">
                        {srv.desc}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="mb-5">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2 font-mono">
                          Tech Stack / Architecture:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {srv.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-bold bg-[#EBEAFA] text-[#051A41] px-2.5 py-1 rounded-lg border border-[#005FFF]/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables List */}
                      <div className="pt-4 border-t border-zinc-100 space-y-2">
                        <span className="text-[11px] font-bold text-[#051A41] uppercase tracking-wider block">
                          Key Deliverables:
                        </span>
                        <div className="space-y-1.5">
                          {srv.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-700 font-medium">
                              <CheckCircle2 className="h-4 w-4 text-[#005FFF] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer CTA with dedicated routing */}
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <Link
                        href={`/services/${srv.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#005FFF] hover:text-[#FF5800] transition group/btn"
                      >
                        <span>View Details & Pricing</span>
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover/btn:translate-x-1" />
                      </Link>
                      <Link
                        href={`/services/${srv.id}`}
                        className="h-8 w-8 rounded-full bg-[#EBEAFA] hover:bg-[#005FFF] text-[#005FFF] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                        aria-label={`View details for ${srv.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Enterprise Consultation Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl bg-[#051A41] border border-[#005FFF]/30 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl text-white"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-[#005FFF]/15 filter blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#005FFF]/20 border border-[#005FFF]/40 px-3.5 py-1 text-xs font-bold text-white">
                <Workflow className="h-3.5 w-3.5 text-[#FF5800]" /> End-to-End Enterprise Delivery
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Need a Custom App, Server Setup or SEO Plan?
              </h3>
              <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                Our senior software engineers and SEO architects are ready to audit your requirements and formulate a tailored technical roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-3">
                <button
                  onClick={() => window.dispatchEvent(new Event("openLeadModal"))}
                  className="rounded-2xl bg-[#FF5800] hover:bg-[#e04d00] px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Talk to Tech & SEO Expert</span>
                </button>
                <Link
                  href="/audit"
                  className="rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white transition flex items-center justify-center gap-2"
                >
                  <span>Free Instant SEO Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
