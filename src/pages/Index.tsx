import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ATSScoreSection from "@/components/sections/ATSScoreSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";

const Index: React.FC = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="self-stretch w-full max-md:max-w-full">
        <Header />
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <ATSScoreSection />
        <TestimonialsSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
