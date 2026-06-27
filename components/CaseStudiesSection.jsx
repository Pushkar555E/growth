"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Search, Zap } from "lucide-react";

const caseStudies = [
  {
    id: "case-restaurant",
    slug: "local-restaurant",
    title: "Local Restaurant",
    sub: "Social Media & SEO",
    icon: TrendingUp,
    metric1: { name: "Weekly Bookings", value: "+320%", pct: 85 },
    metric2: { name: "Instagram Reach", value: "+92,000", pct: 92 },
    metric3: { name: "Revenue Growth", value: "3.4x", pct: 75 },
    color: "from-amber-400 to-amber-600",
  },
  {
    id: "case-clinic",
    slug: "diagnostic-clinic",
    title: "Diagnostic Clinic",
    sub: "Technical SEO & GBP",
    icon: Search,
    metric1: { name: "Organic Search Calls", value: "+210%", pct: 68 },
    metric2: { name: "Google Maps Rank", value: "#1 Spot", pct: 95 },
    metric3: { name: "Monthly Bookings", value: "+180", pct: 80 },
    color: "from-white to-amber-400",
  },
  {
    id: "case-gym",
    slug: "premium-gym",
    title: "Premium Gym",
    sub: "Meta Ads & Funnels",
    icon: Zap,
    metric1: { name: "Lead Cost Cut", value: "-45%", pct: 90 },
    metric2: { name: "Monthly Sign-ups", value: "+140 Users", pct: 78 },
    metric3: { name: "Return on Ad Spend", value: "5.2x ROAS", pct: 88 },
    color: "from-amber-500 to-amber-700",
  },
];

export default function CaseStudiesSection() {
  return (
    <section 
      className="py-24 bg-bg-primary text-white relative overflow-hidden" 
      id="case-studies"
      aria-labelledby="case-studies-title"
    >
      <div className="container-tight relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="label mb-4 block">Case Studies</span>
                    <h2 id="case-studies-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Real Proof. <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-500">Real Results.</span>
          </h2>
          <p className="body-md mt-4 max-w-xl mx-auto font-light text-text-secondary">
            We don't buy fake reviews. Here are the exact growth metrics we've delivered for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                id={study.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass p-8 hover:bg-white/[0.02] border-white/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-lg inline-block">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase">
                      {study.sub}
                    </span>
                  </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-8">{study.title}</h3>

                  {/* Horizontal Bar Chart 1 */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1.5 font-medium">
                      <span className="text-text-secondary">{study.metric1.name}</span>
                      <span className="text-slate-900 font-bold">{study.metric1.value}</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${study.metric1.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${study.color}`}
                      />
                    </div>
                  </div>

                  {/* Horizontal Bar Chart 2 */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1.5 font-medium">
                      <span className="text-text-secondary">{study.metric2.name}</span>
                      <span className="text-slate-900 font-bold">{study.metric2.value}</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${study.metric2.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${study.color}`}
                      />
                    </div>
                  </div>

                  {/* Horizontal Bar Chart 3 */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-1.5 font-medium">
                      <span className="text-text-secondary">{study.metric3.name}</span>
                      <span className="text-slate-900 font-bold">{study.metric3.value}</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${study.metric3.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.25, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${study.color}`}
                      />
                    </div>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    id={`case-btn-${study.slug}`}
                    className="mt-8 text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/btn"
                  >
                    Read Case Study
                    <svg
                      className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
