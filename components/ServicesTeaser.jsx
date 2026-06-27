"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    desc: "Speed-optimized, high-converting, clean-coded custom sites to capture and turn traffic into clients.",
    icon: "💻",
    link: "/services",
  },
  {
    title: "Website SEO",
    desc: "Top ranks on Google Search & Map Pack to make your business the default local option.",
    icon: "🔍",
    link: "/services",
  },
  {
    title: "Social Media Management",
    desc: "A consistent content calendar, Reels, strategy, and custom design templates to build absolute authority.",
    icon: "📱",
    link: "/services",
  },
  {
    title: "Paid Advertising",
    desc: "High ROAS Meta & Google ads optimized with precise pixels and target audience definitions.",
    icon: "⚡",
    link: "/services",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="py-24 bg-bg-secondary/40 relative overflow-hidden" id="services-teaser">
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <span className="label mb-4 block">What We Offer</span>
          <h2 className="heading-lg">
            Built for <span className="gradient-text">Absolute Conversion</span>
          </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            We don't use templates. We build custom-made lead generation assets that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass p-6 flex flex-col justify-between card-hover border border-border-default bg-bg-card/50"
            >
              <div>
                <span className="text-3xl mb-6 block">{svc.icon}</span>
                <h3 className="heading-sm text-text-primary mb-3">{svc.title}</h3>
                <p className="body-sm text-text-secondary leading-relaxed mb-6">{svc.desc}</p>
              </div>
              <Link
                href={svc.link}
                className="text-xs font-semibold text-accent-300 hover:text-accent-400 flex items-center gap-1 group/btn"
              >
                Learn More
                <svg
                  className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
