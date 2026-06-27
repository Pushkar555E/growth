"use client";

import React, { use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { ArrowRight, CheckCircle2, TrendingUp, HelpCircle } from "lucide-react";

const caseStudyDetails = {
  "local-restaurant": {
    title: "How a Local Restaurant Spiked Bookings by 320% and Scaled Organic Reach to +92k Users",
    sub: "Social Media & SEO Strategy",
    snapshot: {
      niche: "Hospitality & Dining",
      scope: "Technical SEO, Local GBP, Reel Strategy",
      duration: "90 Days"
    },
    challenge: "Struggling with declining foot traffic and relying purely on low-margin third-party food delivery apps, losing 30% of order value to fees.",
    process: [
      { step: "01", title: "Google Business Profile Calibration", desc: "Optimized geographic radius indexing and structured reservation links inside maps pack." },
      { step: "02", title: "Instagram Hook Strategy", desc: "Scripted and edited visual cooking reels targeting local foodies, generating viral local momentum." },
      { step: "03", title: "Direct Lead Form Funnels", desc: "Created lightweight mobile forms to capture birthday reservation inquiries directly, cutting middleman fees." }
    ],
    results: [
      { metric: "+320%", label: "Increase in Reservations" },
      { metric: "+92,000", label: "Instagram Reach Generated" },
      { metric: "3.4x", label: "Direct Revenue Growth" }
    ],
    testimonial: {
      quote: "The team rebuilt our entire customer acquisition funnel. We went from empty tables on Tuesdays to booking out days in advance.",
      author: "Chef Dev",
      role: "Owner & Head Chef"
    }
  },
  "diagnostic-clinic": {
    title: "Dominating Local Health Search: How We Positioned a Clinic as #1 in Google Maps Pack",
    sub: "Technical SEO & GBP Calibration",
    snapshot: {
      niche: "Healthcare & Diagnostics",
      scope: "Technical Indexing, Maps Optimizations, Reviews Pipeline",
      duration: "120 Days"
    },
    challenge: "Stuck on page 2 of local search results for high-value screening terms, losing client bookings to corporate clinics.",
    process: [
      { step: "01", title: "Technical Crawling Cleanup", desc: "Repaired schema markup, sitemaps, and speed bottlenecks holding down keyword authority." },
      { step: "02", title: "Maps Pack Optimization", desc: "Refactored business categorization, local citation directories, and maps schema inputs." },
      { step: "03", title: "Review Pipeline Automation", desc: "Integrated post-appointment SMS triggers to ask for patient reviews, boosting positive authority." }
    ],
    results: [
      { metric: "+210%", label: "Spike in Organic Calls" },
      { metric: "#1 Spot", label: "Secured Google Maps Rank" },
      { metric: "+180", label: "Monthly Patient Bookings" }
    ],
    testimonial: {
      quote: "Our inbound phone calls from Google Maps quadrupled. We no longer rely on expensive paid ads to fill our calendar.",
      author: "Dr. R. Sharma",
      role: "Managing Director"
    }
  },
  "premium-gym": {
    title: "Scaling Gym Member Acquisition: Cutting Cost Per Lead by 45% with High-ROAS Funnels",
    sub: "Meta Ads & Landing Page Calibration",
    snapshot: {
      niche: "Fitness & Athletics",
      scope: "Meta CAPI, High-Conversion Next.js Landing Pages",
      duration: "60 Days"
    },
    challenge: "Burning budget on boosted posts with high cost per lead and poor lead quality (no-shows).",
    process: [
      { step: "01", title: "Conversion API Alignment", desc: "Connected Meta Pixel to backend booking actions for accurate client conversion data." },
      { step: "02", title: "Lightweight Landing Pages", desc: "Rebuilt lead forms as raw React pages loading instantly, increasing conversion metrics." },
      { step: "03", title: "Direct Hook Ad Copies", desc: "Formulated comparison creatives and hooks mapping directly to fitness results, filtering low-intent sign-ups." }
    ],
    results: [
      { metric: "-45%", label: "Lead Cost Slashed" },
      { metric: "+140", label: "Active Members Generated" },
      { metric: "5.2x", label: "Return on Ad Spend" }
    ],
    testimonial: {
      quote: "Growth Agency fixed our pixel setup and landing page. Leads are pre-qualified and show up ready to train.",
      author: "Sarah K.",
      role: "General Manager"
    }
  }
};

export default function CaseStudySubPage({ params }) {
  const { slug } = use(params);
  const study = caseStudyDetails[slug];

  if (!study) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-bg-primary text-slate-900 pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/#case-studies" className="btn-primary">View All Work</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden bg-bg-primary text-slate-900">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-tight relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <Link href="/#case-studies" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 mb-6 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back to Proof
            </Link>
            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block mb-4">
              {study.sub}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {study.title}
            </h1>
          </div>

          {/* Snapshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-white/[0.01] border border-white/[0.03] mb-16">
            <div>
              <span className="text-[10px] text-text-tertiary uppercase tracking-wider block mb-1">Niche</span>
              <span className="text-xs text-slate-900 font-medium">{study.snapshot.niche}</span>
            </div>
            <div>
              <span className="text-[10px] text-text-tertiary uppercase tracking-wider block mb-1">Scope</span>
              <span className="text-xs text-slate-900 font-medium">{study.snapshot.scope}</span>
            </div>
            <div>
              <span className="text-[10px] text-text-tertiary uppercase tracking-wider block mb-1">Duration</span>
              <span className="text-xs text-slate-900 font-medium">{study.snapshot.duration}</span>
            </div>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {study.results.map((res, idx) => (
              <div key={idx} className="glass p-8 border-white/[0.02] flex flex-col justify-center text-center">
                <span className="text-4xl md:text-5xl font-extrabold text-amber-400 block mb-2">{res.metric}</span>
                <span className="text-xs text-text-secondary font-light">{res.label}</span>
              </div>
            ))}
          </div>

          {/* Story Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-b border-white/[0.04] pb-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6">The Challenge</h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6">Our Approach</h2>
              <div className="space-y-6">
                {study.process.map((p) => (
                  <div key={p.step} className="flex gap-4">
                    <span className="text-lg font-bold text-amber-400/40 font-mono shrink-0">{p.step}</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
                      <p className="text-xs text-text-secondary font-light leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <blockquote className="text-lg md:text-xl italic text-slate-900 font-light leading-relaxed mb-6">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">{study.testimonial.author}</span>
              <span className="text-text-secondary font-light">{study.testimonial.role}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/[0.01] border border-white/[0.03] p-12 md:p-16 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 animate-pulse">
              Ready to replicate these results?
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto mb-8 font-light leading-relaxed">
              Book a strategy session with our execution leads to map a growth pathway for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary">Book a Free Strategy Call</Link>
              <Link href="/services" className="btn-secondary">View Core Services</Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
