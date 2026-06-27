"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Monitor, Search, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const services = [
  {
    id: "service-webdev",
    slug: "web-development",
    title: "Website Development",
    desc: "Speed-optimized, high-converting, clean-coded custom sites to capture and turn traffic into clients.",
    icon: Monitor,
    features: [
      "Custom React / Next.js Setup",
      "Mobile Responsive First Design",
      "Google PageSpeed Score 90+",
      "Lead Capture Integrations",
    ],
  },
  {
    id: "service-seo",
    slug: "seo",
    title: "Website SEO",
    desc: "Top ranks on Google Search & Map Pack to make your business the default local option.",
    icon: Search,
    features: [
      "Technical Website Audit",
      "Local Map Pack Optimization",
      "Keyword & Competitor Mapping",
      "Monthly Authority Link Building",
    ],
  },
  {
    id: "service-social",
    slug: "social-media",
    title: "Social Media Management",
    desc: "A consistent content calendar, Reels, strategy, and custom design templates to build absolute authority.",
    icon: Smartphone,
    features: [
      "Full Content Strategy & Research",
      "Engaging Reel Scripting & Editing",
      "Premium Custom Graphics Templates",
      "Active Daily Community Posting",
    ],
  },
  {
    id: "service-ads",
    slug: "paid-advertising",
    title: "Paid Advertising",
    desc: "High ROAS Meta & Google ads optimized with precise pixels and target audience definitions.",
    icon: Zap,
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
  const Icon = service.icon;

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
      className="glass p-8 bg-bg-card/50 border border-white/[0.03] flex flex-col justify-between select-none h-full hover:border-white/[0.08]"
      style={{ willChange: "transform" }}
    >
      <div>
        <div className="mb-6">
          <Icon className="w-6 h-6 text-amber-400" />
        </div>
        <h2 className="text-xl font-bold mb-4 text-white">{service.title}</h2>
        <p className="text-xs text-text-secondary mb-8 leading-relaxed font-light">{service.desc}</p>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-text-secondary font-light">
              <svg className="w-4.5 h-4.5 text-amber-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link 
        href={`/services/${service.slug}`}
        id={`services-btn-${service.slug}`} 
        className="btn-primary w-full !py-3 !text-xs font-semibold text-center"
      >
        Learn Strategy
      </Link>
    </div>
  );
}

export default function ServicesClient() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-blob bg-blob-purple opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">What We Do</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">Growth Services</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              Custom-built lead generation assets and audience scaling campaigns mapped strictly to revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
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
