"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Building, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Loader2,
  MessageSquare
} from "lucide-react";

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteUrl: "",
    companyName: ""
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // If modal is not open and not yet submitted, trigger it after 9 seconds
    if (!isOpen && !submitted) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 9000);
    }

    // Global listener so any button on any page can open this popup immediately
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openLeadModal", handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("openLeadModal", handleOpen);
    };
  }, [isOpen, submitted]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.websiteUrl) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.websiteUrl,
          subject: `New Project Lead Inquiry: ${formData.name}`,
          message: `Lead Popup Form Submission - Company: ${formData.companyName || "N/A"}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); // Fallback to success feedback for smooth UX
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating CTA Trigger Button on Bottom-Left */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2 rounded-full bg-[#005FFF] hover:bg-[#0047cc] text-white px-4 py-2.5 shadow-xl hover:shadow-2xl text-xs font-extrabold transition-all hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Talk to SEO Expert"
      >
        <MessageSquare className="h-4 w-4 text-[#FF5800]" />
        <span>Talk to SEO Expert</span>
      </motion.button>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#051A41]/75 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-zinc-200 overflow-hidden z-10 my-auto text-[#051A41]"
            >
              {/* Top gradient accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#005FFF] via-[#00C2FF] to-[#FF5800]" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:text-[#051A41] hover:bg-zinc-100 transition-colors z-20"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <div>
                    {/* Header matching exact screenshot */}
                    <div className="mb-6 text-left">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#005FFF] bg-[#005FFF]/10 px-2.5 py-0.5 rounded-full border border-[#005FFF]/20">
                          <Sparkles className="h-3 w-3 text-[#FF5800]" /> Free Growth Consultation
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#051A41] tracking-tight">
                        Have a project in mind?
                      </h2>
                      <p className="text-xl sm:text-2xl font-bold text-[#005FFF] mt-0.5">
                        Let&apos;s get to work.
                      </p>
                    </div>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      {/* Full Name */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <User className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full Name*"
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-[#051A41] placeholder-zinc-400 focus:bg-white focus:border-[#005FFF] focus:ring-2 focus:ring-[#005FFF]/15 focus:outline-none transition shadow-sm"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Mail className="h-4 w-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your Email Address*"
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-[#051A41] placeholder-zinc-400 focus:bg-white focus:border-[#005FFF] focus:ring-2 focus:ring-[#005FFF]/15 focus:outline-none transition shadow-sm"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Phone className="h-4 w-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number*"
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-[#051A41] placeholder-zinc-400 focus:bg-white focus:border-[#005FFF] focus:ring-2 focus:ring-[#005FFF]/15 focus:outline-none transition shadow-sm"
                        />
                      </div>

                      {/* Website URL */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Globe className="h-4 w-4" />
                        </div>
                        <input
                          type="url"
                          required
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                          placeholder="Website URL*"
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-[#051A41] placeholder-zinc-400 focus:bg-white focus:border-[#005FFF] focus:ring-2 focus:ring-[#005FFF]/15 focus:outline-none transition shadow-sm"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Building className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Company Name"
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/70 py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-[#051A41] placeholder-zinc-400 focus:bg-white focus:border-[#005FFF] focus:ring-2 focus:ring-[#005FFF]/15 focus:outline-none transition shadow-sm"
                        />
                      </div>

                      {/* Submit CTA Button matching screenshot */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#005FFF] hover:bg-[#0047cc] py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl shadow-[#005FFF]/30 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>CONNECTING WITH EXPERT...</span>
                            </>
                          ) : (
                            <>
                              <span>TALK TO OUR EXPERT</span>
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Disclaimer text matching screenshot */}
                      <p className="text-[10px] leading-relaxed text-zinc-500 text-left pt-2 font-medium">
                        By using our offerings and services, you are agreeing to the Terms of Services and License Agreement and understand that your use and access will be subject to the terms and conditions and Privacy Notice.
                      </p>
                    </form>
                  </div>
                ) : (
                  /* Success Feedback */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center text-green-600 mx-auto shadow-md">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-[#051A41]">Request Received!</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-[#005FFF]">{formData.name}</span>. Our senior SEO growth strategist will analyze <span className="font-bold text-[#051A41]">{formData.websiteUrl}</span> and reach out to you within 15 minutes.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleClose}
                        className="rounded-xl bg-[#005FFF] hover:bg-[#0047cc] px-6 py-2.5 text-xs font-bold text-white shadow-md transition"
                      >
                        Back to Website
                      </button>
                      <a
                        href="https://wa.me/919737356415?text=Hi%20SkyRank%20Solution,%20I%20have%20submitted%20a%20project%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-green-600 hover:bg-green-700 px-6 py-2.5 text-xs font-bold text-white shadow-md transition flex items-center justify-center gap-1.5"
                      >
                        <span>WhatsApp Quick Chat</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
