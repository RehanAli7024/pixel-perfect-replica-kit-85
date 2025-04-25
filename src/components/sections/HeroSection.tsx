import React from "react";
import SearchBar from "@/components/ui/SearchBar";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-zinc-950 flex w-full flex-col overflow-hidden items-center py-1 max-md:max-w-full"
      aria-label="Hero section"
    >
      <div className="flex min-h-[445px] w-[949px] max-w-full flex-col items-center -mt-2.5 pt-6 pb-[42px] px-8 rounded-3xl max-md:px-5">
        <div className="flex w-[704px] max-w-full flex-col items-center text-white text-center">
          <h1 className="w-full text-[56px] font-bold tracking-[-1.8px] leading-[77px] pt-4 pb-[7px] px-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px] max-md:px-5">
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
        <SearchBar />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/bc1ae3e6f36ff214adb3842dd4cdab1b557d4b1f?placeholderIfAbsent=true"
        alt="AI Job Application Dashboard"
        className="aspect-[1.41] object-contain w-[959px] shadow-[0px_0px_10px_rgba(0,111,255,1)] max-w-full rounded-2xl"
      />
    </section>
  );
};

export default HeroSection;
