"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Clock, Calendar, Check, X, Sparkles, Send, UploadCloud } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "seo-arch",
    title: "Senior SEO Growth Architect",
    department: "Consulting",
    location: "Remote (Global)",
    type: "Full-Time",
    description: "Guide organic scaling roadmaps for enterprise SaaS domains. Track SERP changes and design structured context schema layouts.",
  },
  {
    id: "nextjs-eng",
    title: "Senior React/Next.js Engineer",
    department: "SaaS Product",
    location: "Remote (Global)",
    type: "Full-Time",
    description: "Build high-speed dashboard systems, crawler telemetry, and automated API code integrations using Tailwind CSS v4 and TS.",
  },
  {
    id: "content-strat",
    title: "Content Marketing Strategist",
    department: "Marketing",
    location: "Remote (US/EU)",
    type: "Part-Time",
    description: "Draft ranking outlines, run search intent density analyses, and write high-converting copy matching NLP guidelines.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", coverNote: "" });
  const [submitted, setSubmitted] = useState(false);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at SkyRank Solution",
    "description": "Join our remote team of search architects and engineering researchers. Browse open roles at SkyRank Solution."
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      const subject = encodeURIComponent(`Job Application: ${selectedJob?.title || "Career Opening"}`);
      const body = encodeURIComponent(
        `Hi SkyRank Solution HR,\n\nI would like to apply for the position of ${selectedJob?.title}.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nCover Note:\n${formData.coverNote || "None"}\n\nBest regards,\n${formData.name}`
      );
      
      window.location.href = `mailto:skyranksolution@gmail.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
        setFormData({ name: "", email: "", coverNote: "" });
      }, 3000);
    }
  };

  const benefits = [
    { title: "100% Remote Ops", desc: "Collaborate with talented engineers from any corner of the globe." },
    { title: "Health Stipends", desc: "Enjoy comprehensive medical coverage plans and mental wellness stipends." },
    { title: "Latest Tech Budgets", desc: "We provide budgets for hardware and subscriptions (IDE, AI utilities)." },
    { title: "Flexible Core Hours", desc: "We measure outputs and results, not exact desk clock parameters." },
  ];

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              Join the team
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Build the Future of Search</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
              We are search researchers and software engineers designing next-gen crawl automation dashboards. Join our remote team.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
            {benefits.map((ben, idx) => (
              <GlowingCard
                key={idx}
                glowColor="rgba(0, 194, 255, 0.08)"
                className="p-6 border-white/5 bg-[#0a0f26]/30 text-left"
              >
                <div className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-bold text-sm mb-4">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-bold text-white">{ben.title}</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{ben.desc}</p>
              </GlowingCard>
            ))}
          </div>

          {/* Open Openings List */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white">Active Positions</h2>
              <p className="text-zinc-400 text-xs mt-2">Remote-first career openings</p>
            </div>

            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-white/10 bg-[#0a0f24]/50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition hover:border-primary/30"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{job.department}</span>
                    <h3 className="text-base font-bold text-white">{job.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{job.description}</p>
                    <div className="flex gap-4 text-[10px] text-zinc-500 font-semibold pt-2">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white hover:bg-opacity-90 active:scale-95 transition self-start md:self-center"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal Application Form */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-[#050816]/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0f24] p-6 shadow-2xl z-10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-4 top-4 text-zinc-500 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="apply-inputs" className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Application Form</span>
                      <h3 className="text-base font-bold text-white mt-1">Apply for {selectedJob.title}</h3>
                    </div>

                    <form onSubmit={handleApplySubmit} className="space-y-4 pt-2">
                      <div>
                        <label htmlFor="modal-name" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full rounded-lg border border-white/10 bg-white/5 py-2 px-3.5 text-xs text-white focus:border-primary focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-email" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email address"
                          className="w-full rounded-lg border border-white/10 bg-white/5 py-2 px-3.5 text-xs text-white focus:border-primary focus:outline-none transition"
                        />
                      </div>
                      
                      {/* Mock Resume Upload */}
                      <div>
                        <label className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                          Resume / CV
                        </label>
                        <div className="border border-dashed border-white/10 bg-white/5 rounded-lg p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-white/10 transition">
                          <UploadCloud className="h-6 w-6 text-zinc-500" />
                          <span className="text-[10px] text-zinc-300">Upload PDF or DOCX file</span>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="modal-note" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                          Cover Note (Optional)
                        </label>
                        <textarea
                          id="modal-note"
                          rows={3}
                          value={formData.coverNote}
                          onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                          placeholder="Write a brief cover note..."
                          className="w-full rounded-lg border border-white/10 bg-white/5 py-2 px-3.5 text-xs text-white focus:border-primary focus:outline-none transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 text-xs font-semibold text-white shadow-md hover:bg-opacity-95 transition"
                      >
                        <span>Submit Application</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="apply-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Check className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-white text-base">Application Received!</span>
                    <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                      Thank you for applying, {formData.name}. Our recruiters will review your CV and reach out to {formData.email}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
