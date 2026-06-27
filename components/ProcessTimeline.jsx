"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "Understanding Your Business",
    description: "Deep dive audit of your existing traffic, ranking, metrics, and competitors. We pinpoint specific opportunities.",
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(124, 58, 237, 0.3)",
    lineColor: "#8b5cf6",
  },
  {
    id: 2,
    title: "Strategy",
    subtitle: "Creating The Blueprint",
    description: "A tailored design mock, keyword sheet, and content mapping strategy custom-made for your audience.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.3)",
    lineColor: "#06b6d4",
  },
  {
    id: 3,
    title: "Launch",
    subtitle: "Executing with Precision",
    description: "Deploying high speed clean-coded pages, target campaigns, pixel trackings, and full SEO setup.",
    color: "from-cyan-500 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.3)",
    lineColor: "#10b981",
  },
  {
    id: 4,
    title: "Scale",
    subtitle: "Compounding Growth",
    description: "Ongoing monthly performance reports, split test optimization, and channel expansions.",
    color: "from-emerald-500 to-purple-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
    lineColor: "#a855f7",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepEls = containerRef.current.querySelectorAll(".timeline-step");

      // Draw vertical lines dynamically on scroll
      for (let i = 0; i < steps.length - 1; i++) {
        const lineFill = containerRef.current.querySelector(`.timeline-line-fill-${i}`);
        if (!lineFill) continue;

        gsap.to(lineFill, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineFill,
            start: "top 70%",
            end: "bottom 50%",
            scrub: true,
          },
        });
      }

      // Auto-advance active tab
      stepEls.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden" id="process">
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blob bg-blob-purple opacity-10" />

      <div className="container-tight relative z-10 max-w-4xl">
        <div className="text-center mb-20">
          <span className="label mb-4 block">Our Process</span>
          <h2 className="heading-lg">
            Four Steps to <span className="gradient-text">Unstoppable Growth</span>
          </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            A transparent, technical-first framework that consistently scales local businesses.
          </p>
        </div>

        <div className="relative">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                className="timeline-step relative flex gap-6 md:gap-12 cursor-pointer group"
                onClick={() => setActiveStep(idx)}
              >
                {/* Visual Line and Circle */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                    className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-500 border ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} border-transparent text-white`
                        : "bg-bg-card border-border-default text-text-tertiary"
                    }`}
                    style={isActive ? { boxShadow: `0 0 25px ${step.glowColor}` } : {}}
                  >
                    {step.id}
                  </motion.div>

                  {idx < steps.length - 1 && (
                    <div className="relative w-[2px] flex-1 min-h-[80px]">
                      <div className="absolute inset-0 bg-border-default" />
                      <div
                        className={`timeline-line-fill-${idx} absolute inset-0 origin-top`}
                        style={{
                          background: `linear-gradient(to bottom, ${step.lineColor}, ${steps[idx + 1].lineColor})`,
                          scaleY: 0,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-14 flex-1">
                  <div
                    className={`p-6 rounded-2xl border transition-all duration-500 ${
                      isActive ? "glass border-accent-400/30" : "border-transparent hover:bg-white/[0.01]"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="heading-sm text-text-primary">{step.title}</h3>
                      <span className="text-xs text-accent-300 font-semibold md:before:content-['•_'] md:before:mr-1">
                        {step.subtitle}
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="body-sm text-text-secondary leading-relaxed mt-2"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
