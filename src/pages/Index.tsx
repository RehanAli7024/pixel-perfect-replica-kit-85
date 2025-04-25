
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComingSoon from "@/components/ComingSoon";

const Index: React.FC = () => {
  return (
    <div 
      className="relative bg-black flex flex-col items-center min-h-screen" 
      style={{
        backgroundImage: 'url(/lovable-uploads/ce9138b4-c2cc-452b-b15b-505b95aed045.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
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
