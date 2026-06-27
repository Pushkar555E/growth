"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "What digital growth services do you offer?",
    a: "We offer outcome-focused Website Development (custom Next.js), Local Map Pack & Google Search SEO, Paid Social & Google Search PPC, and organic Social Media Management templates & storyboard hooks campaigns."
  },
  {
    q: "What is your typical project size or monthly budget?",
    a: "Our custom Next.js builds start with one-time packages at ₹3,999 (Landing Pages) and ₹9,999 (Full Business Sites). For recurring growth search & ad campaigns, we recommend starting with a monthly budget of at least ₹15,000 for ad spend and ₹2,999 for organic SEO campaigns."
  },
  {
    q: "How long does a technical project take to deliver?",
    a: "Custom Web assets are typical completed, audited for speed, and deployed within 3 to 5 weeks. SEO ranks begin compounding in 30 to 60 days, and PPC campaign ads go live capturing leads within 48 hours of asset approval."
  },
  {
    q: "What industries do you work with?",
    a: "We scale local service business providers, medical diagnostics clinics, wellness facilities & premium gyms, premium dining restaurants, real estate, and direct local client consultancies."
  },
  {
    q: "Do you work locally or remotely?",
    a: "We work remotely with businesses worldwide, running technical audit calls, content coordination, and ad strategy alignments via virtual meetings."
  },
  {
    q: "How soon do you reply to inquiries and reviews?",
    a: "We review and send customized audit blueprint roadmaps in under 12 hours. Existing client portal support requests are responded to in under 4 hours."
  }
];

function FAQRow({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.04] py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-sm md:text-base font-bold text-slate-900 py-2 focus:outline-none"
      >
        <span className="pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-amber-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-text-secondary font-light pt-3 pb-4 leading-relaxed max-w-3xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <MouseGlow />

            <main className="pt-32 pb-24 relative overflow-hidden min-h-screen bg-bg-primary">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-tight relative z-10">
          
          <div className="text-center mb-16">
            <span className="label mb-4 block">Help Center</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-500">Questions Answered</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              Everything you need to know about our outcomes-driven workflow, pricing models, and deliverables.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-24">
            <div className="glass p-8 bg-bg-card/30 border border-white/[0.02]">
              {faqs.map((faq, idx) => (
                <FAQRow key={idx} faq={faq} />
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="text-center bg-white/[0.01] border border-white/[0.03] p-12 md:p-16 rounded-2xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
              Still have questions?
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto mb-8 font-light leading-relaxed">
              We are transparent about our processes and outcomes. Get in touch with our execution leads for direct answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary">Book a Strategy Call</Link>
              <Link href="/services" className="btn-secondary flex items-center gap-1">
                Explore Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
