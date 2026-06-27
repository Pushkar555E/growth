"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const blogPosts = [
  {
    slug: "why-speed-is-your-top-local-seo-ranking-factor",
    title: "Why Website Speed is Your Number One Local SEO Ranking Factor",
    excerpt: "Most local business sites score under 40 on Google PageSpeed. Discover why scoring 90+ cuts your customer acquisition costs in half.",
    date: "Jun 24, 2026",
    readTime: "4 min read",
    tag: "Technical SEO",
  },
  {
    slug: "how-to-optimize-google-map-pack-to-rank-number-one",
    title: "The Local Map Pack Blueprint: How to Secure the #1 Position",
    excerpt: "Google Maps drives over 60% of all direct call volume for clinics, salons, and restaurants. Learn our exact indexing checklist.",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    tag: "Local Maps",
  },
  {
    slug: "stop-burning-budget-on-meta-ads",
    title: "Stop Burning Ad Budget: Pixel Conversion Setup Done Right",
    excerpt: "Why standard boost posts fail. Discover how setting up Custom Conversions and Meta API tracking scales your return on ad spend.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
    tag: "Paid Advertising",
  },
];

export default function BlogClient() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blob bg-blob-purple opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">Knowledge Base</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Digital Growth</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              Technical insights, blueprints, and data-driven guides on SEO, web speed, and paid conversion engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass p-8 hover:bg-white/[0.02] border-white/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-purple-400 font-semibold tracking-widest uppercase mb-4 block">
                    {post.tag}
                  </span>
                  <h2 className="text-lg font-bold text-white mb-4 leading-snug hover:text-purple-300 transition-colors duration-250">
                    <Link href={`/blog/${post.slug}`} id={`blog-link-${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-text-secondary leading-relaxed mb-8 font-light">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.02] flex justify-between items-center text-[10px] text-text-tertiary">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
