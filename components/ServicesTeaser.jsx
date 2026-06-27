"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Search, Smartphone, Zap } from "lucide-react";

const services = [
  {
    id: "teaser-webdev",
    title: "Website Development",
    desc: "Speed-optimized, high-converting, clean-coded custom sites to capture and turn traffic into clients.",
    icon: Monitor,
    link: "/services",
  },
  {
    id: "teaser-seo",
    title: "Website SEO",
    desc: "Top ranks on Google Search & Map Pack to make your business the default local option.",
    icon: Search,
    link: "/services",
  },
  {
    id: "teaser-social",
    title: "Social Media Management",
    desc: "A consistent content calendar, Reels, strategy, and custom design templates to build absolute authority.",
    icon: Smartphone,
    link: "/services",
  },
  {
    id: "teaser-ads",
    title: "Paid Advertising",
    desc: "High ROAS Meta & Google ads optimized with precise pixels and target audience definitions.",
    icon: Zap,
    link: "/services",
  },
];

export default function ServicesTeaser() {
  return (
    <section 
      className="py-24 bg-bg-secondary/40 relative overflow-hidden" 
      id="services-teaser"
      aria-labelledby="teaser-title"
    >
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <span className="label mb-4 block">What We Offer</span>
          <h2 id="teaser-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Absolute Conversion</span>
          </h2>
          <p className="body-md mt-4 max-w-xl mx-auto font-light text-text-secondary">
            We don't use templates. We build custom-made lead generation assets that work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="glass p-6 flex flex-col justify-between hover:bg-white/[0.02] border-white/[0.03] transition-all duration-300"
              >
                <div>
                  <div className="mb-6">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6 font-light">{svc.desc}</p>
                </div>
                <Link
                  href={svc.link}
                  id={`${svc.id}-link`}
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group/btn"
                >
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
