"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const services = [
  {
    title: "Website Development",
    desc: "Speed-optimized, high-converting, clean-coded custom sites to capture and turn traffic into clients.",
    icon: "💻",
    features: [
      "Custom React / Next.js Setup",
      "Mobile Responsive First Design",
      "Google PageSpeed Score 90+",
      "Lead Capture Integrations",
    ],
  },
  {
    title: "Website SEO",
    desc: "Top ranks on Google Search & Map Pack to make your business the default local option.",
    icon: "🔍",
    features: [
      "Technical Website Audit",
      "Local Map Pack Optimization",
      "Keyword & Competitor Mapping",
      "Monthly Authority Link Building",
    ],
  },
  {
    title: "Social Media Management",
    desc: "A consistent content calendar, Reels, strategy, and custom design templates to build absolute authority.",
    icon: "📱",
    features: [
      "Full Content Strategy & Research",
      "Engaging Reel Scripting & Editing",
      "Premium Custom Graphics Templates",
      "Active Daily Community Posting",
    ],
  },
  {
    title: "Paid Advertising",
    desc: "High ROAS Meta & Google ads optimized with precise pixels and target audience definitions.",
    icon: "⚡",
    features: [
      "Meta Pixel & API Conversion Setup",
      "Laser Target Audience Research",
      "Copywriting & Creative Ad Design",
      "Weekly Bid & Split Test Checks",
    ],
  },
];

function TiltCard({ service }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.5s ease-out";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass p-8 bg-bg-card/50 border border-border-default flex flex-col justify-between select-none h-full"
      style={{ willChange: "transform" }}
    >
      <div>
        <span className="text-4xl mb-6 block">{service.icon}</span>
        <h2 className="text-2xl font-bold mb-4 text-text-primary">{service.title}</h2>
        <p className="body-sm text-text-secondary mb-8 leading-relaxed">{service.desc}</p>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-text-secondary">
              <svg className="w-5 h-5 text-accent-300 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-primary w-full !py-3">Enquire Now</button>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-blob bg-blob-purple opacity-15 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">What We Do</span>
            <h1 className="heading-lg mb-6">
              Our Premium <span className="gradient-text">Growth Services</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Custom-built lead generation assets and audience scaling campaigns mapped strictly to revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
              >
                <TiltCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
