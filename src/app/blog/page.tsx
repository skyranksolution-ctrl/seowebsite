"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  title: string;
  category: "Technical" | "AI SEO" | "Outreach" | "Research";
  date: string;
  readTime: string;
  snippet: string;
  author: string;
  glowColor: string;
}

const initialPosts: BlogPost[] = [
  {
    title: "The Core Web Vitals Guide: Ranking Fast on Mobile",
    category: "Technical",
    date: "July 2, 2026",
    readTime: "6 min read",
    snippet: "Google's search crawler targets Largest Contentful Paint and interaction responsiveness metrics. Review how to compress images and optimize scripts.",
    author: "Pratik Kanzariya",
    glowColor: "rgba(0, 102, 255, 0.12)",
  },
  {
    title: "How Search Generative Experience (SGE) Shifts Organic Flows",
    category: "AI SEO",
    date: "June 28, 2026",
    readTime: "8 min read",
    snippet: "AI snapshots are appearing directly inside SERPs. Learn the formatting hacks and semantic guidelines needed to optimize matching indexes.",
    author: "Alex Rivoli",
    glowColor: "rgba(0, 194, 255, 0.12)",
  },
  {
    title: "The Startup Roadmap to Safe Editorial Outreach Link Building",
    category: "Outreach",
    date: "June 15, 2026",
    readTime: "5 min read",
    snippet: "Avoid automatic search penances. We explain how we secure high-value links by designing detailed statistical resources for journalists.",
    author: "Sophia Martinez",
    glowColor: "rgba(168, 85, 247, 0.12)",
  },
  {
    title: "Why Exact Matching Terms Are Dying: Context Research Explained",
    category: "Research",
    date: "June 10, 2026",
    readTime: "7 min read",
    snippet: "Modern crawler models analyze user search intent, not just keyword counts. Discover how we cluster semantic maps matching real queries.",
    author: "Pratik Kanzariya",
    glowColor: "rgba(34, 197, 94, 0.12)",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Technical" | "AI SEO" | "Outreach" | "Research">("All");
  const [currentPage, setCurrentPage] = useState(1);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SkyRank SEO & Growth Blog",
    "description": "Read technical SEO guides, AI ranking tutorials, and outreach case studies written by the experts at SkyRank Solution."
  };

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              SEO Insights
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">SkyRank Industry Blog</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
              Read technical search guides, algorithm updates, and AI copywriting templates curated by our research team.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-5xl mx-auto mb-12">
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search blog guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-[#0a0f24]/50 py-2 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:border-primary focus:outline-none transition"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {(["All", "Technical", "AI SEO", "Outreach", "Research"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white border border-primary"
                      : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="max-w-5xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, idx) => (
                    <motion.div
                      key={post.title}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <GlowingCard
                        glowColor={post.glowColor}
                        className="p-6 border-white/5 bg-[#0a0f26]/30 flex flex-col justify-between h-full"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold font-mono">
                            <span className="rounded bg-primary/10 border border-primary/20 px-2 py-0.5 text-primary uppercase">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-base font-bold text-white leading-snug mt-3 hover:text-secondary transition cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed mt-2">{post.snippet}</p>
                        </div>

                        {/* Author & Read More */}
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2 text-xs text-zinc-400">
                            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px]">
                              {post.author.split(" ").map(n => n[0]).join("")}
                            </div>
                            <span>{post.author}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition cursor-pointer group">
                            Read Guide <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </GlowingCard>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5">
                <span className="text-sm text-zinc-500">No blog guides matching search terms found.</span>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPage(1)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  currentPage === 1
                    ? "bg-primary border-primary text-white"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  currentPage === 2
                    ? "bg-primary border-primary text-white"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                2
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
