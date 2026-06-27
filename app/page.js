import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/Hero";
import TrustCounters from "@/components/TrustCounters";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServicesTeaser from "@/components/ServicesTeaser";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PricingPreviewSection from "@/components/PricingPreviewSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Growth Agency — High Conversion Web & Marketing Engine",
  description: "We don't run ads. We build businesses that customers can't ignore. Custom development, technical SEO, and conversion optimization.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <MouseGlow />
      
      <main className="relative z-10">
        <Hero />
        <TrustCounters />
        <LogoMarquee />
        <ProcessTimeline />
        <ServicesTeaser />
        <CaseStudiesSection />
        <PricingPreviewSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
