"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(title1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(title2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(ctaRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Grid overlay background */}
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

      {/* Floating accent background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blob bg-blob-purple opacity-25 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blob bg-blob-cyan opacity-20 animate-pulse-slow" />

      <div className="container-tight relative z-10 flex flex-col items-center text-center">
        {/* Glowing Badge */}
        <div ref={badgeRef} className="mb-6 opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase glass border border-accent-400/20 text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
            </span>
            Growth Engine V1.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="heading-xl max-w-4xl tracking-tight mb-8">
          <span ref={title1Ref} className="block text-text-primary mb-2 opacity-0">
            We don&apos;t run ads.
          </span>
          <span ref={title2Ref} className="block gradient-text opacity-0">
            We build businesses that customers can&apos;t ignore.
          </span>
        </h1>

        {/* Description */}
        <p ref={descRef} className="body-lg max-w-2xl mb-12 opacity-0 text-text-secondary">
          Premium development, technical SEO, and conversion optimization built for high-growth businesses. No fluff, just results.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 opacity-0">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book Free Growth Audit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="#process" className="btn-secondary text-base px-8 py-4">
            Our Process
          </a>
        </div>
      </div>
    </section>
  );
}
