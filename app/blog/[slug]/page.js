import { getPostData, getSortedPostsData } from "@/lib/posts";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="btn-secondary !text-xs">Back to Blog</Link>
        </main>
        <Footer />
      </>
    );
  }

  const htmlContent = marked.parse(post.content);

  return (
    <>
      <Navbar />
      <MouseGlow />

      <main className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blob bg-blob-purple opacity-5 pointer-events-none" />

        <article className="container-tight relative z-10 max-w-2xl">
          <div className="mb-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 mb-8 transition-colors"
            >
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>
            <span className="label block mb-4">{post.tag}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex gap-4 items-center text-xs text-text-tertiary">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Render parsed HTML content cleanly with custom styling */}
          <div 
            className="prose max-w-none text-sm md:text-base text-text-secondary leading-relaxed font-light space-y-6 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-10 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-text-secondary [&>ul_strong]:text-slate-900 [&>p_strong]:text-slate-900 [&>blockquote]:border-l-4 [&>blockquote]:border-amber-500 [&>blockquote]:pl-4 [&>blockquote]:italic"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </main>

      <Footer />
    </>
  );
}
