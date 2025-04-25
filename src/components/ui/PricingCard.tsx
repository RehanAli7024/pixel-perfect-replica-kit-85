import React from "react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  billingCycle,
  features,
  isPopular = false,
}) => {
  return (
    <div className="w-[33%] max-md:w-full max-md:ml-0">
      <div className="grow rounded-3xl max-md:max-w-full max-md:mt-6">
        <div className="border flex w-full flex-col pb-6 px-6 rounded-3xl border-[rgba(0,111,255,0.2)] border-solid max-md:max-w-full max-md:px-5">
          <div className="self-stretch flex shrink-0 h-px" />
          <h3 className="text-white text-[28px] font-semibold leading-loose tracking-[-0.84px] mt-[34px]">
            {name}
          </h3>
          <p className="text-white text-base font-normal leading-loose tracking-[-0.16px] mt-5">
            {description}
          </p>
          <div className="flex items-stretch gap-[7px] whitespace-nowrap mt-[53px] max-md:mt-10">
            <div className="text-white text-[28px] font-semibold leading-loose tracking-[-0.84px] grow">
              ${price}
            </div>
            <div className="text-white text-base font-normal leading-loose tracking-[-0.16px] mt-2.5">
              /{billingCycle === "monthly" ? "month" : "year"}
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "flex items-stretch gap-4 text-base text-white font-normal tracking-[-0.16px] leading-loose mt-[46px] max-md:mt-10"
                  : "flex items-stretch gap-4 text-base text-white font-normal tracking-[-0.16px] leading-loose mt-[17px]"
              }
            >
              <img
                src={`URL_${220 + index}`}
                alt="Checkmark"
                className="aspect-[0.89] object-contain w-6 shrink-0"
              />
              <div
                className={
                  index === 1 || index === 2 ? "basis-auto my-auto" : "my-auto"
                }
              >
                {feature}
              </div>
            </div>
          ))}

          {isPopular ? (
            <div className="bg-black shadow-[0px_8px_16px_rgba(0,111,255,0.2)] self-stretch text-base text-white font-bold text-center tracking-[-0.16px] leading-loose mt-[37px] rounded-2xl">
              <div className="border pb-[26px] px-0.5 rounded-2xl border-[rgba(0,119,255,1)] border-solid">
                <div className="flex w-[360px] shrink-0 max-w-full h-px mx-3.5 max-md:mx-2.5" />
                <div className="z-10 overflow-hidden pt-[19px] px-[70px] rounded-[308px] max-md:px-5">
                  Get Started
                </div>
              </div>
            </div>
          ) : (
            <Button className="border self-stretch text-base text-white font-normal text-center tracking-[-0.16px] leading-loose mt-[37px] px-[70px] py-[22px] rounded-2xl border-[rgba(255,255,255,0.1)] border-solid max-md:px-5 hover:bg-zinc-900 transition-colors">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
