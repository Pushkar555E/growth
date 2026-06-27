"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const platforms = [
  { name: "Google" },
  { name: "Meta" },
  { name: "LinkedIn" },
  { name: "Canva" },
  { name: "Notion" },
  { name: "Google" },
  { name: "Meta" },
  { name: "LinkedIn" },
  { name: "Canva" },
  { name: "Notion" },
];

export default function LogoMarquee() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simply stagger entrance animation of the whole section
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-black/40 opacity-0" id="logo-marquee">
      <p className="text-center text-xs font-semibold tracking-widest text-text-tertiary uppercase mb-8">
        Trusted Platforms We Work With
      </p>
      
      <div className="flex overflow-hidden w-full select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 gap-16 items-center min-w-full animate-marquee">
          {platforms.map((platform, idx) => (
            <div
              key={`${platform.name}-${idx}`}
              className="flex items-center justify-center font-bold text-2xl tracking-tight text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              {platform.name}
            </div>
          ))}
        </div>
        <div className="flex shrink-0 gap-16 items-center min-w-full animate-marquee" aria-hidden="true">
          {platforms.map((platform, idx) => (
            <div
              key={`dup-${platform.name}-${idx}`}
              className="flex items-center justify-center font-bold text-2xl tracking-tight text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              {platform.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
