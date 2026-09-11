"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import GlowingCard from "./GlowingCard";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Director of Marketing",
    company: "SaaSFlow",
    text: "SkyRank boosted our organic traffic by 340% in just 4 months. The AI content suggestions and technical audits are pure gold. Highly recommend their platform!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    company: "DevHq Inc.",
    text: "We migrated from a traditional agency to SkyRank's automated platform, and the daily ranking reports alone saved us hours of manual work. Incredible ROI.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "SEO Specialist",
    company: "E-Com Universe",
    text: "Technical SEO audits that actually make sense! It identified schema.org errors and core web vitals bugs we had been trying to fix for months.",
    rating: 5,
  },
  {
    name: "Marcus Aurelius",
    role: "Head of Growth",
    company: "FintechPrime",
    text: "The backlink tracking and competitor explorer let us reverse-engineer our competition's entire rank strategy. Our organic leads have doubled.",
    rating: 5,
  },
  {
    name: "Jessica Miller",
    role: "VP of Product",
    company: "AppLaunch",
    text: "Apple-level clean UI, Stripe-level smooth onboarding. SkyRank's dashboard is the most beautiful tool in our marketing stack.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Digital Marketing Lead",
    company: "Himalaya Travel Group",
    text: "Their local SEO automation helped us rank on top of the map pack for 12 branch locations within 60 days. Our calls and bookings skyrocketed.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {testimonials.map((test, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <GlowingCard glowColor="rgba(0, 95, 255, 0.1)" className="p-6 h-full flex flex-col justify-between bg-white/90 border-[#051A41]/10">
            <div className="space-y-4">
              {/* Rating stars (#FF5800 Orange) */}
              <div className="flex gap-1 text-[#FF5800]">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              {/* Quote text (#051A41 Navy) */}
              <p className="text-[#051A41]/90 text-sm leading-relaxed relative">
                &ldquo;{test.text}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#051A41]/10">
              <div className="h-10 w-10 rounded-full bg-[#005FFF] flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                {test.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#051A41]">{test.name}</h4>
                <p className="text-xs text-zinc-500">
                  {test.role}, <span className="text-[#005FFF] font-medium">{test.company}</span>
                </p>
              </div>
              <MessageSquareQuote className="h-5 w-5 text-[#005FFF]/40 ml-auto" />
            </div>
          </GlowingCard>
        </motion.div>
      ))}
    </div>
  );
}

