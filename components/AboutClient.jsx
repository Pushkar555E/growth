"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { ShieldCheck, Flame, Cpu, ArrowRight } from "lucide-react";

const workflowSteps = [
  { step: "01", title: "Free Consultation", desc: "Define business scale, client goals, and core target numbers." },
  { step: "02", title: "Speed Audit", desc: "Run Lighthouse/PageSpeed optimization check on current assets." },
  { step: "03", title: "Keyword Sheet", desc: "Competitor gap sheet detailing traffic gaps & search volume numbers." },
  { step: "04", title: "Design Mock", desc: "Custom, high fidelity visual structure created for conversion." },
  { step: "05", title: "Next.js Development", desc: "Writing clean, standard, fast custom code from scratch." },
  { step: "06", title: "Tracking Setup", desc: "Install pixels, Google Search Console, analytics, WhatsApp buttons." },
  { step: "07", title: "Launch Check", desc: "Launch live website with hosting setup, SSL configurations." },
  { step: "08", title: "SEO Indexing", desc: "Request Sitemap indexing to force Google to find pages." },
  { step: "09", title: "Meta Campaigns", desc: "Deploy paid ad campaigns with pixel tracking integrations." },
  { step: "10", title: "Split Optimization", desc: "A/B test copywriting, targeting, layouts, and CTAs weekly." },
  { step: "11", title: "Support & Maintenance", desc: "Monthly checks to maintain Google speed score and backups." },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Zero Fake Reports",
    desc: "We don't count vanity impressions. We report on conversions, inbound call loops, and cash outcomes."
  },
  {
    icon: Cpu,
    title: "Performance Engineering",
    desc: "No slow page builders. We code from scratch using lightweight React assets to load under 0.5 seconds."
  },
  {
    icon: Flame,
    title: "Laser Focus",
    desc: "We only work with local service businesses where we are 100% confident we can deliver qualified leads."
  }
];

export default function AboutClient() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen bg-bg-primary text-white">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-tight relative z-10">
          
          {/* Hero Story */}
          <div className="max-w-3xl mb-24">
            <span className="label mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
              We treat marketing like <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">performance engineering.</span>
            </h1>
            <p className="body-md text-text-secondary leading-relaxed font-light mb-6">
              Founded on a simple realization: Most agencies sell visual vanity templates and generic traffic packages, while businesses need bookings and revenue.
            </p>
            <p className="body-md text-text-secondary leading-relaxed font-light">
              We stripped away the fluff to build Growth Agency—an engineering-first marketing team focusing on custom Next.js web development, local maps SEO, and high-ROAS paid campaign configurations.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-xl bg-white/[0.01] border border-white/[0.03] mb-24 text-center">
            <div>
              <span className="text-3xl font-extrabold text-amber-400 block mb-1">50+</span>
              <span className="text-[10px] text-text-secondary uppercase tracking-wider font-light">Successful Campaigns</span>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-amber-400 block mb-1">15+</span>
              <span className="text-[10px] text-text-secondary uppercase tracking-wider font-light">Industries Serviced</span>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-amber-400 block mb-1">$500k+</span>
              <span className="text-[10px] text-text-secondary uppercase tracking-wider font-light">Ad Spend Managed</span>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-28">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-12 text-center">Our Core Pillars</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="glass p-8 border-white/[0.02] flex flex-col justify-between hover:bg-white/[0.02] hover:border-white/[0.06] transition-all duration-300">
                    <div>
                      <div className="mb-6 p-2 bg-white/[0.02] border border-white/[0.04] rounded-lg inline-block">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-3">{val.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-light">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 11 Step Workflow Section */}
          <div className="mb-28">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-12 text-center">Our 11-Step Client Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((ws, idx) => (
                <motion.div
                  key={ws.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="glass p-6 bg-bg-card/30 border border-white/[0.02] hover:border-white/[0.08] transition-all duration-300"
                >
                  <span className="text-2xl font-extrabold text-amber-400/30 mb-3 block">{ws.step}</span>
                  <h3 className="text-base font-bold text-white mb-2">{ws.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">{ws.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/[0.01] border border-white/[0.03] p-12 md:p-16 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
              Partner with execution leads.
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto mb-8 font-light leading-relaxed">
              Skip the sales reps. Speak directly with the developers and campaigns engineers who manage your search rankings and lead spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary">Book a Strategy Call</Link>
              <Link href="/case-studies" className="btn-secondary flex items-center gap-1">
                View Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
