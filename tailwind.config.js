/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":   "#06080f",
        "bg-secondary": "#0a0e1a",
        "bg-tertiary":  "#0f1425",
        "bg-card":      "#111827",
        "bg-elevated":  "#151d30",
        "text-primary":   "#f1f5f9",
        "text-secondary": "#94a3b8",
        "text-tertiary":  "#64748b",
        "text-muted":     "#475569",
        "accent-300": "#9555ff",
        "accent-400": "#7c3aed",
        "accent-500": "#6d28d9",
        "accent-600": "#5b21b6",
        "cyan-400":   "#22d3ee",
        "cyan-500":   "#06b6d4",
        "border-default": "rgba(148,163,184,0.10)",
        "border-strong":  "rgba(148,163,184,0.18)",
        "border-accent":  "rgba(124,58,237,0.40)",
        success: "#10b981",
        warning: "#f59e0b",
        error:   "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl:  "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(124,58,237,0.15)",
        "glow-md": "0 0 30px rgba(124,58,237,0.20)",
        "glow-lg": "0 0 60px rgba(124,58,237,0.25)",
        "glow-cyan": "0 0 30px rgba(34,211,238,0.15)",
        elevated:  "0 8px 32px rgba(0,0,0,0.40)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "33%":     { transform: "translateY(-12px) rotate(1deg)" },
          "66%":     { transform: "translateY(6px) rotate(-1deg)" },
        },
        "pulse-slow": {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":     { opacity: "0.7", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float:            "float 6s ease-in-out infinite",
        "pulse-slow":     "pulse-slow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        marquee:          "marquee 30s linear infinite",
        "marquee-reverse":"marquee-reverse 30s linear infinite",
        shimmer:          "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
