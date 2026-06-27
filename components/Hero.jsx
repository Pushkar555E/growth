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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(descRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Grid overlay background */}
      <div className="absolute inset-0 hero-grid opacity-[0.2] pointer-events-none" />

      {/* Floating background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blob bg-blob-purple opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blob bg-blob-cyan opacity-15" />

      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div ref={badgeRef} className="mb-8 opacity-0">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400" />
            </span>
            Growth Blueprint V1.0
          </span>
        </div>

        {/* Semantic Title <h1> (Strictly one per page) */}
        <h1 
          ref={titleRef} 
          id="hero-title" 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6 opacity-0 leading-[1.05]"
        >
          We don&apos;t run ads. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400">
            We build businesses that customers can&apos;t ignore.
          </span>
        </h1>

        {/* Description */}
        <p ref={descRef} className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mb-12 opacity-0 leading-relaxed font-light">
          Premium development, technical SEO, and conversion optimization built for high-growth businesses. No fluff, just results.
        </p>

        {/* CTA Actions */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 opacity-0">
          <Link 
            href="/contact" 
            id="hero-btn-primary" 
            className="btn-primary text-sm px-6 py-3.5"
          >
            Book Free Growth Audit
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a 
            href="#process" 
            id="hero-btn-secondary" 
            className="btn-secondary text-sm px-6 py-3.5"
          >
            Our Process
          </a>
        </div>
      </div>
    </section>
  );
}
