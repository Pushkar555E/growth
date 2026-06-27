"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { pricingData } from "../lib/pricing";

export default function PricingPreviewSection() {
  // We are pulling the 3 social media packages for the home page teaser
  const packages = pricingData.socialMediaPackages;

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Pricing that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Scales</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Transparent, zero-BS packages designed to turn your online presence into a revenue-generating machine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                pkg.isPopular 
                  ? "bg-white/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.isPopular && (
                <div className="text-purple-400 text-sm font-semibold mb-4 tracking-wider uppercase">
                  ⭐ Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-400 mb-6 h-10">{pkg.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹{pkg.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/pricing" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            View Full Pricing & Add-ons
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
