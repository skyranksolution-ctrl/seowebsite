"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  BrainCircuit, 
  Sparkles, 
  ShieldCheck, 
  Crown, 
  Gem,
  ArrowUpRight
} from "lucide-react";

export interface PartnerBrand {
  name: string;
  category: string;
  description: string;
  tagline: string;
  color: string;
  badgeBg: string;
  iconBg: string;
  renderLogo: () => React.ReactNode;
}

export const partnerBrands: PartnerBrand[] = [
  {
    name: "LearnMore Technologies",
    category: "EdTech & IT Training",
    tagline: "Leading Technology Learning Hub",
    description: "Enterprise software training & tech skill certification platform.",
    color: "#005FFF",
    badgeBg: "bg-[#005FFF]/10 text-[#005FFF] border-[#005FFF]/20",
    iconBg: "from-[#005FFF] to-[#00C2FF]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#005FFF] to-[#00C2FF] flex items-center justify-center text-white shadow-md shadow-[#005FFF]/25">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-base font-black tracking-tight text-[#051A41]">LEARN</span>
            <span className="text-base font-black tracking-tight text-[#005FFF]">MORE</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Technologies</span>
        </div>
      </div>
    )
  },
  {
    name: "Property Dealer",
    category: "Real Estate & Housing",
    tagline: "Premier Property Marketplace",
    description: "Commercial & residential real estate consulting and acquisition network.",
    color: "#FF5800",
    badgeBg: "bg-[#FF5800]/10 text-[#FF5800] border-[#FF5800]/20",
    iconBg: "from-[#FF5800] to-[#FFAA00]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF5800] to-[#FFAA00] flex items-center justify-center text-white shadow-md shadow-[#FF5800]/25">
          <Building2 className="h-5 w-5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-base font-black tracking-tight text-[#051A41]">PROPERTY</span>
            <span className="text-base font-black tracking-tight text-[#FF5800]">DEALER</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Estates & Lands</span>
        </div>
      </div>
    )
  },
  {
    name: "NextGen2AI",
    category: "AI & Neural SaaS",
    tagline: "Next-Generation Intelligence",
    description: "Automated AI workflow engines, LLM fine-tuning and cognitive analytics.",
    color: "#7C3AED",
    badgeBg: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20",
    iconBg: "from-[#7C3AED] to-[#00F5D4]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00F5D4] flex items-center justify-center text-white shadow-md shadow-[#7C3AED]/25">
          <BrainCircuit className="h-5 w-5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-0.5">
            <span className="text-base font-black tracking-tight text-[#051A41]">NEXTGEN</span>
            <span className="text-base font-black tracking-tight text-[#7C3AED]">2AI</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Cognitive Core</span>
        </div>
      </div>
    )
  },
  {
    name: "SevenTail",
    category: "Digital Agency & Tech",
    tagline: "Creative Digital Studio",
    description: "Boutique brand experience design, creative commerce & media strategies.",
    color: "#E11D48",
    badgeBg: "bg-[#E11D48]/10 text-[#E11D48] border-[#E11D48]/20",
    iconBg: "from-[#E11D48] to-[#FB7185]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#FB7185] flex items-center justify-center text-white shadow-md shadow-[#E11D48]/25 font-black text-sm">
          7T
        </div>
        <div className="text-left">
          <div className="flex items-center gap-0.5">
            <span className="text-base font-black tracking-tight text-[#051A41]">SEVEN</span>
            <span className="text-base font-black tracking-tight text-[#E11D48]">TAIL</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Creative Studio</span>
        </div>
      </div>
    )
  },
  {
    name: "Indian SBC",
    category: "Business Advisory & MSME",
    tagline: "National Business Council",
    description: "Corporate compliance, small business scaling and trade facilitation council.",
    color: "#046A38",
    badgeBg: "bg-[#046A38]/10 text-[#046A38] border-[#046A38]/20",
    iconBg: "from-[#FF671F] via-[#005FFF] to-[#046A38]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF671F] via-[#051A41] to-[#046A38] p-[2px] shadow-md">
          <div className="h-full w-full rounded-[10px] bg-white flex items-center justify-center text-[#051A41]">
            <ShieldCheck className="h-5 w-5 text-[#046A38]" />
          </div>
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-base font-black tracking-tight text-[#FF671F]">INDIAN</span>
            <span className="text-base font-black tracking-tight text-[#046A38]">SBC</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Small Business Corp</span>
        </div>
      </div>
    )
  },
  {
    name: "Triumph Hotel",
    category: "Luxury Hospitality & Suites",
    tagline: "5-Star Elite Living",
    description: "Bespoke luxury accommodations, banquet halls and world-class hospitality.",
    color: "#D97706",
    badgeBg: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20",
    iconBg: "from-[#D97706] to-[#FBBF24]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D97706] to-[#FBBF24] flex items-center justify-center text-white shadow-md shadow-[#D97706]/25">
          <Crown className="h-5 w-5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-base font-black tracking-tight text-[#051A41]">TRIUMPH</span>
            <span className="text-base font-black tracking-tight text-[#D97706]">HOTEL</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Resorts & Suites</span>
        </div>
      </div>
    )
  },
  {
    name: "Dream Collection",
    category: "Fashion & Lifestyle",
    tagline: "Couture & Premium Apparel",
    description: "Designer fashion apparel, luxury wardrobe collections & lifestyle retail.",
    color: "#9333EA",
    badgeBg: "bg-[#9333EA]/10 text-[#9333EA] border-[#9333EA]/20",
    iconBg: "from-[#9333EA] to-[#EC4899]",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#9333EA] to-[#EC4899] flex items-center justify-center text-white shadow-md shadow-[#9333EA]/25">
          <Gem className="h-5 w-5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1">
            <span className="text-base font-black tracking-tight text-[#051A41]">DREAM</span>
            <span className="text-base font-black tracking-tight text-[#9333EA]">COLLECTION</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block -mt-0.5">Fashion & Couture</span>
        </div>
      </div>
    )
  }
];

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-white border-y border-[#051A41]/10 relative overflow-hidden">
      {/* Subtle background ambient decorations */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#005FFF]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF5800]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF]">
            <Sparkles className="h-3.5 w-3.5" /> Official Growth Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051A41]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium">
            Proudly powering search growth, organic rankings, and digital expansion for our esteemed partners.
          </p>
        </div>

        {/* Dynamic Partner Logo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
          {partnerBrands.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-zinc-200/80 bg-[#EBEAFA]/40 hover:bg-white p-5 transition-all duration-300 hover:shadow-xl hover:border-[#005FFF]/30 flex flex-col justify-between"
            >
              <div>
                {/* Logo & Category Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  {partner.renderLogo()}
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border shrink-0 ${partner.badgeBg}`}>
                    Verified
                  </span>
                </div>

                {/* Tagline & Description */}
                <p className="text-xs font-bold text-[#051A41] mt-2 group-hover:text-[#005FFF] transition-colors">
                  {partner.tagline}
                </p>
                <p className="text-[11px] text-zinc-600 font-medium leading-relaxed mt-1">
                  {partner.description}
                </p>
              </div>

              {/* Bottom Industry Category Tag */}
              <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-[10px] font-bold text-zinc-500">
                <span>{partner.category}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-[#FF5800] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
