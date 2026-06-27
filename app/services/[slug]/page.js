"use client";

import React, { use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { Monitor, Search, Smartphone, Zap, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceDetails = {
  "web-development": {
    title: "Grow qualified leads with custom web dev",
    name: "Website Development",
    icon: Monitor,
    problem: "Vague templates, slow load times, and poor mobile responsiveness cause local businesses to lose 50%+ of their site visitors before they even read the offer.",
    outcome: "A speed-optimized, Next.js business asset built for search engines and high conversion rate retention.",
    process: [
      { step: "01", title: "Brand Strategy Blueprint", desc: "We map your service offering to direct user actions, establishing a structure built for bookings." },
      { step: "02", title: "Wireframe & UX Audit", desc: "Drafting high-intent layouts with clear focal points, ensuring your CTAs are impossible to miss." },
      { step: "03", title: "Custom Development", desc: "Coding a clean, lightweight Next.js asset designed for instantaneous loads and mobile fidelity." },
      { step: "04", title: "Pixel & Tech Integration", desc: "Injecting conversion APIs, analytics trackers, and lead management sinks with zero latency." }
    ],
    deliverables: [
      "Custom Next.js & Tailwind CSS Setup",
      "Google PageSpeed Score 90+ Guarantee",
      "Responsive Layout Optimized for Mobile",
      "Seamless Calendly & CRM Sinks"
    ],
    proof: {
      metric: "45% Acquisition Cut",
      details: "Rebuilt the digital pipeline for a Premium Gym, cutting lead cost by 45% and generating 140+ monthly qualified sign-ups within 60 days of rebuild."
    },
    faqs: [
      { q: "How long does a website rebuild take?", a: "Standard custom sites are typically conceptualized, developed, and deployed within 3 to 5 weeks." },
      { q: "Will I lose my existing search ranking?", a: "No. We implement a strict 301 redirect map and retain URL architecture to preserve and elevate your ranking authority." }
    ]
  },
  "seo": {
    title: "Grow qualified leads with SEO",
    name: "Website SEO",
    icon: Search,
    problem: "If your business isn't in the top 3 of Google Maps pack or search query listings, your local competitors are getting 90% of the active market buyers.",
    outcome: "A top 3 Google ranking and Local Map Pack authority setup to make your agency the default booking choice.",
    process: [
      { step: "01", title: "Technical Rank Audit", desc: "Analyzing crawling bugs, indexing errors, and code structures that prevent search indexing." },
      { step: "02", title: "Competitor Keyword Mapping", desc: "Finding exact high-intent search terms local buyers use, identifying keywords your rivals miss." },
      { step: "03", title: "Schema & On-Page Calibration", desc: "Injecting structured local markup and building readable keyword-dense search listings." },
      { step: "04", title: "Authority Link Injections", desc: "Acquiring localized backlinks and citation networks to build irreversible domain credibility." }
    ],
    deliverables: [
      "Google Business Profile Calibration",
      "High-intent Local Keyword Integrations",
      "Local Schema Markup & Metadata Setup",
      "Clean Authority Backlink Injections"
    ],
    proof: {
      metric: "+320% Weekly Bookings",
      details: "Optimized local pack placement and technical SEO maps for a Diagnostic Clinic, spiking weekly call volume by 320% in under 90 days."
    },
    faqs: [
      { q: "When do I start seeing SEO ranks?", a: "SEO is a compounding asset. Initial local map pack movements happen in 30 days, while solid organic keyword jumps take 60 to 90 days." },
      { q: "Do we get reports?", a: "Yes. You receive clean, direct keyword position metrics and inbound call logs monthly." }
    ]
  },
  "social-media": {
    title: "Build a stronger brand with social media marketing",
    name: "Social Media Management",
    icon: Smartphone,
    problem: "Inconsistent posting, low-quality templates, and boring copy make brands look small, losing authority with prospective customers.",
    outcome: "An active, authoritative digital presence backed by professional reel scripting, editing, and custom template designs.",
    process: [
      { step: "01", title: "Social Brand Identity Design", desc: "Defining your social visual assets, custom color schemes, and layout templates." },
      { step: "02", title: "Scripting & Hook Blueprinting", desc: "Writing engaging reels and video guidelines optimized to hook attention in the first 2 seconds." },
      { step: "03", title: "Video Editing & Styling", desc: "Processing raw clips into clean reels with overlays, captions, and conversion overlays." },
      { step: "04", title: "Audience Engagement Scheduling", desc: "Scheduling posts at peak target periods and interacting with local accounts to grow organic reach." }
    ],
    deliverables: [
      "Monthly Content Strategy & Calendar",
      "Engaging Reel Scripting & Pro Editing",
      "Premium Custom Graphics Templates",
      "Active Daily Community Posting"
    ],
    proof: {
      metric: "+92k Brand Reach",
      details: "Scaled an active organic brand presence for a Premium Restaurant, yielding +92k monthly reach and a 3.4x revenue spike."
    },
    faqs: [
      { q: "Do you shoot the videos?", a: "We provide complete storyboard layouts and hooks. You record on your phone, and we handle the editing, copy, and posting." },
      { q: "What platforms do you manage?", a: "Instagram, YouTube Shorts, Facebook, and LinkedIn." }
    ]
  },
  "paid-advertising": {
    title: "Turn ad spend into sales with PPC",
    name: "Paid Advertising",
    icon: Zap,
    problem: "Throwing money at generic boosted posts without custom audiences, conversion API configurations, or high-intent split tests leads to wasted budgets.",
    outcome: "A high ROAS lead engine driven by clean Meta/Google Pixel tracking and laser-focused target ads.",
    process: [
      { step: "01", title: "Audience Demographic Mapping", desc: "Carving precise buyer profiles based on local demographics, behaviors, and lookalikes." },
      { step: "02", title: "Copywriting & Layout Design", desc: "Structuring benefit-driven ad copies and creatives designed to bypass banner blindness." },
      { step: "03", title: "Campaign Launch & Tracking", desc: "Injecting pixel conversions and launching campaigns with automated testing sets." },
      { step: "04", title: "Bid Scaling & Split Tests", desc: "Adjusting budgets toward top-performing metrics, scaling campaigns without inflating lead cost." }
    ],
    deliverables: [
      "Meta Pixel & Conversion API Setup",
      "Laser Target Audience Definitions",
      "Copywriting & Creative Ad Mockups",
      "Weekly Bid & Split Test Calibrations"
    ],
    proof: {
      metric: "5.2x Return on Ad Spend",
      details: "Set up ad parameters for a local fitness business, yielding a clean 5.2x ROAS and halving customer acquisition cost."
    },
    faqs: [
      { q: "What monthly budget do I need?", a: "We recommend starting with at least ₹15,000 per month in ad spend to gather meaningful test data." },
      { q: "How fast do ads get results?", a: "Ad campaigns go live and start capturing leads within 48 hours of asset approval." }
    ]
  }
};

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/[0.04] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-sm font-semibold text-white py-2 focus:outline-none"
      >
        <span>{faq.q}</span>
        <ChevronDown className={`w-4 h-4 text-amber-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
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
            <p className="text-xs text-text-secondary font-light pt-2 pb-4 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceSubPage({ params }) {
  const { slug } = use(params);
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-bg-primary text-white pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <Link href="/services" className="btn-primary">View All Services</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden bg-bg-primary text-white">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-tight relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <Link href="/services" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 mb-6 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back to Services
            </Link>
            <div className="inline-flex p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-6">
              <Icon className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="body-md text-text-secondary leading-relaxed font-light">
              We focus strictly on business outcomes. Here is how we resolve your growth bottleneck.
            </p>
          </div>

          {/* Problem & Outcome */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 border-b border-white/[0.04] pb-16">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400">The Bottleneck</h2>
              <p className="text-sm md:text-base text-text-secondary font-light leading-relaxed">
                {service.problem}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400">The Outcome</h2>
              <p className="text-sm md:text-base text-text-secondary font-light leading-relaxed">
                {service.outcome}
              </p>
            </div>
          </div>

          {/* Deliverables & Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-8">What You Get</h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-text-secondary font-light">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 mr-3.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-8">Our Process</h2>
              <div className="space-y-8">
                {service.process.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="text-lg font-bold text-amber-400/40 font-mono shrink-0">{step.step}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-xs text-text-secondary font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proof Strip */}
          <div className="glass p-8 bg-bg-card/50 border border-white/[0.03] rounded-xl mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">Proof of Result</span>
              <h3 className="text-xl font-bold text-white">{service.proof.metric}</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed max-w-xl">{service.proof.details}</p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap">Book a Strategy Call</Link>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mb-24">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-8">FAQs</h2>
            <div className="space-y-2">
              {service.faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/[0.01] border border-white/[0.03] p-12 md:p-16 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
              Ready to claim your strategy?
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto mb-8 font-light leading-relaxed">
              We only work with businesses where we are 100% confident we can deliver a measurable increase in leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary">Book a Strategy Call</Link>
              <Link href="/pricing" className="btn-secondary">View Pricing Packages</Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
