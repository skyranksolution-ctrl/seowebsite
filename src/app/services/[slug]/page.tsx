"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import {
  Search,
  Code2,
  Smartphone,
  Server,
  Network,
  Cpu,
  Layers,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  MessageSquare,
  Clock,
  Layers as LayersIcon,
  Workflow
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroDesc: string;
  icon: string;
  gradient: string;
  badge: string;
  overview: string;
  keyFeatures: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  techStack: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesMap: Record<string, ServiceDetail> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    category: "Web Engineering",
    tagline: "High-Performance, Custom & High-Converting Web Platforms",
    heroDesc: "We design and build bespoke, high-speed corporate websites, web applications, and headless e-commerce stores engineered for maximum conversions and instant loading speeds.",
    icon: "Code2",
    gradient: "from-[#FF5800] to-[#FFAA00]",
    badge: "Full-Stack Web",
    overview: "Our web engineering team combines next-generation frontend frameworks with secure backend architectures. Every website is built with 100% responsive design, zero-latency server rendering (SSR), and automated SEO metadata structures.",
    keyFeatures: [
      { title: "Next.js & React Architecture", desc: "Ultra-fast server-side rendered web pages with instantaneous navigation and sub-second load times." },
      { title: "Custom UI/UX & Responsive Layouts", desc: "Tailored visual design crafted in Figma and coded with pixel-perfect responsive CSS for all screen sizes." },
      { title: "E-Commerce & Payment Gateways", desc: "Seamless checkout experiences with Stripe, Razorpay, PayPal, and automated transactional workflows." },
      { title: "Built-in SEO & Core Web Vitals", desc: "Pre-rendered JSON-LD schema, dynamic open graph cards, and 100/100 Google Lighthouse scores." }
    ],
    processSteps: [
      { step: "01", title: "Discovery & Architecture", desc: "Analyze business goals, wireframe layout journeys, and define technology stack requirements." },
      { step: "02", title: "UI/UX Prototype Design", desc: "Craft modern Figma mockups with client review cycles and interactive components." },
      { step: "03", title: "Full-Stack Development", desc: "Code frontend and backend systems with clean TypeScript, Tailwind CSS, and API integrations." },
      { step: "04", title: "Testing & Deployment", desc: "Run cross-browser tests, speed benchmarks, and launch on high-speed CDN servers." }
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "WordPress", "PostgreSQL"],
    deliverables: [
      "Full Source Code & GitHub Repository Access",
      "Fully Responsive Across Desktop, Tablet & Mobile",
      "100/100 Core Web Vitals Speed Optimization",
      "Dynamic Admin Panel / Headless CMS Integration",
      "SSL Certificate & Cloudflare CDN Setup"
    ],
    faqs: [
      { question: "How long does custom website development take?", answer: "A standard corporate or landing website takes between 1 to 3 weeks, while complex full-stack web applications usually require 3 to 6 weeks." },
      { question: "Will my website be search engine friendly?", answer: "Yes! Every single website we develop comes pre-configured with SEO best practices, semantic HTML5, XML sitemaps, and Schema markup." },
      { question: "Can I manage and update content myself?", answer: "Absolutely. We integrate intuitive content management systems (CMS) or admin dashboards so you can easily edit text and images." }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile Systems",
    tagline: "Native & Cross-Platform Android & iOS Applications",
    heroDesc: "From conceptual design to App Store and Google Play deployments, we engineer high-performance mobile applications using Flutter and React Native.",
    icon: "Smartphone",
    gradient: "from-[#7C3AED] to-[#A855F7]",
    badge: "iOS & Android",
    overview: "Our mobile engineers specialize in crafting fluid 60fps applications that deliver delightful user experiences, reliable offline sync, push notifications, and enterprise-grade data security.",
    keyFeatures: [
      { title: "Cross-Platform Single Codebase", desc: "Deploy simultaneously to iOS and Android with Flutter and React Native to save 40% in development time." },
      { title: "Native Device Integrations", desc: "Seamless camera, GPS geolocation, biometric fingerprint/FaceID, and Bluetooth peripheral access." },
      { title: "Real-Time Push Notifications", desc: "Engage users with automated push campaigns via Firebase Cloud Messaging (FCM) and OneSignal." },
      { title: "App Store & Play Store Approval", desc: "Complete assistance with app store compliance, privacy policies, asset rendering, and publish approvals." }
    ],
    processSteps: [
      { step: "01", title: "App Architecture & UX Flow", desc: "User journey mapping, interactive screen wireframing, and API payload definitions." },
      { step: "02", title: "App UI Engineering", desc: "Developing smooth mobile interfaces with customizable themes and fluid micro-animations." },
      { step: "03", title: "Backend & SDK Sync", desc: "Connecting auth tokens, cloud databases, payment gateways, and push services." },
      { step: "04", title: "Store Submission & QA", desc: "Beta distribution on TestFlight and Google Play Internal Testing before final release." }
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js REST APIs"],
    deliverables: [
      "iOS (.ipa) & Android (.apk/.aab) Production Builds",
      "Full Flutter/React Native Source Codebase",
      "App Store & Google Play Store Submission",
      "Backend REST API & Admin Management Portal",
      "Push Notification & Analytics Dashboard"
    ],
    faqs: [
      { question: "Do you develop for both Android and iOS?", answer: "Yes! We build cross-platform apps that look and feel completely native on both Apple iOS iPhones and Android smartphones." },
      { question: "Will you help upload the app to Play Store and App Store?", answer: "Yes, our team manages the entire submission process, including metadata, screenshots, certificates, and app store compliance review." }
    ]
  },
  "application-development": {
    slug: "application-development",
    title: "Application Development (SaaS & Cloud)",
    category: "Custom Software",
    tagline: "Enterprise Software, Multi-Tenant SaaS & Custom Cloud Backends",
    heroDesc: "We architect scalable business software, cloud SaaS platforms, and high-load web applications designed for robust reliability and high concurrency.",
    icon: "Layers",
    gradient: "from-[#059669] to-[#10B981]",
    badge: "SaaS & Cloud",
    overview: "Whether you need a custom CRM, an internal ERP portal, or a commercial SaaS subscription platform, our engineering architects build modular, cloud-native applications with role-based access control.",
    keyFeatures: [
      { title: "Multi-Tenant SaaS Architecture", desc: "Isolated tenant workspaces, subscription billing integration with Stripe, and automated provisioning." },
      { title: "Role-Based Access Control (RBAC)", desc: "Granular permissions, OAuth2 authentication, JWT tokens, and enterprise SSO integrations." },
      { title: "Robust REST & GraphQL APIs", desc: "High-throughput API endpoints with rate limiting, documentation (Swagger), and webhook triggers." },
      { title: "Real-Time Telemetry & Dashboards", desc: "Interactive charts, live data tables, exportable PDF/Excel reports, and socket event feeds." }
    ],
    processSteps: [
      { step: "01", title: "Product Blueprint", desc: "Scope feature sets, database entity relationship diagrams (ERD), and security protocols." },
      { step: "02", title: "API & Database Setup", desc: "Deploy normalized SQL/NoSQL databases, index performance keys, and build API endpoints." },
      { step: "03", title: "Frontend Dashboard Dev", desc: "Craft data-dense, responsive SaaS dashboards with role permission gates." },
      { step: "04", title: "Load Testing & CI/CD", desc: "Simulate concurrent users, configure automated Docker build pipelines, and deploy." }
    ],
    techStack: ["Node.js", "Python FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    deliverables: [
      "Custom SaaS Application Source Code",
      "Comprehensive Swagger / Postman API Documentation",
      "Dockerized Container Deployment Files",
      "Admin Control Panel with Tenant Metrics",
      "Automated Database Backup Configurations"
    ],
    faqs: [
      { question: "Can you build multi-tier subscription billing?", answer: "Yes, we integrate recurring subscription checkouts with Stripe, Razorpay, or Paddle with automated invoice generation." },
      { question: "Is the software scalable as our user base grows?", answer: "Our backend architectures use microservices, connection pooling, and Redis caching to handle millions of requests smoothly." }
    ]
  },
  "server-support": {
    slug: "server-support",
    title: "Server Support & DevOps Management",
    category: "Cloud & DevOps",
    tagline: "24/7 Linux & Windows Infrastructure Support & Uptime",
    heroDesc: "Keep your critical servers running at peak performance with proactive 24/7 monitoring, security hardening, automated backups, and instant issue remediation.",
    icon: "Server",
    gradient: "from-[#DC2626] to-[#F87171]",
    badge: "24/7 Support",
    overview: "We manage and maintain cloud instances on AWS, DigitalOcean, Hetzner, Google Cloud, and on-premise dedicated servers, ensuring 99.9% uptime, rapid disaster recovery, and hardened security perimeter defenses.",
    keyFeatures: [
      { title: "24/7 Proactive Monitoring", desc: "Instant alert notifications for CPU spikes, RAM depletion, disk limits, and suspicious network traffic." },
      { title: "Security Hardening & Firewalls", desc: "SSH key lockdown, fail2ban configuration, UFW/iptables rules, and regular vulnerability patches." },
      { title: "Web Server & Database Tuning", desc: "NGINX/Apache reverse proxy tuning, MySQL/PostgreSQL query caching, and PHP-FPM optimization." },
      { title: "Automated Off-site Backups", desc: "Daily incremental database and file backups synced to encrypted S3 cloud storage buckets." }
    ],
    processSteps: [
      { step: "01", title: "Infrastructure Audit", desc: "Examine current server configs, security loopholes, resource usage, and error logs." },
      { step: "02", title: "Hardening & Patching", desc: "Update kernel packages, configure firewalls, install SSL certificates, and tune web servers." },
      { step: "03", title: "Monitoring & Alert Setup", desc: "Install lightweight agents that trigger alerts to our 24/7 on-call engineers." },
      { step: "04", title: "Ongoing Maintenance", desc: "Perform periodic log rotations, database vacuuming, and security sweeps." }
    ],
    techStack: ["Linux (Ubuntu/CentOS/Debian)", "Windows Server", "AWS / GCP", "Nginx", "Docker", "Cloudflare"],
    deliverables: [
      "24/7 Continuous Server Uptime Monitoring",
      "Automated Off-Site Database Backup Schedule",
      "Full Security Audit & Firewall Hardening Report",
      "Zero-Downtime Server Migration & Setup",
      "Dedicated Direct Support Emergency Channel"
    ],
    faqs: [
      { question: "What happens if our server goes down at midnight?", answer: "Our automated monitoring triggers instant alerts, and our 24/7 engineer investigates and restores services immediately." },
      { question: "Can you help migrate our site to a new server without downtime?", answer: "Yes! We specialize in zero-downtime database and file migrations between cloud providers." }
    ]
  },
  "tunnel-services": {
    slug: "tunnel-services",
    title: "Tunnel & Reverse Proxy Services",
    category: "Network & Security",
    tagline: "Secure Local-to-Public Networking & Zero-Trust Port Forwarding",
    heroDesc: "Expose local development machines, self-hosted servers, and private enterprise applications securely to the internet without opening dangerous router ports.",
    icon: "Network",
    gradient: "from-[#0284C7] to-[#38BDF8]",
    badge: "Zero-Trust Mesh",
    overview: "Our secure tunneling solutions establish encrypted outbound connections from your private network to globally distributed edge nodes, allowing instant public HTTPS access with zero firewall port opening.",
    keyFeatures: [
      { title: "Encrypted Edge Tunnels", desc: "End-to-end encrypted tunnels routed through Cloudflare edge networks or custom private VPS proxies." },
      { title: "Custom Branded Subdomains", desc: "Map local ports (e.g. localhost:3000, 8080) directly to your custom domain like app.yourdomain.com." },
      { title: "Zero-Trust Access Control", desc: "Restrict tunnel endpoints behind email OTP, Google Workspace SSO, or specific IP whitelists." },
      { title: "WebSocket & Webhook Support", desc: "Full compatibility with real-time bi-directional WebSockets, SSE streams, and third-party webhooks." }
    ],
    processSteps: [
      { step: "01", title: "Network Architecture", desc: "Determine local service ports, latency requirements, and domain routing rules." },
      { step: "02", title: "Edge Proxy Provisioning", desc: "Set up high-speed reverse proxy nodes with automatic TLS/SSL certificate issuance." },
      { step: "03", title: "Agent Deployment", desc: "Install lightweight tunnel daemon services on local server/machines with auto-start." },
      { step: "04", title: "Security & Policy Testing", desc: "Verify encryption integrity, DDoS mitigation, and access authentication filters." }
    ],
    techStack: ["Cloudflare Tunnels", "Ngrok Enterprise", "WireGuard", "Nginx Reverse Proxy", "SSH", "Docker"],
    deliverables: [
      "Dedicated Secure HTTPS Tunnel Endpoints",
      "Custom Domain & SSL Automated Routing",
      "Zero-Trust Identity Access Verification",
      "Low-Latency WebSocket Streaming Capability",
      "Auto-Restart Daemon Configuration Scripts"
    ],
    faqs: [
      { question: "Do I need a static public IP for tunnel services?", answer: "No! Tunnels work perfectly on standard home broadband, dynamic IP connections, and CGNAT networks." },
      { question: "Is data sent through the tunnel encrypted?", answer: "Yes, all traffic is encrypted with TLS 1.3 encryption end-to-end between your client and our edge proxy." }
    ]
  },
  "seo-services": {
    slug: "seo-services",
    title: "AI SEO & Organic Growth Services",
    category: "Search Optimization",
    tagline: "Dominate Google SERPs & Organic Search Pipelines",
    heroDesc: "Combine strategic search consulting with proprietary AI crawler diagnostics to systematically capture top organic rankings and convert search traffic into customers.",
    icon: "Search",
    gradient: "from-[#005FFF] to-[#00C2FF]",
    badge: "Core Service",
    overview: "Our full-spectrum SEO services tackle technical site architecture, keyword intent clusters, semantic content briefs, and high-authority editorial outreach to sustainably scale your domain rating.",
    keyFeatures: [
      { title: "AI Keyword Intent Mapping", desc: "Cluster commercial and transactional search queries with high conversion intent and manageable competition." },
      { title: "Technical Crawler Diagnostics", desc: "Audit and fix canonical errors, rendering blocks, redirect loops, and structured schema tags." },
      { title: "Editorial Backlink Outreach", desc: "Build domain authority safely through genuine PR mentions and high-authority contextual links." },
      { title: "Daily Rank Telemetry", desc: "Track daily keyword position shifts across 120+ countries with automated SERP crawler monitoring." }
    ],
    processSteps: [
      { step: "01", title: "Comprehensive Audit", desc: "Deep crawl of your domain to uncover technical errors, speed blocks, and content gaps." },
      { step: "02", title: "Keyword Clustering", desc: "Categorize high-value search queries matching your product and service capabilities." },
      { step: "03", title: "On-Page & Schema Patching", desc: "Optimize title tags, H1-H4 heading hierarchy, internal links, and JSON-LD markup." },
      { step: "04", title: "Outreach & Scaling", desc: "Acquire authoritative editorial links while monitoring rank progressions weekly." }
    ],
    techStack: ["Google Search Console", "Ahrefs API", "SkyRank AI Engine", "Schema.org", "Screaming Frog"],
    deliverables: [
      "Comprehensive SEO Technical Audit Report",
      "Target Keyword Cluster Strategy Document",
      "Complete On-Page Metadata & Content Optimizations",
      "Monthly White-Label Ranking & ROI Analytics",
      "Dedicated Senior Growth Strategist Support"
    ],
    faqs: [
      { question: "How long does it take to see organic SEO results?", answer: "Technical optimizations and speed fixes often show index improvements within 3-4 weeks, with substantial rank climbs occurring within 60 to 90 days." },
      { question: "Do you use white-hat SEO techniques?", answer: "100% yes. We strictly follow Google's Webmaster & Search Quality Rater guidelines to ensure long-term, stable rankings." }
    ]
  },
  "technical-seo": {
    slug: "technical-seo",
    title: "Technical SEO & Speed Optimization",
    category: "Search Optimization",
    tagline: "Fix Crawl Errors, Core Web Vitals & Index Bloat",
    heroDesc: "Ensure search engine bots can efficiently discover, crawl, render, and index every critical page on your website with zero roadblocks.",
    icon: "Cpu",
    gradient: "from-[#005FFF] to-[#3B82F6]",
    badge: "Technical",
    overview: "Search crawlers abandon slow or structurally broken websites. We optimize JavaScript hydration, clean canonical loops, fix faceted navigation bloat, and achieve 95+ Google Lighthouse speed scores.",
    keyFeatures: [
      { title: "Core Web Vitals Optimization", desc: "Accelerate Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)." },
      { title: "Crawl Budget & Sitemap Fixing", desc: "Streamline XML sitemaps, robots.txt crawl directives, and eliminate duplicate page parameters." },
      { title: "Schema.org JSON-LD Generation", desc: "Inject rich snippet markup for Organizations, Products, FAQs, Articles, and Local Businesses." },
      { title: "Mobile Rendering Diagnostics", desc: "Ensure mobile bots receive fully hydrated, responsive DOM trees without layout shifts." }
    ],
    processSteps: [
      { step: "01", title: "Bot Simulation Crawl", desc: "Simulate Googlebot smartphone crawlers to record status codes, redirects, and render trees." },
      { step: "02", title: "Speed Bottleneck Profiling", desc: "Identify blocking JavaScript bundles, uncompressed images, and TTFB server delays." },
      { step: "03", title: "Code & Server Optimizations", desc: "Implement WebP image pipelines, minify CSS/JS, and configure CDN edge caching." },
      { step: "04", title: "Re-indexing Verification", desc: "Submit updated sitemaps directly to Google Search Console and monitor crawl frequency." }
    ],
    techStack: ["Google Lighthouse", "Chrome UX Report", "Next.js Image Optimizer", "Cloudflare Edge", "Schema Generator"],
    deliverables: [
      "Technical Core Web Vitals Audit Report",
      "Full Structured Data (Schema.org) Code Injection",
      "Optimized Robots.txt & XML Sitemaps",
      "Canonical & Hreflang Tag Cleanup",
      "Sub-Second Mobile Load Speed Verification"
    ],
    faqs: [
      { question: "What is Core Web Vitals and why does it matter?", answer: "Core Web Vitals are official Google ranking signals measuring real-world load speed, responsiveness, and visual stability on mobile devices." },
      { question: "Can technical SEO fix indexing issues for large websites?", answer: "Yes! For large e-commerce or directory sites, technical SEO prevents crawl budget waste and ensures all products are indexed." }
    ]
  },
  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    title: "E-Commerce Growth & Store Setup",
    category: "Web Engineering",
    tagline: "Scale Online Sales, Product Catalogs & Checkout Funnels",
    heroDesc: "Drive high-intent transactional search traffic directly to your product catalog with optimized product schemas, fast checkout funnels, and store setup.",
    icon: "Globe",
    gradient: "from-[#FF5800] to-[#EA580C]",
    badge: "E-Commerce",
    overview: "We engineer high-converting online storefronts on Shopify Plus, WooCommerce, and custom Next.js Commerce, integrated with multi-currency gateways, automated inventory sync, and structured Merchant Center data.",
    keyFeatures: [
      { title: "1-Click Frictionless Checkout", desc: "Optimize cart funnels to minimize checkout drop-offs and maximize average order value (AOV)." },
      { title: "Product Schema & Rich Snippets", desc: "Display product pricing, star ratings, and in-stock badges directly in Google search results." },
      { title: "Faceted Navigation Speed Tuning", desc: "Fast multi-attribute filtering for colors, sizes, and brands without creating SEO duplicate index bloat." },
      { title: "Payment & Shipping Integrations", desc: "Direct integrations with Stripe, Razorpay, Shiprocket, and automated invoice generators." }
    ],
    processSteps: [
      { step: "01", title: "Catalog & Funnel Architecture", desc: "Structure categories, taxonomies, and high-converting product detail templates." },
      { step: "02", title: "Store Setup & Custom Code", desc: "Develop custom themes, payment gateway checkouts, and inventory sync APIs." },
      { step: "03", title: "Merchant & SEO Configuration", desc: "Configure Google Merchant Center feeds and structured product JSON-LD snippets." },
      { step: "04", title: "Launch & Conversion Tracking", desc: "Set up Google Analytics 4 eCommerce telemetry and launch with zero downtime." }
    ],
    techStack: ["Shopify Plus", "WooCommerce", "Next.js Commerce", "Stripe", "Razorpay", "Google Merchant Center"],
    deliverables: [
      "Fully Functional E-Commerce Storefront",
      "Multi-Currency Payment Gateway Integrations",
      "Automated Merchant Center Product Feed Setup",
      "Cart Abandonment Email Workflow Injections",
      "Inventory Management & Shipping API Sync"
    ],
    faqs: [
      { question: "Do you build on Shopify or custom platforms?", answer: "We build on both! Depending on your business needs, we specialize in Shopify Plus, WooCommerce, and custom headless Next.js Commerce." },
      { question: "Will our products show star ratings and prices in Google?", answer: "Yes! We implement complete Product Schema markup so your prices, reviews, and stock availability appear directly in Google search." }
    ]
  }
};

