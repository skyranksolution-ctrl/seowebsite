"use client";

import { useState } from "react";
import { Check, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import GlowingCard from "./GlowingCard";

interface PricingPlan {
  name: string;
  priceMonthly: number | string;
  priceAnnually: number | string;
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
    priceMonthly: 2999,
    priceAnnually: 2399,
    description: "Essential keyword research and technical website audits.",
    features: [
      "Track up to 250 Keywords",
      "Weekly Website Audits",
      "Basic Keyword Explorer",
      "AI Meta Tag Generator (50/mo)",
      "Google Search Console Integration",
      "Email Support (24h response)",
    ],
    ctaText: "Start Free Audit",
    ctaLink: "/audit",
    glowColor: "rgba(255, 255, 255, 0.05)",
  },
  {
    name: "Standard SEO",
    priceMonthly: 4999,
    priceAnnually: 3999,
    description: "Advanced optimization tools and live ranking indicators.",
    features: [
      "Track up to 1,000 Keywords",
      "Daily Website Audits",
      "Full Competitor Analysis",
      "AI Content Writer (20 articles/mo)",
      "Daily Keyword Tracking",
      "Google Analytics & GSC Integration",
      "Priority Chat Support",
    ],
    ctaText: "Get Started Now",
    ctaLink: "/contact",
    popular: true,
    glowColor: "rgba(0, 102, 255, 0.2)",
  },
  {
    name: "Premium SEO",
    priceMonthly: 9999,
    priceAnnually: 7999,
    description: "Elite search authority scaling and link-building outreach.",
    features: [
      "Track up to 5,000 Keywords",
      "White-Label PDF Reports",
      "Unlimited Automated Audits",
      "AI Content Writer (100 articles/mo)",
      "API Access for Custom Integrations",
      "Competitor Backlink Monitoring",
      "Dedicated Account Manager",
    ],
    ctaText: "Scale My Rank",
    ctaLink: "/contact",
    glowColor: "rgba(0, 194, 255, 0.2)",
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    description: "Enterprise scale crawler, custom APIs & dedicated support.",
    features: [
      "Unlimited Keyword Tracking",
      "Real-time SERP Crawler Access",
      "Custom Schema.org Generators",
      "Unlimited AI Copywriting Engine",
      "SLA 99.9% Rank Uptime",
      "Custom Integration Support",
      "24/7 Phone & Email Engineers",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    glowColor: "rgba(168, 85, 247, 0.2)",
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="space-y-12">
      {/* Billing toggle */}
      <div className="flex justify-center items-center gap-3">
        <span className={`text-sm ${billingCycle === "monthly" ? "text-white font-semibold" : "text-zinc-400"}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
          className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/10 transition-colors duration-200 ease-in-out focus:outline-none"
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primary shadow ring-0 transition duration-200 ease-in-out ${
              billingCycle === "annually" ? "translate-x-5 bg-secondary" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-sm flex items-center gap-1.5 ${billingCycle === "annually" ? "text-white font-semibold" : "text-zinc-400"}`}>
          Yearly <span className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-bold text-secondary">Save 20%</span>
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {plans.map((plan, idx) => {
          const isNumeric = typeof plan.priceMonthly === "number";
          const currentPrice =
            billingCycle === "monthly"
              ? plan.priceMonthly
              : plan.priceAnnually;

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
                glowColor={plan.glowColor}
                className={`relative flex flex-col justify-between p-6 h-full border ${
                  plan.popular ? "border-primary/50 shadow-[0_0_20px_rgba(0,102,255,0.15)] bg-[#070b22]" : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 h-8">{plan.description}</p>
                  </div>

                  <div className="border-t border-b border-white/5 py-4 flex items-baseline gap-1">
                    {isNumeric ? (
                      <>
                        <span className="text-4xl font-extrabold text-white">₹{currentPrice.toLocaleString("en-IN")}</span>
                        <span className="text-zinc-500 text-xs font-medium">/mo</span>
                      </>
                    ) : (
                      <span className="text-3xl font-extrabold text-white">{currentPrice}</span>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center rounded-xl py-2.5 text-xs font-semibold transition ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-opacity-90 shadow-md"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
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
