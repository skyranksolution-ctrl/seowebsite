"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, Activity } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      svg: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      svg: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.545 12 3.545 12 3.545s-7.52 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.868.508 9.388.508 9.388.508s7.52 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/skyrank_solution_01?igsh=MWQ0azFsczcyZGplYQ==",
      svg: (
        <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.79-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z" />
        </svg>
      ),
    },
  ];

  const links = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact Us", href: "/contact" },
    ],
    services: [
      { name: "Keyword Research", href: "/services#keywords" },
      { name: "Technical SEO", href: "/services#technical" },
      { name: "On-Page SEO", href: "/services#onpage" },
      { name: "AI SEO Optimization", href: "/services#aiseo" },
      { name: "Link Building", href: "/services#linkbuilding" },
    ],
    resources: [
      { name: "SEO Tools (Coming Soon)", href: "/tools" },
      { name: "Growth Case Studies", href: "/case-studies" },
      { name: "SEO Blog", href: "/blog" },
      { name: "Free SEO Audit", href: "/audit" },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050816] pt-24 pb-12 overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-sphere bg-primary w-[300px] h-[300px] -left-50 -bottom-50 opacity-20"></div>
      <div className="glow-sphere bg-secondary w-[200px] h-[200px] right-20 bottom-20 opacity-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-9 w-9">
                <img src="/logo.jpg" alt="SkyRank Solution Logo" className="h-full w-full object-contain rounded-full" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                SkyRank<span className="text-primary">Solution</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-md">
              AI-Powered SEO solutions that help businesses dominate Google search results. Rank Higher. Grow Faster.
            </p>
            <div className="space-y-2 text-xs text-zinc-400 pt-2 border-t border-white/5">
              <p className="flex items-center gap-2">
                <span className="text-primary font-bold">Call:</span>
                <a href="tel:+919737356415" className="hover:text-white transition">+91 97373 56415</a> / 
                <a href="tel:+919408626950" className="hover:text-white transition">+91 94086 26950</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary font-bold">Email:</span>
                <a href="mailto:skyranksolution@gmail.com" className="hover:text-white transition">skyranksolution@gmail.com</a>
              </p>
            </div>
            <div className="space-y-3 max-w-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Subscribe to our SEO Newsletter
              </span>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-white hover:bg-opacity-90 active:scale-95 transition"
                >
                  {subscribed ? "Subscribed!" : <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                {links.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider">Services</h3>
              <ul className="mt-4 space-y-2">
                {links.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                {links.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} SkyRank Solution. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.svg}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-4 text-xs text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
