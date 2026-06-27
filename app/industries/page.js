"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const industries = [
  { name: "Dentists", icon: "🦷", desc: "Top Local search engine spots, patient bookings, and speed-optimized landing pages.", leads: "+35/mo avg" },
  { name: "Hospitals", icon: "🏥", desc: "Technical HIPAA-compliant directory maps, patient pipelines, and organic SEO authority.", leads: "2.4x Call Volume" },
  { name: "Gyms", icon: "💪", desc: "High ROAS Lead campaigns, split test landing page funnels, and retention tracking setups.", leads: "+120 signups/mo" },
  { name: "Restaurants", icon: "🍽️", desc: "Table booking system installations, localized Maps optimization, and engaging Reels scheduling.", leads: "+320% bookings" },
  { name: "Real Estate", icon: "🏠", desc: "Lead magnet funnels, buyer intent ads target mapping, and pixel conversions checks.", leads: "5x ROAS avg" },
  { name: "E-commerce", icon: "🛍️", desc: "Shopify/Next.js store speed optimizations, retargeting ad setup, and search product optimizations.", leads: "+450% Revenue" },
  { name: "Salons", icon: "💇", desc: "Local GBP listings, automatic WhatsApp appointment booking setup, and reviews collection strategies.", leads: "+80% retention" },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blob bg-blob-cyan opacity-15 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">Who We Serve</span>
            <h1 className="heading-lg mb-6">
              Industries We <span className="gradient-text">Scale Continuously</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              We build custom SEO and paid acquisition blueprints targeted to your industry's exact client profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="glass p-8 bg-bg-card/40 border border-border-default hover:border-accent-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{ind.icon}</span>
                    <h2 className="text-2xl font-bold text-text-primary">{ind.name}</h2>
                  </div>
                  <p className="body-sm text-text-secondary leading-relaxed mb-8">{ind.desc}</p>
                </div>
                <div className="pt-4 border-t border-border-default/50 flex justify-between items-center">
                  <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Estimated Impact</span>
                  <span className="text-sm font-bold text-accent-300">{ind.leads}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
