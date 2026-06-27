import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/Hero";
import TrustCounters from "@/components/TrustCounters";
import LogoMarquee from "@/components/LogoMarquee";
import AboutTeaser from "@/components/AboutTeaser";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServicesTeaser from "@/components/ServicesTeaser";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PricingPreviewSection from "@/components/PricingPreviewSection";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Conversion X — Premium Digital Growth & Performance Engine",
  description: "We don't run generic ads. We build businesses that customers can't ignore. Custom development, technical SEO, and conversion optimization.",
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
        <AboutTeaser />
        <ProcessTimeline />
        <ServicesTeaser />
        <CaseStudiesSection />
        <PricingPreviewSection />
        <ContactFormSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
