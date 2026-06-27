"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export default function ContactClient() {
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
          subject: `New Lead: Free Growth Audit - ${formData.business}`,
          from_name: "Growth Agency Lead Engine",
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
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blob bg-blob-purple opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10 max-w-lg">
          <div className="text-center mb-10">
            <span className="label mb-4 block">Limited Spots</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">FREE Business Growth Audit</span>
            </h1>
            <p className="text-xs text-text-secondary font-light">
              We will audit your speed, search ranking positions, and local ads and send you a customized blueprint.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="gradient-border p-[1px]"
          >
            <div className="glass p-8 bg-bg-card/75 border border-white/[0.02]">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-white mb-2">Audit Requested Successfully!</h2>
                  <p className="text-xs text-text-secondary mb-6 font-light">
                    Thank you! Your free growth audit request has been sent. We will review your site and email you a custom blueprint report in 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary !py-2.5 !text-xs font-semibold"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form id="audit-form" onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3.5 text-xs rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 font-light">
                      {errorMsg}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="rahul@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-2">
                      Business Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Sharma Diagnostics / Dental Care"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      disabled={isSubmitting}
                      placeholder="+91 98765 43210"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary !py-3 !text-xs font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Requesting..." : "Claim My Free Audit"}
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
