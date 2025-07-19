
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import DemoSection from "../components/DemoSection";

const LandingPage = () => {
  return (
    <main className="overflow-hidden rounded-sm border border-solid bg-neutral-700 border-white border-opacity-10">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;
