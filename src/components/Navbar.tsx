"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "SEO Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 🔵 Top Header Blue Bar (#005FFF) */}
      <div className="bg-[#005FFF] text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
        <span>Top #1 AI SEO Agency & SaaS Platform | Special Launch Offer: 50% Off First Month Audit</span>
        <Link href="/audit" className="underline hover:text-amber-200 transition-colors ml-1 font-bold">
          Claim Now &rarr;
        </Link>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#051A41]/10 bg-[#EBEAFA]/90 backdrop-blur-md py-3 shadow-md"
            : "bg-[#EBEAFA]/70 backdrop-blur-sm py-4"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-6">
          <div className="flex h-12 items-center justify-between gap-2">
            {/* Logo with Navy & Blue */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-9 w-9">
                <img src="/logo.jpg" alt="SkyRank Solution Logo" className="h-full w-full object-contain rounded-full border border-[#005FFF]/20" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#051A41] transition-colors group-hover:text-[#005FFF]">
                SkyRank<span className="text-[#005FFF]">Solution</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold transition-colors ${
                      isActive ? "text-[#005FFF] font-bold" : "text-[#051A41]/85 hover:text-[#005FFF]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 -z-10 rounded-full bg-[#005FFF]/10 border border-[#005FFF]/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("openLeadModal"))}
                className="whitespace-nowrap inline-flex items-center justify-center rounded-full bg-[#005FFF]/10 hover:bg-[#005FFF]/20 border border-[#005FFF]/30 px-3.5 xl:px-4 py-2 text-xs font-bold text-[#005FFF] transition hover:scale-105 active:scale-95"
              >
                Talk to Expert
              </button>
              <Link
                href="/audit"
                className="whitespace-nowrap relative inline-flex items-center justify-center rounded-full bg-[#FF5800] hover:bg-[#e04d00] px-4 xl:px-5 py-2 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <span>Free Audit</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/audit"
                className="sm:hidden px-3.5 py-1.5 text-xs font-semibold text-white rounded-full bg-[#FF5800]"
              >
                Audit
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#051A41]/10 bg-white/50 text-[#051A41] hover:text-[#005FFF]"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-[#051A41]/10 bg-[#EBEAFA]/98 backdrop-blur-lg overflow-hidden shadow-xl"
          >
            <div className="space-y-1 px-4 py-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#005FFF]/15 text-[#005FFF] font-bold border-l-4 border-[#005FFF]"
                        : "text-[#051A41] hover:bg-[#005FFF]/10 hover:text-[#005FFF]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-[#051A41]/10 flex flex-col gap-3 px-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new Event("openLeadModal"));
                  }}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#005FFF] bg-white py-3 text-sm font-bold text-[#005FFF] shadow-sm"
                >
                  <span>Talk to SEO Expert</span>
                </button>
                <Link
                  href="/audit"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#FF5800] hover:bg-[#e04d00] py-3 text-sm font-bold text-white shadow-md"
                >
                  <span>Start Free Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

