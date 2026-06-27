"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Campaigns Launched", icon: "🚀" },
  { value: 15, suffix: "+", label: "Industries Served", icon: "🏢" },
  { value: 500, suffix: "k+", label: "Ad Spend Managed ($)", icon: "💰" },
  { value: 98, suffix: "%", label: "Client Retention", icon: "🤝" },
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Setup count animation
        const countObj = { val: 0 };
        gsap.to(countObj, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
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
    <section ref={containerRef} className="py-20 overflow-hidden" id="trust-stats">
      <div className="section-divider mb-16" />
      <div className="container-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="counter-card glass group card-hover flex flex-col items-center text-center p-6 lg:p-8 opacity-0"
            >
              <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </span>
              <div className="heading-lg gradient-text mb-2 font-extrabold tracking-tight">
                <span className="counter-number" data-target={stat.value}>
                  0
                </span>
                {stat.suffix}
              </div>
              <p className="body-sm text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16" />
    </section>
  );
}
