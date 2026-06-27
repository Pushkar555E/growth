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
    <section className="py-24 bg-bg-primary" id="faq">
      <div className="container-tight max-w-3xl">
        <div className="text-center mb-16">
          <span className="label mb-4 block">Help Center</span>
          <h2 className="heading-lg">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="glass border border-border-default overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggle(idx)}
                >
                  <span className="font-semibold text-text-primary text-base md:text-lg">
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0">
                    <svg
                      className={`w-5 h-5 text-accent-300 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-secondary text-sm md:text-base leading-relaxed border-t border-border-default/50 pt-4">
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
