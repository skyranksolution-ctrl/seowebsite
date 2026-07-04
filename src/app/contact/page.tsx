"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowingCard from "@/components/GlowingCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Clock, X } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [chatActive, setChatActive] = useState(false);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SkyRank Solution",
    "description": "Get in touch with our team of SEO experts. Submit our contact form or chat with us on WhatsApp."
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(formData.subject || "SkyRank Solution Inquiry");
      const body = encodeURIComponent(
        `Hi SkyRank Solution,\n\nYou have received a new message from your website contact form:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      
      // Redirect to pre-filled mail client
      window.location.href = `mailto:skyranksolution@gmail.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#050816] pt-32 pb-24 overflow-x-hidden relative">
        {/* Ambient Glows */}
        <div className="glow-sphere bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-20"></div>
        <div className="glow-sphere bg-secondary w-[300px] h-[300px] bottom-20 right-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              Get in Touch
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Connect With Our Team</h1>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mx-auto">
              Have questions about pricing, API access, or want to schedule a direct website crawling consult? Send us a message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Office Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Office Details</h3>
                <div className="space-y-4 text-xs text-zinc-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">SkyRank HQ</span>
                      <span>Indiranagar, Double Road</span>
                      <span className="block">Bengaluru, KA 560038</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Phone Line</span>
                      <span>+91 97373 56415 / +91 94086 26950</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Work Email</span>
                      <span>skyranksolution@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Support Hours</span>
                      <span>Mon - Fri, 9:00 AM - 6:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Channels */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Instant Chat Channels</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919737356415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 flex items-center gap-3 hover:bg-emerald-500/10 transition cursor-pointer"
                  >
                    <MessageCircle className="h-6 w-6 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">WhatsApp Chat</span>
                      <span className="text-[10px] text-zinc-400">Response in &lt; 15 mins</span>
                    </div>
                  </a>

                  {/* Live Chat Toggle */}
                  <button
                    onClick={() => setChatActive(true)}
                    className="flex-1 text-left rounded-xl border border-primary/30 bg-primary/5 p-4 flex items-center gap-3 hover:bg-primary/10 transition"
                  >
                    <MessageCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">Start Live Chat</span>
                      <span className="text-[10px] text-zinc-400">Active Support Online</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Custom Dark Vector Map Mockup */}
              <div className="rounded-2xl border border-white/10 bg-[#0a0f24] overflow-hidden relative h-52">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
                
                {/* Simulated Street Lines SVG */}
                <svg className="w-full h-full opacity-20 absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="10" y1="0" x2="10" y2="100" stroke="#ffffff" strokeWidth="1" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="85" y1="0" x2="85" y2="100" stroke="#ffffff" strokeWidth="1" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#ffffff" strokeWidth="1" />
                  <line x1="0" y1="70" x2="100" y2="70" stroke="#ffffff" strokeWidth="2" />
                </svg>

                {/* Pulsing Pin Marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary opacity-70 animate-ping"></div>
                    <div className="h-4 w-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,194,255,1)]"></div>
                  </div>
                  <span className="rounded bg-[#050816] border border-secondary/50 px-2 py-0.5 text-[9px] font-bold text-white uppercase mt-1 tracking-wider">
                    SkyRank HQ
                  </span>
                </div>

                <div className="absolute bottom-2 left-3 text-[9px] font-mono text-zinc-500">
                  LAT: 12.9716° N | LON: 77.5946° E
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7">
              <GlowingCard glowColor="rgba(0, 102, 255, 0.15)" className="p-8 border-white/5 bg-[#0a0f26]/50">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="contact-inputs" className="space-y-6">
                      <div className="mb-2">
                        <h3 className="text-lg font-bold text-white">Send A Message</h3>
                        <p className="text-zinc-400 text-xs mt-1">Our sales and technical support teams reply within 4 work hours.</p>
                      </div>

                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-name" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="contact-name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Enter your name"
                              className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-xs text-white focus:border-primary focus:outline-none transition"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="contact-email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="Enter your email address"
                              className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-xs text-white focus:border-primary focus:outline-none transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contact-subject" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="contact-subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="SEO Partnership / SaaS Demo"
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-xs text-white focus:border-primary focus:outline-none transition"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Write your details or site optimization targets here..."
                            className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 px-4 text-xs text-white focus:border-primary focus:outline-none transition resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary py-3 text-xs font-semibold text-white shadow-md hover:bg-opacity-95 transition group"
                        >
                          <span>Send Message</span>
                          <Send className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-3"
                    >
                      <CheckCircle className="h-10 w-10 text-secondary" />
                      <span className="font-bold text-white text-base">Message Sent Successfully!</span>
                      <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                        Thank you for contacting us, {formData.name}. We registered your request and will email a direct response shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlowingCard>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Mock Live Chat drawer */}
      <AnimatePresence>
        {chatActive && (
          <div className="fixed bottom-4 right-4 z-50 w-72 rounded-2xl border border-white/10 bg-[#0a0f24] shadow-2xl overflow-hidden">
            <div className="bg-primary p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-bold text-white">SkyRank Live Support</span>
              </div>
              <button onClick={() => setChatActive(false)} className="text-white hover:opacity-80">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-40 p-4 overflow-y-auto space-y-2 text-[11px] text-zinc-300">
              <div className="bg-white/5 rounded p-2 max-w-[85%]">
                Hello! Let us know if you have questions about rank crawlers or pricing. How can I help you today?
              </div>
            </div>
            <div className="p-2 border-t border-white/5 bg-white/5">
              <input
                type="text"
                placeholder="Type messages..."
                className="w-full rounded border border-white/10 bg-[#050816] p-1.5 text-xs text-white focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
