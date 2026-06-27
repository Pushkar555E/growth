"use client";

import { motion } from "framer-motion";
import { Activity, HeartPulse, Trophy, Utensils, Home, ShoppingBag, Scissors } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const industries = [
  { name: "Dentists", icon: Activity, desc: "Top Local search engine spots, patient bookings, and speed-optimized landing pages.", leads: "+35/mo avg" },
  { name: "Hospitals", icon: HeartPulse, desc: "Technical HIPAA-compliant directory maps, patient pipelines, and organic SEO authority.", leads: "2.4x Call Volume" },
  { name: "Gyms", icon: Trophy, desc: "High ROAS Lead campaigns, split test landing page funnels, and retention tracking setups.", leads: "+120 signups/mo" },
  { name: "Restaurants", icon: Utensils, desc: "Table booking system installations, localized Maps optimization, and engaging Reels scheduling.", leads: "+320% bookings" },
  { name: "Real Estate", icon: Home, desc: "Lead magnet funnels, buyer intent ads target mapping, and pixel conversions checks.", leads: "5x ROAS avg" },
  { name: "E-commerce", icon: ShoppingBag, desc: "Shopify/Next.js store speed optimizations, retargeting ad setup, and search product optimizations.", leads: "+450% Revenue" },
  { name: "Salons", icon: Scissors, desc: "Local GBP listings, automatic WhatsApp appointment booking setup, and reviews collection strategies.", leads: "+80% retention" },
];

export default function IndustriesClient() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blob bg-blob-cyan opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">Who We Serve</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Scale Continuously</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              We build custom SEO and paid acquisition blueprints targeted to your industry's exact client profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="glass p-8 bg-bg-card/40 border border-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Icon className="w-8 h-8 text-amber-400" />
                      <h2 className="text-xl font-bold text-white">{ind.name}</h2>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-8 font-light">{ind.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.02] flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">Estimated Impact</span>
                    <span className="text-xs font-bold text-purple-400">{ind.leads}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
