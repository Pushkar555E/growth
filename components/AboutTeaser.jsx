"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section 
      className="py-24 bg-bg-secondary/20 relative overflow-hidden" 
      id="about-teaser"
      aria-labelledby="about-teaser-title"
    >
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blob bg-blob-purple opacity-5 pointer-events-none" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border p-[1px]"
          >
            <div className="glass p-8 bg-bg-card/60 flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Our Core Philosophy</span>
                            <h3 className="text-xl font-bold text-slate-900">We treat marketing like engineering.</h3>
              <p className="body-sm text-text-secondary leading-relaxed font-light">
                Traditional agencies focus on vanity metrics like "impressions" and "engagement". We focus on technical speed scores, search map positions, conversion targets, and direct leads. If it doesn't bring clients, we don't build it.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-white/[0.01] border border-white/[0.02] rounded-lg">
                  <div className="text-xs font-bold text-slate-900 mb-1">Technical First</div>
                  <div className="text-[10px] text-text-tertiary">Clean React code only.</div>
                </div>
                <div className="p-4 bg-white/[0.01] border border-white/[0.02] rounded-lg">
                  <div className="text-xs font-bold text-slate-900 mb-1">Direct Metric</div>
                  <div className="text-[10px] text-text-tertiary">Direct lead phone calls.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="label block">About The Agency</span>
                        <h2 id="about-teaser-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              We Build Assets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-500">That Capture Traffic</span>
            </h2>
            <p className="body-md font-light text-text-secondary leading-relaxed">
              We are a team of senior developers and copywriters who custom build responsive search engine blueprints and ad pipelines. We don't use WordPress, Wix, or standard templates. Every asset is built for high speed and direct conversion.
            </p>
            <div className="pt-4">
              <Link 
                href="/about" 
                id="btn-about-teaser-more" 
                className="btn-secondary text-xs uppercase tracking-wider font-semibold"
              >
                Learn Our Workflow
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
