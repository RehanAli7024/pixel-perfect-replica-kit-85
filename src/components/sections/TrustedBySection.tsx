import React from "react";

const TrustedBySection: React.FC = () => {
  return (
    <section
      className="bg-zinc-950 flex w-full flex-col overflow-hidden items-stretch px-[37px] py-[39px] max-md:max-w-full max-md:px-5"
      aria-label="Trusted by companies"
    >
      <h2 className="text-white text-base font-normal leading-loose tracking-[-0.16px] text-center self-center">
        Trusted by industry leaders
      </h2>
      <div className="overflow-hidden mt-[29px] rounded-3xl max-md:max-w-full">
        <div className="border flex flex-col items-stretch pb-4 px-6 rounded-3xl border-[rgba(0,111,255,0.2)] border-solid max-md:max-w-full max-md:px-5">
          <div className="flex shrink-0 h-px max-md:max-w-full" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/a9e7825aebd622965a913e5a82a32f072c1386e1?placeholderIfAbsent=true"
            alt="Trusted companies logos"
            className="aspect-[15.87] object-contain w-[1139px] self-center max-w-[1139px] mt-[15px] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
