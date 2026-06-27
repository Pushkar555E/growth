"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // quickTo creates highly efficient animation setters
    const xTo = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3.out" });

    const onMouseMove = (e) => {
      // Offset by half glow size (420px / 2 = 210px) to center it
      xTo(e.clientX - 210);
      yTo(e.clientY - 210);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="mouse-glow hidden lg:block fixed pointer-events-none top-0 left-0"
      aria-hidden="true"
    />
  );
}
