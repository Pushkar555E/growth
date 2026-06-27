import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export const metadata = {
  title: "Case Studies & Client Proof — Growth Agency",
  description: "Real proof, real results. Read detailed case studies detailing how we spiked reservations by 320%, hit #1 Maps pack ranking, and cut gym member acquisition cost by 45%.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <MouseGlow />
      <main className="pt-20">
        <CaseStudiesSection />
      </main>
      <Footer />
    </>
  );
}
