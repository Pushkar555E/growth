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
    color: "from-amber-500 to-amber-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    lineColor: "#f59e0b",
  },
  {
    id: 2,
    title: "Strategy",
    subtitle: "Creating The Blueprint",
    description: "A tailored design mock, keyword sheet, and content mapping strategy custom-made for your audience.",
    color: "from-amber-500 to-amber-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    lineColor: "#f59e0b",
  },
  {
    id: 3,
    title: "Launch",
    subtitle: "Executing with Precision",
    description: "Deploying high speed clean-coded pages, target campaigns, pixel trackings, and full SEO setup.",
    color: "from-amber-500 to-amber-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    lineColor: "#f59e0b",
  },
  {
    id: 4,
    title: "Scale",
    subtitle: "Compounding Growth",
    description: "Ongoing monthly performance reports, split test optimization, and channel expansions.",
    color: "from-amber-500 to-amber-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    lineColor: "#f59e0b",
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

        gsap.fromTo(
          lineFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepEls[i],
              start: "top 45%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      }

      // Automatically change active step based on scroll trigger positions
      stepEls.forEach((stepEl, idx) => {
        ScrollTrigger.create({
          trigger: stepEl,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-24 relative overflow-hidden" 
      id="process"
      aria-labelledby="process-title"
    >
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blob bg-blob-purple opacity-5 pointer-events-none" />

      <div className="container-tight relative z-10 max-w-3xl">
        <div className="text-center mb-20">
          <span className="label mb-4 block">Our Process</span>
          <h2 id="process-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Four Steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">Unstoppable Growth</span>
          </h2>
          <p className="body-md mt-4 max-w-xl mx-auto font-light text-text-secondary">
            A transparent, technical-first framework that consistently scales local businesses.
          </p>
        </div>

        <div className="relative">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                id={`timeline-step-${step.id}`}
                className="timeline-step relative flex gap-6 md:gap-10 cursor-pointer group"
                onClick={() => setActiveStep(idx)}
              >
                {/* Visual Line and Circle */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                    className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 border ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} border-transparent text-black`
                        : "bg-bg-card border-white/[0.03] text-text-tertiary group-hover:border-white/[0.08]"
                    }`}
                    style={isActive ? { boxShadow: `0 0 20px ${step.glowColor}` } : {}}
                  >
                    {step.id}
                  </motion.div>

                  {idx < steps.length - 1 && (
                    <div className="relative w-[1px] flex-1 min-h-[60px]">
                      <div className="absolute inset-0 bg-white/[0.03]" />
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
                <div className="pb-10 flex-1">
                  <div
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      isActive ? "glass border-amber-500/20 bg-white/[0.01]" : "border-transparent hover:bg-white/[0.01]"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <span className="text-xs text-amber-400 font-semibold md:before:content-['•_'] md:before:mr-1">
                        {step.subtitle}
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs md:text-sm text-text-secondary leading-relaxed mt-3 font-light"
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
