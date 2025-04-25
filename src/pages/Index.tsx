
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComingSoon from "@/components/ComingSoon";

const Index: React.FC = () => {
  return (
    <div className="relative bg-black flex flex-col items-center min-h-screen">
      {/* Blue light rays background effect */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(0,111,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute top-[-10%] left-[20%] w-[200px] h-[600px] rotate-[30deg] bg-[linear-gradient(180deg,rgba(0,111,255,0.15),transparent)] blur-[50px]" />
      <div className="absolute top-[-10%] left-[40%] w-[200px] h-[600px] rotate-[30deg] bg-[linear-gradient(180deg,rgba(0,111,255,0.15),transparent)] blur-[50px]" />
      <div className="absolute top-[-10%] left-[60%] w-[200px] h-[600px] rotate-[30deg] bg-[linear-gradient(180deg,rgba(0,111,255,0.15),transparent)] blur-[50px]" />
      
      <div className="self-stretch w-full max-md:max-w-full relative z-10">
        <Header />
        <main>
          <div className="text-white text-center mt-20">
            <h1 className="text-[56px] font-bold tracking-[-1.8px] leading-[77px] pt-4 pb-[7px] px-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px] max-md:px-5">
              Unleash the power of
              <br />
              AI Job Application
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
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
