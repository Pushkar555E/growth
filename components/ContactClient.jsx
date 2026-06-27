"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, Clock, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { trackFormSubmission, trackPhoneClick, trackEmailClick } from "@/lib/tracking";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    whatsapp: "",
    message: ""
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
          from_name: "Conversion X Lead Engine",
          name: formData.name,
          email: formData.email,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}
WhatsApp: ${formData.whatsapp}
Message: ${formData.message}
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        trackFormSubmission("audit_request_form", true, formData.business);
        setFormData({ name: "", email: "", business: "", whatsapp: "", message: "" });
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again.");
        trackFormSubmission("audit_request_form", false, result.message || "API Error");
      }
    } catch (err) {
      setErrorMsg("Unable to connect to the server. Please check your internet connection.");
      trackFormSubmission("audit_request_form", false, "Server connection failure");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen bg-bg-primary text-white">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-tight relative z-10 max-w-5xl">
          
          <div className="text-center mb-16">
            <span className="label mb-4 block">Let&apos;s Scale Your Business</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Get in Touch with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">Execution Leads</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              Claim your free audit report or book a direct strategy call. We reply to all inquiries in under 12 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass p-8 bg-bg-card/50 border border-white/[0.02]">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-3">Audit Requested Successfully!</h2>
                    <p className="text-xs text-text-secondary mb-8 font-light leading-relaxed">
                      Thank you. We have received your request. Our execution team is running a local maps and technical speed audit on your site now. Expect your custom roadmap in under 12 hours.
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
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="business" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-2">
                          Business Name
                        </label>
                        <input
                          id="business"
                          type="text"
                          required
                          disabled={isSubmitting}
                          placeholder="Sharma Diagnostics"
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
                          placeholder="+91 62908 19569"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-semibold text-text-secondary uppercase tracking-widest mb-2">
                        Message / Goals (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        disabled={isSubmitting}
                        placeholder="Tell us about your current speed bottlenecks or local ranking hurdles..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-3 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-amber-500/50 transition-colors disabled:opacity-50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary !py-3.5 !text-xs font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending Request..." : "Claim My Free Growth Audit"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Agency Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Info */}
              <div className="glass p-8 bg-bg-card/50 border border-white/[0.02] space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Direct Contacts</h3>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] shrink-0">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wider block mb-0.5">Email</span>
                    <a href="mailto:hello@conversionx.in" onClick={trackEmailClick} className="text-xs text-white font-medium hover:text-amber-400 transition-colors">
                      hello@conversionx.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] shrink-0">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wider block mb-0.5">WhatsApp</span>
                    <a
                      href="https://wa.me/916290819569"
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={trackPhoneClick}
                      className="text-xs text-white font-medium hover:text-amber-400 transition-colors"
                    >
                      +91 62908 19569
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] shrink-0">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wider block mb-0.5">Office Hours</span>
                    <span className="text-xs text-white font-medium">
                      Mon – Fri: 9:00 AM – 6:00 PM (IST)
                    </span>
                    <span className="text-[10px] text-text-tertiary block mt-0.5 font-light">
                      *Active server monitoring runs 24/7/365
                    </span>
                  </div>
                </div>
              </div>

              {/* Expectation Box */}
              <div className="glass p-8 bg-white/[0.01] border border-white/[0.02] space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">What Happens Next?</h3>
                </div>
                <ul className="space-y-3 text-[11px] text-text-secondary leading-relaxed font-light list-decimal pl-4">
                  <li>Our technical lead pulls your PageSpeed and GBP map coordinates.</li>
                  <li>We review keyword opportunities your direct local competitors are ranking for.</li>
                  <li>We email you a custom growth blueprint outlining the exact fixes (12-hour guarantee).</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
