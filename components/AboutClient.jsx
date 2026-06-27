"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

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

const roadmapItems = [
  { time: "Q3 2026", title: "AI Lead Automations", desc: "Deploying automated custom-trained lead responses and chatbots to qualify client bookings automatically." },
  { time: "Q4 2026", title: "Custom Growth Dashboard", desc: "Real-time client analytics platform so you can track your SEO rankings, ad spend, and leads in a clean custom SaaS dashboard." },
];

export default function AboutClient() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-blob bg-blob-purple opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Our Precise <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Client Blueprint</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              We treat local business marketing like engineering. Here is our exact 11-step workflow from audit to ongoing split optimization.
            </p>
          </div>

          {/* 11 Step Workflow Section */}
          <div className="mb-28">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">11-Step Client Workflow</h2>
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
                  <span className="text-2xl font-extrabold text-purple-400/40 mb-3 block">{ws.step}</span>
                  <h3 className="text-base font-bold text-white mb-2">{ws.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">{ws.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Agency Roadmap Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">Agency Future Roadmap</h2>
            <div className="max-w-2xl mx-auto space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-[1px] before:bg-white/[0.03]">
              {roadmapItems.map((item, idx) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="relative pl-16"
                >
                  {/* Circle Indicator */}
                  <div className="absolute left-[29px] top-2 w-2.5 h-2.5 rounded-full bg-purple-400 border-2 border-[#030407] shadow-glow-sm" />

                  <span className="text-[10px] font-bold text-purple-400 tracking-wider block mb-1 uppercase">{item.time}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
