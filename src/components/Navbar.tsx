"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9">
              <img src="/logo.jpg" alt="SkyRank Solution Logo" className="h-full w-full object-contain rounded-full" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-secondary">
              SkyRank<span className="text-primary">Solution</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 -z-10 rounded-full bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/audit"
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span>Free Audit</span>
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/audit"
              className="sm:hidden px-3.5 py-1.5 text-xs font-semibold text-white rounded-full bg-primary"
            >
              Audit
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
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
            className="lg:hidden border-b border-white/10 bg-[#050816]/95 backdrop-blur-lg overflow-hidden"
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
                        ? "bg-primary/20 text-white border-l-2 border-primary"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3 px-4">
                <Link
                  href="/audit"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary py-3 text-base font-semibold text-white shadow-lg"
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
