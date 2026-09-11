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
            className={`rounded-xl border transition-all ${
              isOpen
                ? "border-[#005FFF]/40 bg-white shadow-md"
                : "border-[#051A41]/10 bg-white/80 hover:bg-white"
            } overflow-hidden`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-5 text-left text-[#051A41] font-bold text-base hover:text-[#005FFF] transition focus:outline-none"
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`rounded-full p-1.5 transition ${
                  isOpen ? "bg-[#005FFF] text-white" : "bg-[#005FFF]/10 text-[#005FFF]"
                }`}
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
                  <div className="p-5 pt-2 text-sm text-zinc-600 leading-relaxed border-t border-[#051A41]/5 bg-[#EBEAFA]/30">
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

