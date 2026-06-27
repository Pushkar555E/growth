"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export default function BlogClient({ posts }) {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blob bg-blob-purple opacity-10 pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="text-center mb-20">
            <span className="label mb-4 block">Knowledge Base</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Growth Playbooks <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-500">& Case Studies</span>
            </h1>
            <p className="body-md max-w-xl mx-auto font-light text-text-secondary">
              Technical insights, blueprints, and data-driven guides on SEO, web speed, and paid conversion engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass p-8 hover:bg-white/[0.02] border-white/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase mb-4 block">
                    {post.tag}
                  </span>
                                    <h2 className="text-lg font-bold text-slate-900 mb-4 leading-snug hover:text-amber-500 transition-colors duration-250">
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
