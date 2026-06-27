import BlogClient from "@/components/BlogClient";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
  title: "Blog — Technical Marketing Blueprints & SEO Guides",
  description: "Read the latest guides, technical breakdowns, and conversion optimization checklists by our senior Next.js development and SEO experts.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  return <BlogClient posts={posts} />;
}
