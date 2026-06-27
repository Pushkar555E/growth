"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Local Restaurant",
    sub: "Social Media & SEO",
    metric1: { name: "Weekly Bookings", value: "+320%", pct: 85 },
    metric2: { name: "Instagram Reach", value: "+92,000", pct: 92 },
    metric3: { name: "Revenue Growth", value: "3.4x", pct: 75 },
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Diagnostic Clinic",
    sub: "Technical SEO & GBP",
    metric1: { name: "Organic Search Calls", value: "+210%", pct: 68 },
    metric2: { name: "Google Maps Rank", value: "#1 Spot", pct: 95 },
    metric3: { name: "Monthly Bookings", value: "+180", pct: 80 },
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Premium Gym",
    sub: "Meta Ads & Funnels",
    metric1: { name: "Lead Cost Cut", value: "-45%", pct: 90 },
    metric2: { name: "Monthly Sign-ups", value: "+140 Users", pct: 78 },
    metric3: { name: "Return on Ad Spend", value: "5.2x ROAS", pct: 88 },
    color: "from-cyan-500 to-emerald-500",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="case-studies">
      <div className="container-tight relative z-10">
        <div className="text-center mb-20">
          <span className="label mb-4 block">Case Studies</span>
          <h2 className="heading-lg">
            Real Proof. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            We don't buy fake reviews. Here are the exact growth metrics we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass p-8 bg-bg-card/40 border border-border-default flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-accent-300 font-semibold tracking-wide uppercase mb-2 block">
                  {study.sub}
                </span>
                <h3 className="text-2xl font-bold mb-8">{study.title}</h3>

                {/* Horizontal Bar Chart 1 */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-text-secondary">{study.metric1.name}</span>
                    <span className="text-white font-bold">{study.metric1.value}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${study.metric1.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${study.color}`}
                    />
                  </div>
                </div>

                {/* Horizontal Bar Chart 2 */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-text-secondary">{study.metric2.name}</span>
                    <span className="text-white font-bold">{study.metric2.value}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${study.metric2.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${study.color}`}
                    />
                  </div>
                </div>

                {/* Horizontal Bar Chart 3 */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-text-secondary">{study.metric3.name}</span>
                    <span className="text-white font-bold">{study.metric3.value}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${study.metric3.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${study.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
