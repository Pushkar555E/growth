"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. All monthly packages (Social Media, SEO, Ads) run on a month-to-month basis. You can pause or cancel at any time with a 14-day notice before your next billing cycle.",
  },
  {
    q: "What is included in the Free Growth Audit?",
    a: "We perform a technical speed analysis on your site, map your local keyword rankings against competitors, check your Google Map listing setup, and look for low-hanging fruit optimizations. We outline our findings in a video or brief PDF call.",
  },
  {
    q: "Is the ad budget included in the monthly fee?",
    a: "No. Ad spend on Meta or Google is billed directly by those platforms to your card. Our fee covers strategy, copy creation, audience mapping, setups, tracking installation, and weekly optimization checks.",
  },
  {
    q: "How soon do we see results?",
    a: "Website custom redesigns usually launch within 14-20 days. Meta/Google ads can yield leads within the first week of setup. Organic SEO compound rankings usually show traction in 60-90 days.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      className="py-24 bg-[#0b0f19]" 
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="container-tight max-w-2xl">
        <div className="text-center mb-16">
          <span className="label mb-4 block">Help Center</span>
          <h2 id="faq-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="glass border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.02] overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-btn-${idx}`}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-semibold text-white text-sm md:text-base">
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0">
                    <svg
                      className={`w-4 h-4 text-amber-400 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-secondary text-xs md:text-sm leading-relaxed border-t border-white/[0.02] pt-4 font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
