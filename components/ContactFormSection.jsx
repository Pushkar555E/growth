"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`FREE Audit Request from Homepage - ${formData.business}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nWhatsApp: ${formData.whatsapp}`
    );
    window.open(`mailto:audit@growthagency.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section 
      className="py-24 bg-bg-secondary/40 relative overflow-hidden" 
      id="homepage-contact"
      aria-labelledby="home-contact-title"
    >
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-blob bg-blob-cyan opacity-10 pointer-events-none" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="label block">Get Audited</span>
            <h2 id="home-contact-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Claim Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">Free Growth Audit</span>
            </h2>
            <p className="body-md font-light text-text-secondary leading-relaxed">
              We perform a direct audit of your Google search rankings, maps rankings, competitor traffic volume, and mobile performance speeds. No obligation, 100% free.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">✅</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Custom analysis video included</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✅</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Competitor keyword gap sheet</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="gradient-border p-[1px]"
            >
              <div className="glass p-8 bg-bg-card/75 border border-white/[0.02]">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4" role="img" aria-label="success party">🎉</div>
                    <h3 className="text-xl font-bold text-white mb-2">Audit Request Prepared!</h3>
                    <p className="text-xs text-text-secondary mb-6 font-light">
                      We have drafted the audit request inside your default email client. Check your mail application!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary !py-2.5 !text-xs font-semibold"
                    >
                      Request Another Audit
                    </button>
                  </div>
                ) : (
                  <form id="home-contact-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="home-name" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-1.5">
                          Your Name
                        </label>
                        <input
                          id="home-name"
                          type="text"
                          required
                          placeholder="Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="home-email" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="home-email"
                          type="email"
                          required
                          placeholder="rahul@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="home-business" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-1.5">
                          Business Name
                        </label>
                        <input
                          id="home-business"
                          type="text"
                          required
                          placeholder="Sharma Clinic / Dental Care"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="home-whatsapp" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-1.5">
                          WhatsApp Number
                        </label>
                        <input
                          id="home-whatsapp"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary !py-3 !text-xs font-semibold uppercase tracking-wider mt-2"
                    >
                      Claim Free Audit
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
