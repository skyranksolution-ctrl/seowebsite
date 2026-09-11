"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowingCard from "./GlowingCard";

interface PricingPlan {
  name: string;
  tagline: string;
  badge: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  glowColor?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Basic SEO",
    tagline: "Starter Package",
    badge: "Flexible Quote",
    description: "Essential keyword research and technical website audits for small sites.",
    features: [
      "Track up to 250 Keywords",
      "Weekly Website Audits",
      "Basic Keyword Explorer",
      "AI Meta Tag Generator",
      "Search Console Sync",
      "Email Support (24h response)",
    ],
    ctaText: "Start Free Audit",
    ctaLink: "/audit",
    glowColor: "rgba(0, 95, 255, 0.1)",
  },
  {
    name: "Standard SEO",
    tagline: "Growth Package",
    badge: "Most Popular",
    description: "Advanced optimization tools and live ranking indicators for expanding brands.",
    features: [
      "Track up to 1,000 Keywords",
      "Daily Website Audits",
      "Full Competitor Analysis",
      "AI Content Writer Engine",
      "Daily SERP Rank Tracking",
      "Google Analytics & GSC Sync",
      "Priority Support Lead",
    ],
    ctaText: "Get Custom Quote",
    ctaLink: "/contact",
    popular: true,
    glowColor: "rgba(255, 88, 0, 0.15)",
  },
  {
    name: "Premium SEO",
    tagline: "Pro Scale Tier",
    badge: "High Authority",
    description: "Elite search authority scaling and white-hat link-building outreach.",
    features: [
      "Track up to 5,000 Keywords",
      "White-Label PDF Reports",
      "Unlimited Automated Audits",
      "AI Content Writer Pro",
      "API Access for Custom Integrations",
      "Competitor Backlink Monitoring",
      "Dedicated Account Manager",
    ],
    ctaText: "Scale My Rank",
    ctaLink: "/contact",
    glowColor: "rgba(0, 95, 255, 0.15)",
  },
  {
    name: "Enterprise",
    tagline: "Custom Solution",
    badge: "Dedicated Suite",
    description: "Enterprise scale crawler, custom APIs & dedicated engineer team.",
    features: [
      "Unlimited Keyword Tracking",
      "Real-time SERP Crawler Access",
      "Custom Schema.org Generators",
      "Unlimited AI Copywriting Engine",
      "SLA 99.9% Rank Uptime",
      "Custom Integration Support",
      "24/7 Dedicated Support",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    glowColor: "rgba(5, 26, 65, 0.15)",
  },
];

export default function PricingSection() {
  return (
    <div className="space-y-10">
      {/* Subtitle Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-[#005FFF]/10 border border-[#005FFF]/20 px-4 py-1.5 text-xs font-extrabold text-[#005FFF]">
          Tailored Plans For Every Business Stage
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {plans.map((plan, idx) => {
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <GlowingCard
                glowColor={plan.glowColor || "rgba(0, 95, 255, 0.15)"}
                className={`relative flex flex-col justify-between p-6 pt-8 h-full border ${
                  plan.popular
                    ? "border-[#FF5800] ring-2 ring-[#FF5800]/20 bg-white shadow-xl"
                    : "border-[#051A41]/10 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF5800] px-3.5 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1 shadow-md z-20">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#005FFF] uppercase tracking-wider block mb-1">
                      {plan.tagline}
                    </span>
                    <h4 className="text-xl font-extrabold text-[#051A41]">{plan.name}</h4>
                    <p className="text-xs text-zinc-600 mt-1.5 min-h-[36px]">{plan.description}</p>
                  </div>

                  <div className="border-t border-b border-[#051A41]/10 py-3 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#051A41]">{plan.badge}</span>
                    <span className="text-[11px] font-bold text-[#FF5800] bg-[#FF5800]/10 px-2.5 py-0.5 rounded-full border border-[#FF5800]/20">
                      Tailored ROI
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-700 font-medium">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-[#005FFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center rounded-xl py-3 text-xs font-extrabold transition ${
                      plan.popular
                        ? "bg-[#FF5800] hover:bg-[#e04d00] text-white shadow-md hover:shadow-lg"
                        : "bg-[#005FFF] hover:bg-[#0047cc] text-white shadow-sm"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </GlowingCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