// Map aliases to primary service slugs
const slugAliases: Record<string, string> = {
  "web-development": "website-development",
  "website-dev": "website-development",
  "app-development": "application-development",
  "mobile-app": "mobile-app-development",
  "mobile-app-dev": "mobile-app-development",
  "server-support": "server-support",
  "tunnel-service": "tunnel-services",
  "tunnel-services": "tunnel-services",
  "seo": "seo-services",
  "seo-services": "seo-services",
  "aiseo": "seo-services",
  "keywords": "seo-services",
  "linkbuilding": "seo-services",
  "technical": "technical-seo",
  "technical-seo": "technical-seo",
  "ecom": "ecommerce-solutions",
  "ecommerce": "ecommerce-solutions",
  "ecommerce-solutions": "ecommerce-solutions"
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const rawSlug = resolvedParams?.slug || "";
  const targetSlug = slugAliases[rawSlug] || rawSlug;
  const service = servicesMap[targetSlug];

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(servicesMap).filter(
    (s) => s.slug !== service.slug
  ).slice(0, 3);

  return (
    <>
      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.heroDesc,
          "provider": {
            "@type": "Organization",
            "name": "SkyRank Solution",
            "url": "https://skyrank.io"
          }
        }}
      />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        {/* Glow Spheres */}
        <div className="glow-sphere bg-[#005FFF] w-[450px] h-[450px] -top-25 -left-20 opacity-15" />
        <div className="glow-sphere bg-[#FF5800] w-[350px] h-[350px] top-60 right-10 opacity-15" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-8">
            <Link href="/" className="hover:text-[#005FFF] transition">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-[#005FFF] transition">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#051A41] font-bold">{service.title}</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-4 py-1.5 text-xs font-extrabold text-[#005FFF] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#FF5800]" /> {service.category}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#051A41] leading-tight tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-[#FF5800]">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-zinc-700 font-medium leading-relaxed max-w-2xl">
                {service.heroDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-4">
                <button
                  onClick={() => window.dispatchEvent(new Event("openLeadModal"))}
                  className="rounded-2xl bg-[#005FFF] hover:bg-[#0047cc] px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-xl shadow-[#005FFF]/25 hover:scale-105 active:scale-95 transition flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Request Free Consultation</span>
                </button>
                <Link
                  href="/audit"
                  className="rounded-2xl border border-[#005FFF]/20 bg-white hover:bg-zinc-50 px-7 py-3.5 text-xs sm:text-sm font-bold text-[#051A41] shadow-sm transition flex items-center gap-2"
                >
                  <span>Run Instant SEO Audit</span>
                  <ArrowRight className="h-4 w-4 text-[#005FFF]" />
                </Link>
              </div>
            </div>

            {/* Right Card: Quick Spec Sheet */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-zinc-200 p-7 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block font-mono">Service Profile</span>
                    <h3 className="text-lg font-black text-[#051A41]">{service.title}</h3>
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#005FFF]/10 text-[#005FFF] border border-[#005FFF]/20">
                    {service.badge}
                  </span>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2 font-mono">
                    Technologies & Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-bold bg-[#EBEAFA] text-[#051A41] px-3 py-1.5 rounded-xl border border-[#005FFF]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables Check List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-[#051A41] uppercase tracking-wider block">
                    What You Receive:
                  </span>
                  <div className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-[#005FFF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => window.dispatchEvent(new Event("openLeadModal"))}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5800] hover:bg-[#e04d00] py-3 text-xs font-extrabold text-white shadow-md transition"
                  >
                    <span>Get Custom Estimate & Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF] bg-[#005FFF]/10 px-3.5 py-1 rounded-full border border-[#005FFF]/20">
                Key Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#051A41]">
                Why Partner With SkyRank For {service.title}?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-zinc-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#005FFF]/40 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-2xl bg-[#005FFF]/10 border border-[#005FFF]/20 flex items-center justify-center text-[#005FFF] font-black text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-[#051A41]">{feat.title}</h3>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Workflow Steps */}
          <div className="mb-24 rounded-3xl bg-white border border-zinc-200 p-8 sm:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF] bg-[#005FFF]/10 px-3.5 py-1 rounded-full border border-[#005FFF]/20">
                Workflow Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#051A41]">
                Our 4-Stage Execution Blueprint
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="relative space-y-3 p-4 rounded-2xl bg-[#EBEAFA]/50 border border-[#005FFF]/10">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#005FFF] font-mono">{step.step}</span>
                    <Clock className="h-4 w-4 text-zinc-400" />
                  </div>
                  <h4 className="text-base font-bold text-[#051A41]">{step.title}</h4>
                  <p className="text-xs text-zinc-600 font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="max-w-3xl mx-auto mb-24 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005FFF] bg-[#005FFF]/10 px-3.5 py-1 rounded-full border border-[#005FFF]/20">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#051A41]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-[#051A41] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#005FFF]" />
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed pl-4">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Other Services Grid */}
          <div className="border-t border-zinc-200 pt-16 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-black text-[#051A41]">Explore Related Solutions</h3>
                <p className="text-xs text-zinc-600 font-medium mt-1">Cross-functional technical and growth capabilities.</p>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-[#005FFF] hover:text-[#FF5800] transition flex items-center gap-1"
              >
                <span>View All 8 Services</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-3xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-xl hover:border-[#005FFF]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#005FFF] uppercase tracking-wider bg-[#005FFF]/10 px-2.5 py-0.5 rounded-full">
                      {other.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#051A41] group-hover:text-[#005FFF] transition-colors">
                      {other.title}
                    </h4>
                    <p className="text-xs text-zinc-600 font-medium leading-relaxed line-clamp-2">
                      {other.heroDesc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-[#005FFF]">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Call To Action */}
          <div className="rounded-3xl bg-[#051A41] border border-[#005FFF]/30 p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-5 relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Ready to Accelerate Your {service.title}?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                Connect with our dedicated engineers and search growth architects today for a free technical consultation and custom quote.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
                <button
                  onClick={() => window.dispatchEvent(new Event("openLeadModal"))}
                  className="rounded-2xl bg-[#FF5800] hover:bg-[#e04d00] px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Talk to Our Expert</span>
                </button>
                <Link
                  href="/services"
                  className="rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition flex items-center justify-center gap-2"
                >
                  <span>Browse All Services</span>
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
