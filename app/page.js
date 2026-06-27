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
  title: "Growth Nest — Digital Marketing Agency for Local Businesses",
  description: "Growth Nest builds custom websites, local SEO strategies, social media campaigns, and high-ROAS paid ads that generate real leads for local businesses.",
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
