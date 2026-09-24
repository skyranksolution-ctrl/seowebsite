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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SkyRank Solution",
    "description": "Get in touch with our team of SEO experts. Submit our contact form or chat with us on WhatsApp."
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (err) {
      setError("Message send nahi hua. Dobara try karein.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <Navbar />

      <main className="flex-1 bg-[#EBEAFA] pt-32 pb-24 overflow-x-hidden relative text-[#051A41]">
        {/* Ambient Glows */}
        <div className="glow-sphere bg-[#005FFF] w-[400px] h-[400px] -top-20 -left-20 opacity-15"></div>
        <div className="glow-sphere bg-[#FF5800] w-[300px] h-[300px] bottom-20 right-10 opacity-15"></div>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#005FFF]/20 bg-[#005FFF]/10 px-3.5 py-1 text-xs font-extrabold text-[#005FFF]">
              Get in Touch
            </span>
            <h1 className="text-4xl font-extrabold text-[#051A41] sm:text-5xl">Connect With Our Team</h1>
            <p className="text-zinc-700 text-sm font-medium leading-relaxed max-w-xl mx-auto">
              Have questions about pricing, API access, or want to schedule a direct website crawling consult? Send us a message.
            </p>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Office Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#051A41]">Office Details</h3>
                <div className="space-y-4 text-xs text-zinc-700 font-medium">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#005FFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#051A41] block text-sm">SkyRank Solution HQ</span>
                      <span>GALAXY SIGNATURE, 26, Science City Rd, Sola, Ahmedabad, Gujarat 380060</span>
                      <span className="block">UAE Office: GALAXY SIGNATURE, 26, Science City Rd, Sola, Ahmedabad, Gujarat 380060</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#005FFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#051A41] block text-sm">Phone Support Line</span>
                      <span>+91 97373 56415 / +91 94086 26950</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#005FFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#051A41] block text-sm">Work Email</span>
                      <span>skyranksolution@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#005FFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#051A41] block text-sm">Support Hours</span>
                      <span>Mon - Sat, 9:00 AM - 7:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Channels */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#051A41]">Instant Chat Channels</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919737356415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-emerald-600/30 bg-emerald-50 p-4 flex items-center gap-3 hover:bg-emerald-100 transition cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="h-6 w-6 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-xs font-extrabold text-[#051A41] block">WhatsApp Chat</span>
                      <span className="text-[10px] font-bold text-emerald-700">Response in &lt; 15 mins</span>
                    </div>
                  </a>

                  {/* Live Chat Toggle */}
                  <button
                    onClick={() => setChatActive(true)}
                    className="flex-1 text-left rounded-xl border border-[#005FFF]/30 bg-[#005FFF]/10 p-4 flex items-center gap-3 hover:bg-[#005FFF]/20 transition shadow-sm"
                  >
                    <MessageCircle className="h-6 w-6 text-[#005FFF] shrink-0" />
                    <div>
                      <span className="text-xs font-extrabold text-[#051A41] block">Start Live Chat</span>
                      <span className="text-[10px] font-bold text-[#005FFF]">Active Support Online</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div className="rounded-2xl border border-[#051A41]/10 bg-white shadow-md overflow-hidden relative h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1843538556573!2d77.03985170081808!3d28.413693632418752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb664a016f803%3A0x5d40b299eaf0a259!2sE+SEO+Solutions+Private+Limited!5e0!3m2!1sen!2sin!4v1555868313388!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7">
              <GlowingCard glowColor="rgba(0, 95, 255, 0.15)" className="p-8 border-[#051A41]/10 bg-white shadow-xl">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="contact-inputs" className="space-y-6">
                      <div className="mb-2">
                        <h3 className="text-2xl font-extrabold text-[#051A41]">Send A Message</h3>
                        <p className="text-zinc-600 text-xs font-medium mt-1">Our sales and technical support teams reply within 4 work hours.</p>
                      </div>

                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-name" className="block text-xs font-extrabold text-[#051A41] uppercase tracking-wider mb-1.5">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="contact-name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Enter your name"
                              className="w-full rounded-lg border border-[#051A41]/20 bg-[#EBEAFA]/40 py-2.5 px-4 text-xs text-[#051A41] font-medium focus:border-[#005FFF] focus:bg-white focus:outline-none transition"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="block text-xs font-extrabold text-[#051A41] uppercase tracking-wider mb-1.5">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="contact-email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="Enter your email address"
                              className="w-full rounded-lg border border-[#051A41]/20 bg-[#EBEAFA]/40 py-2.5 px-4 text-xs text-[#051A41] font-medium focus:border-[#005FFF] focus:bg-white focus:outline-none transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contact-subject" className="block text-xs font-extrabold text-[#051A41] uppercase tracking-wider mb-1.5">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="contact-subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="SEO Partnership / SaaS Demo"
                            className="w-full rounded-lg border border-[#051A41]/20 bg-[#EBEAFA]/40 py-2.5 px-4 text-xs text-[#051A41] font-medium focus:border-[#005FFF] focus:bg-white focus:outline-none transition"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="block text-xs font-extrabold text-[#051A41] uppercase tracking-wider mb-1.5">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Write your details or site optimization targets here..."
                            className="w-full rounded-lg border border-[#051A41]/20 bg-[#EBEAFA]/40 py-2.5 px-4 text-xs text-[#051A41] font-medium focus:border-[#005FFF] focus:bg-white focus:outline-none transition resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FF5800] hover:bg-[#e04d00] py-3.5 text-xs font-extrabold text-white shadow-md transition group disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <span>{sending ? "Sending..." : "Send Message"}</span>
                          <Send className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                        </button>

                        {error && (
                          <p className="text-red-600 text-xs text-center font-bold">{error}</p>
                        )}
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-3 text-[#051A41]"
                    >
                      <CheckCircle className="h-10 w-10 text-emerald-600" />
                      <span className="font-extrabold text-[#051A41] text-base">Message Sent Successfully!</span>
                      <p className="text-xs text-zinc-600 max-w-xs leading-relaxed font-medium">
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
          <div className="fixed bottom-4 right-4 z-50 w-80 rounded-2xl border border-[#005FFF]/20 bg-white shadow-2xl overflow-hidden text-[#051A41]">
            <div className="bg-[#005FFF] p-3.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-bold">SkyRank Live Support</span>
              </div>
              <button onClick={() => setChatActive(false)} className="text-white hover:opacity-80">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-48 p-4 overflow-y-auto space-y-2 text-xs font-medium text-zinc-700 bg-zinc-50">
              <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-3 max-w-[90%] text-[#051A41]">
                Hello! Let us know if you have questions about custom plans or SEO audits. How can we assist you today?
              </div>
            </div>
            <div className="p-3 border-t border-zinc-200 bg-white">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full rounded-xl border border-zinc-300 bg-zinc-50 p-2 text-xs text-[#051A41] focus:border-[#005FFF] focus:bg-white focus:outline-none font-medium"
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
