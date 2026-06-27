"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission / mailto action for static build
    const subject = encodeURIComponent(`FREE Growth Audit Request - ${formData.business}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nWhatsApp: ${formData.whatsapp}`
    );
    window.open(`mailto:audit@growthagency.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blob bg-blob-purple opacity-20 pointer-events-none" />

        <div className="container-tight relative z-10 max-w-xl">
          <div className="text-center mb-10">
            <span className="label mb-4 block">Limited Spots</span>
            <h1 className="heading-lg mb-4 leading-tight text-white">
              Claim Your <span className="gradient-text">FREE Business Growth Audit</span>
            </h1>
            <p className="body-sm text-text-secondary">
              We will audit your speed, search ranking positions, and local ads and send you a customized blueprint.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gradient-border p-[1px]"
          >
            <div className="glass p-8 bg-bg-card/75 border border-border-default/80">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold text-white mb-2">Request Prepared!</h2>
                  <p className="body-sm text-text-secondary mb-6">
                    Your growth audit submission has been drafted in your default email client. Check your mail app!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary !py-2.5"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-border-default rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="rahul@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-border-default rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Business Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      required
                      placeholder="Sharma Diagnostics / Dental Care"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full bg-white/[0.03] border border-border-default rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-400/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white/[0.03] border border-border-default rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-400/50 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary !py-3.5 !text-base"
                  >
                    Claim My Free Audit
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
