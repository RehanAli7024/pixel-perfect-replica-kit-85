import React, { useState } from "react";
import PricingCard from "@/components/ui/PricingCard";

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleBillingCycleChange = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      description: "For individuals",
      monthlyPrice: 10,
      yearlyPrice: 96, // 20% discount applied
      features: [
        "1 project",
        "2 Team Members",
        "10 Integrations",
        "Encrypted protocol",
        "Regular Support",
        "Custom Code",
        "AI Assistant",
        "Blast Firewall",
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: "Optimal",
      description: "For small teams",
      monthlyPrice: 25,
      yearlyPrice: 240, // 20% discount applied
      features: [
        "1 project",
        "2 Team Members",
        "10 Integrations",
        "Encrypted protocol",
        "Regular Support",
        "Custom Code",
        "AI Assistant",
        "Blast Firewall",
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: "Ultimate",
      description: "For enterprise",
      monthlyPrice: 75,
      yearlyPrice: 720, // 20% discount applied
      features: [
        "1 project",
        "2 Team Members",
        "10 Integrations",
        "Encrypted protocol",
        "Regular Support",
        "Custom Code",
        "AI Assistant",
        "Blast Firewall",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="bg-black flex flex-col items-center" id="pricing">
      <div className="w-[157px] max-w-full overflow-hidden text-base text-white font-normal whitespace-nowrap tracking-[-0.16px] leading-loose mt-[113px] rounded-[393px] max-md:mt-10">
        <div className="border flex flex-col items-stretch pb-[9px] px-4 rounded-[393px] border-[rgba(255,255,255,0.1)] border-solid">
          <div className="flex shrink-0 h-px" />
          <div className="mt-2.5">Pricing</div>
        </div>
      </div>
      <h2 className="text-white text-[64px] font-medium leading-none tracking-[-1.92px] text-center mt-[63px] max-md:text-[40px] max-md:mt-10">
        Pick your plan
      </h2>
      <p className="text-white text-base font-normal leading-loose tracking-[-0.16px] text-center mt-[29px]">
        No hidden fees, 100% secure payment, cancel anytime
      </p>
      <div className="bg-[rgba(0,17,51,1)] w-[262px] max-w-full overflow-hidden whitespace-nowrap mt-[53px] rounded-2xl max-md:mt-10">
        <div className="border flex w-full items-stretch p-1 rounded-2xl border-[rgba(0,111,255,0.2)] border-solid">
          <button
            onClick={() => handleBillingCycleChange("monthly")}
            className={`overflow-hidden text-base text-white font-normal tracking-[-0.16px] leading-loose rounded-xl ${billingCycle === "monthly" ? "bg-black" : ""}`}
          >
            <div
              className={`border pb-[13px] px-4 rounded-xl ${billingCycle === "monthly" ? "border-[rgba(255,255,255,0.1)] border-solid" : "border-transparent"}`}
            >
              <div className="flex shrink-0 h-px" />
              <div className="mt-3.5 max-md:ml-2 max-md:mr-[9px]">Monthly</div>
            </div>
          </button>
          <button
            onClick={() => handleBillingCycleChange("yearly")}
            className={`bg-[rgba(255,255,255,0)] flex items-stretch gap-2 overflow-hidden px-6 py-2.5 rounded-xl max-md:px-5 ${billingCycle === "yearly" ? "bg-black" : ""}`}
          >
            <div className="text-white text-base font-normal leading-loose tracking-[-0.16px] grow my-auto">
              Yearly
            </div>
            <div className="overflow-hidden text-sm text-white font-semibold tracking-[-0.14px] leading-[1.7] px-1 py-[7px] rounded-[408px]">
              -20%
            </div>
          </button>
        </div>
      </div>
      <div className="w-full max-w-[1366px] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={
                billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice
              }
              billingCycle={billingCycle}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
