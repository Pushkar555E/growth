"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Building2, Landmark, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: "counter-campaigns", value: 50, suffix: "+", label: "Campaigns Launched", icon: Rocket },
  { id: "counter-industries", value: 15, suffix: "+", label: "Industries Served", icon: Building2 },
  { id: "counter-adspend", value: 500, suffix: "k+", label: "Ad Spend Managed ($)", icon: Landmark },
  { id: "counter-retention", value: 98, suffix: "%", label: "Client Retention", icon: Users },
];

export default function TrustCounters() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(".counter-card");

      cards.forEach((card, i) => {
        const numberEl = card.querySelector(".counter-number");
        const targetValue = parseInt(numberEl.getAttribute("data-target"));

        // Setup scroll entrance
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );

        // Setup count animation
        const countObj = { val: 0 };
        gsap.to(countObj, {
          val: targetValue,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            if (numberEl) {
              numberEl.textContent = Math.floor(countObj.val);
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-16 overflow-hidden" 
      id="trust-stats"
      aria-label="Key Performance Indicators"
    >
      <div className="section-divider mb-12" />
      <div className="container-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                id={stat.id}
                className="counter-card glass p-8 flex flex-col items-center text-center opacity-0 hover:bg-white/[0.02] hover:border-white/[0.06] transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                  <span className="counter-number" data-target={stat.value}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-divider mt-12" />
    </section>
  );
}
