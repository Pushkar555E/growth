"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { pricingData } from "@/lib/pricing";

const tabs = [
  { id: "webdev", label: "Website Dev" },
  { id: "social", label: "Social Media" },
  { id: "seo", label: "Website SEO" },
  { id: "ads", label: "Paid Ads" },
];

export default function PricingClient() {
  const [activeTab, setActiveTab] = useState("webdev");

  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blob bg-blob-purple opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-16">
            <span className="label mb-4 block">Our Plans</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Scalable Growth</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              No locked contracts. Cancel anytime. Choose the service you need to scale your traffic.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex p-1 rounded-lg bg-white/5 border border-white/[0.03] backdrop-blur-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`btn-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    activeTab === tab.id ? "text-black" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-white rounded-md -z-10 shadow-glow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Contents */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "webdev" && <WebsitePricingView />}
                {activeTab === "social" && <SocialPricingView />}
                {activeTab === "seo" && <SEOPricingView />}
                {activeTab === "ads" && <AdsPricingView />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Trust Badges */}
          <div className="mt-24 pt-12 border-t border-white/[0.02] flex flex-wrap items-center justify-center gap-12 text-center">
            <div className="flex items-center gap-3">
              <span className="text-xl" role="img" aria-hidden="true">🚫</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">No Long Term Contract</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl" role="img" aria-hidden="true">📅</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl" role="img" aria-hidden="true">⚡</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Trusted by Local Businesses</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function WebsitePricingView() {
  const data = pricingData.websiteDevelopment;
  return (
    <div className="glass overflow-hidden border border-white/[0.02] max-w-3xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.02] bg-white/[0.01]">
              <th className="p-5 font-semibold text-xs text-text-primary uppercase tracking-wider">Service</th>
              <th className="p-5 font-semibold text-xs text-text-primary uppercase tracking-wider">Billing</th>
              <th className="p-5 font-semibold text-xs text-text-primary uppercase tracking-wider text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b border-white/[0.01] hover:bg-white/[0.01] transition-colors duration-250">
                <td className="p-5 font-bold text-sm text-text-primary">{item.service}</td>
                <td className="p-5 text-xs text-text-secondary font-light">{item.type}</td>
                <td className="p-5 font-bold text-sm text-purple-400 text-right">₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SocialPricingView() {
  const data = pricingData.socialMediaPackages;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((pkg, idx) => (
        <div
          key={pkg.name}
          className={`p-8 rounded-xl border transition-all duration-350 flex flex-col justify-between ${
            pkg.isPopular
              ? "bg-white/[0.02] border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]"
              : "bg-white/[0.01] border-white/[0.03]"
          }`}
        >
          <div>
            {pkg.isPopular && (
              <div className="text-purple-400 text-[10px] font-semibold mb-4 tracking-widest uppercase">
                ⭐ Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-white">{pkg.name}</h3>
            <p className="text-text-secondary text-xs mb-6 h-10 font-light leading-relaxed">{pkg.description}</p>
            <div className="mb-8">
              <span className="text-3xl font-extrabold text-white">₹{pkg.price}</span>
              <span className="text-xs text-text-tertiary">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-xs text-text-secondary font-light leading-relaxed">
                  <svg className="w-4.5 h-4.5 text-purple-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button id={`pricing-btn-${pkg.name.toLowerCase()}`} className="w-full btn-secondary !py-2.5 !text-xs font-semibold">Get Started</button>
        </div>
      ))}
    </div>
  );
}

function SEOPricingView() {
  const data = pricingData.seoPackages;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((pkg, idx) => (
        <div
          key={pkg.name}
          className={`p-8 rounded-xl border transition-all duration-350 flex flex-col justify-between ${
            pkg.isPopular
              ? "bg-white/[0.02] border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]"
              : "bg-white/[0.01] border-white/[0.03]"
          }`}
        >
          <div>
            {pkg.isPopular && (
              <div className="text-purple-400 text-[10px] font-semibold mb-4 tracking-widest uppercase">
                ⭐ Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-6 text-white">{pkg.name}</h3>
            <div className="mb-8">
              <span className="text-3xl font-extrabold text-white">₹{pkg.price}</span>
              <span className="text-xs text-text-tertiary">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-xs text-text-secondary font-light leading-relaxed">
                  <svg className="w-4.5 h-4.5 text-purple-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button id={`seo-btn-${pkg.name.toLowerCase().replace(" ", "-")}`} className="w-full btn-secondary !py-2.5 !text-xs font-semibold">Get Started</button>
        </div>
      ))}
    </div>
  );
}

function AdsPricingView() {
  const data = pricingData.adsManagement;
  return (
    <div className="glass overflow-hidden border border-white/[0.02] max-w-3xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.02] bg-white/[0.01]">
              <th className="p-5 font-semibold text-xs text-text-primary uppercase tracking-wider">Plan / Network</th>
              <th className="p-5 font-semibold text-xs text-text-primary uppercase tracking-wider">Details</th>
              <th className="p-5 font-semibold text-xs text-text-primary uppercase tracking-wider text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b border-white/[0.01] hover:bg-white/[0.01] transition-colors duration-250">
                <td className="p-5 font-bold text-sm text-text-primary whitespace-nowrap">{item.service}</td>
                <td className="p-5 text-xs text-text-secondary max-w-sm leading-relaxed font-light">{item.details}</td>
                <td className="p-5 font-bold text-sm text-purple-400 text-right whitespace-nowrap">₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
