"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const proofRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(descRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.4")
        .fromTo(proofRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-cyan-50/30"
      aria-labelledby="hero-title"
    >
      {/* Grid overlay background */}
      <div className="absolute inset-0 hero-grid opacity-[0.6] pointer-events-none" />

      {/* Floating background gradient blobs */}
      <div className="absolute top-1/4 left-1/2 w-[600px] h-[400px] bg-blob bg-blob-cyan animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-blob bg-blob-purple animate-float opacity-10 pointer-events-none" />

      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div ref={badgeRef} className="mb-8 opacity-0">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-amber-500/10 border border-amber-500/25 text-amber-600">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
            </span>
            FOR BUSINESSES READY TO GROW
          </span>
        </div>

        {/* Semantic Title <h1> (Strictly one per page) */}
        <h1 
          ref={titleRef} 
          id="hero-title" 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6 opacity-0 leading-[1.05]"
        >
          We help businesses generate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-600 to-amber-500">
            more qualified leads.
          </span>
        </h1>

        {/* Description */}
        <p ref={descRef} className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mb-12 opacity-0 leading-relaxed font-light">
          Performance-focused digital marketing for brands that want measurable growth.
        </p>

        {/* CTA Actions */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <Link 
            href="/contact" 
            id="hero-btn-primary" 
            className="btn-primary text-sm px-6 py-3.5"
          >
            Book a Free Strategy Call
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a 
            href="#case-studies" 
            id="hero-btn-secondary" 
            className="btn-secondary text-sm px-6 py-3.5"
          >
            See Case Studies
          </a>
        </div>

        {/* Proof Line */}
        <p 
          ref={proofRef} 
          className="text-[11px] uppercase tracking-widest text-slate-400 mt-8 font-semibold opacity-0"
        >
          Trusted by growing brands across SEO, ads, and social media
        </p>
      </div>
    </section>
  );
}
