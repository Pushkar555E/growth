"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "998039d1-14f5-4114-82c5-2e0d6caca091",
          subject: `New Homepage Lead: Free Growth Audit - ${formData.business}`,
          from_name: "Growth Nest Lead Engine",
          name: formData.name,
          email: formData.email,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}
WhatsApp: ${formData.whatsapp}
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", business: "", whatsapp: "" });
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Unable to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
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
                        <h2 id="home-contact-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Claim Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-500">Free Growth Audit</span>
            </h2>
            <p className="body-md font-light text-text-secondary leading-relaxed">
              We perform a direct audit of your Google search rankings, maps rankings, competitor traffic volume, and mobile performance speeds. No obligation, 100% free.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Custom analysis video included</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
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
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Requested Successfully!</h3>
                    <p className="text-xs text-text-secondary mb-6 font-light">
                      Thank you! Your free growth audit request has been sent. We will review your site and email you a custom blueprint report in 24 hours.
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
                    {errorMsg && (
                      <div className="p-3.5 text-xs rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 font-light">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="home-name" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-1.5">
                          Your Name
                        </label>
                        <input
                          id="home-name"
                          type="text"
                          required
                          disabled={isSubmitting}
                          placeholder="Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all disabled:opacity-50"
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
                          disabled={isSubmitting}
                          placeholder="rahul@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all disabled:opacity-50"
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
                          disabled={isSubmitting}
                          placeholder="Sharma Clinic / Dental Care"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all disabled:opacity-50"
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
                          disabled={isSubmitting}
                          placeholder="+91 62908 19569"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary !py-3 !text-xs font-semibold uppercase tracking-wider mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Requesting..." : "Claim Free Audit"}
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
