"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-[#0a0f24]/50 backdrop-blur-md overflow-hidden transition"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-5 text-left text-white font-medium hover:bg-white/5 transition focus:outline-none"
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="rounded-full bg-white/10 p-1 text-zinc-300"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-white/5 bg-[#050816]/30">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
