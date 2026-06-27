"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { pricingData } from "../lib/pricing";

export default function PricingPreviewSection() {
  const packages = pricingData.socialMediaPackages;

  return (
    <section 
      className="py-24 bg-bg-primary text-white relative overflow-hidden" 
      id="pricing-preview"
      aria-labelledby="pricing-preview-title"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="label mb-4 block">Social Media Teaser</span>
          <h2 id="pricing-preview-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Pricing that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">Scales</span>
          </h2>
          <p className="body-md mt-4 max-w-xl mx-auto font-light text-text-secondary">
            Transparent, zero-BS packages designed to turn your online presence into a revenue-generating machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                pkg.isPopular 
                  ? "bg-white/[0.02] border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.04)]" 
                  : "bg-white/[0.01] border-white/[0.03] hover:border-white/[0.08]"
              }`}
            >
              <div>
                {pkg.isPopular && (
                  <div className="flex items-center text-amber-400 text-[10px] font-semibold mb-4 tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 mr-1" /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-text-secondary mb-6 h-10 font-light">{pkg.description}</p>
                <div className="mb-8">
                  <span className="text-3xl font-extrabold text-white">₹{pkg.price}</span>
                  <span className="text-xs text-text-tertiary">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-text-secondary font-light">
                      <svg className="w-4.5 h-4.5 text-amber-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href="/pricing"
                id={`preview-pkg-btn-${pkg.name.toLowerCase()}`}
                className="w-full btn-secondary !py-2.5 !text-xs font-semibold text-center"
              >
                Choose {pkg.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/pricing" 
            id="preview-full-pricing-btn"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-amber-400 transition-colors duration-300"
          >
            View Full Pricing & Add-ons
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
