
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComingSoon from "@/components/ComingSoon";

const Index: React.FC = () => {
  return (
    <div className="bg-black flex flex-col items-center min-h-screen">
      <div className="self-stretch w-full max-md:max-w-full">
        <Header />
        <main>
          <div className="text-white text-center mt-20">
            <h1 className="text-[64px] font-medium leading-none tracking-[-1.92px] max-md:text-[40px]">
              Pick your plan
            </h1>
            <p className="text-base font-normal leading-loose tracking-[-0.16px] mt-[29px]">
              No hidden fees, 100% secure payment, cancel anytime
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
