import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComingSoon from "@/components/ComingSoon";
import SearchBar from "@/components/ui/SearchBar";
import { OverlayShadow } from "@/components/layout/OverlayShadow";
import './Index.css'
import FeaturesSection from "@/components/layout/features";
import FAQ from "@/components/layout/FAQ";
import StandoutComparison from "@/components/layout/Standout";
import Dashboard from "@/components/layout/Dashboard";

const Index: React.FC = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <div className="glow-animation"></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="relative">
          <main>
            <div className="text-white text-center mt-20 relative z-10">
              <h1 className="text-[56px] font-bold tracking-[-1.8px] leading-[77px] pt-4 pb-[7px] px-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px] max-md:px-5">
                Take a Nap while we apply 
                <br />
                for your job
              </h1>
              <p className="text-lg font-medium leading-8 mt-6 max-md:max-w-full">
                Say goodbye to the outdated financial tools. Every small business
                owner,
                <br />
                regardless of the background, can now manage their business like a
                pro.
                <br />
                Simple. Intuitive. And never boring.
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <OverlayShadow/>
            </div>
            <Dashboard/>
            <FeaturesSection/>
            <FAQ/>
            <StandoutComparison/>
            {/* Features section with margin and black background */}
            <ComingSoon />
          </main>
        </div>

        <Footer className="bg-[#000000]" />
      </div>
    </div>
  );
};

export default Index;
