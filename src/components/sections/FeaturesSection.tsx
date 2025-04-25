import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Insights at your fingertips",
      description:
        "All your data and finances in one place to provide quick answers and make decisions instantly.",
      content: (
        <div className="border self-stretch flex flex-col overflow-hidden text-sm text-[rgba(193,193,193,1)] tracking-[-0.56px] ml-[11px] px-9 py-[43px] rounded-[17px] border-[rgba(0,119,255,1)] border-solid max-md:ml-2.5 max-md:px-5">
          <div className="text-[rgba(191,192,193,1)] text-[15px] font-semibold tracking-[-0.59px]">
            Your Score
          </div>
          <div className="text-[rgba(247,69,69,1)] text-[17px] font-semibold tracking-[-0.66px] z-10 -mt-1 max-md:ml-[9px]">
            55/100
          </div>
          <div className="text-[rgba(191,192,193,1)] text-[8px] tracking-[-0.33px] ml-5 max-md:ml-2.5">
            17 Issues
          </div>
          <div className="mt-[13px]">Content</div>
          <div className="mt-[30px]">Format</div>
          <div className="mt-7">Sections</div>
          <div className="mt-[38px]">Skills</div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Manage in real time",
      description:
        "Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it's 2025.",
      content: (
        <div className="border flex w-full flex-col overflow-hidden text-xs text-[rgba(193,193,193,1)] leading-none ml-3 pt-[22px] pb-[9px] px-[15px] rounded-[17px] border-[rgba(0,119,255,1)] border-solid max-md:ml-2.5">
          <div className="text-sm font-semibold leading-none max-md:ml-[9px]">
            Application Report
          </div>
          <div className="mt-[13px]">50</div>
          <div className="mt-[30px]">40</div>
          <div className="mt-[30px]">30</div>
          <div className="mt-[30px]">20</div>
          <div className="mt-[30px]">10</div>
          <div className="flex min-h-3 items-center gap-[19px] text-[rgba(192,192,193,1)] whitespace-nowrap mt-2">
            <div className="self-stretch my-auto">Mon</div>
            <div className="self-stretch my-auto">Tue</div>
            <div className="self-stretch my-auto">Wed</div>
            <div className="self-stretch my-auto">Thu</div>
            <div className="self-stretch my-auto">Fri</div>
            <div className="self-stretch my-auto">Sat</div>
            <div className="self-stretch my-auto">Sun</div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Important business alerts",
      description:
        "Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.",
      content: (
        <div className="border self-center flex w-[301px] max-w-full flex-col overflow-hidden text-[11px] text-[rgba(193,193,193,1)] pl-[18px] pr-[41px] pt-[13px] pb-[22px] rounded-2xl border-[rgba(0,119,255,1)] border-solid max-md:pr-5">
          <div className="text-[21px] font-bold">
            35/50
            <br />
          </div>
          <div className="text-[10px] mt-[7px]">Applied</div>
          <div className="flex items-stretch gap-[9px] mt-24 max-md:mt-10">
            <div className="bg-[rgba(12,87,170,1)] flex w-[18px] shrink-0 h-[18px] rounded-[3px]" />
            <div className="my-auto">Hybrid Job</div>
          </div>
          <div className="flex items-stretch gap-2.5 mt-[19px]">
            <div className="bg-[rgba(10,141,208,1)] flex w-[18px] shrink-0 h-[18px] rounded-[3px]" />
            <div className="my-auto">In-office job</div>
          </div>
          <div className="flex items-stretch gap-2.5 mt-5">
            <div className="bg-[rgba(124,206,249,1)] flex w-[18px] shrink-0 h-[18px] rounded-[3px]" />
            <div className="my-auto">Remote job</div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Apply to these companies",
      description:
        "Bring your data with our built-in integrations for accounting, revenue tools and banking.",
      isWide: true,
      content: (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/8f3d920c7897c9bd72103560f9237fcd61940ad0?placeholderIfAbsent=true"
          alt="Partner companies"
          className="aspect-[2.4] object-contain w-full max-md:max-w-full"
        />
      ),
    },
    {
      id: 5,
      title: "You're in control",
      description:
        "Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.",
      isWide: true,
      hasPadding: true,
    },
  ];

  return (
    <section
      className="bg-zinc-950 flex w-full gap-[56px_35px] overflow-hidden flex-wrap px-[60px] py-[62px] max-md:max-w-full max-md:px-5"
      aria-label="Features"
    >
      <div className="flex w-[19px] shrink h-6 grow" />
      <div className="max-w-screen-xl min-w-60 text-white text-center pr-[var(--container-padding-desktop,] pl-[var(--container-padding-desktop,] gap-8 grow shrink w-[1211px] pt-0 pb-[32px)] max-md:max-w-full max-md:px-5">
        <div className="items-center flex w-full flex-col gap-12 max-md:max-w-full">
          <div className="max-w-screen-md items-stretch flex w-[768px] flex-col gap-6 max-md:max-w-full">
            <h2 className="w-full text-5xl font-semibold whitespace-nowrap tracking-[-0.96px] leading-[60px] gap-3 max-md:max-w-full max-md:text-[40px]">
              Features
            </h2>
            <p className="text-xl font-normal leading-[30px] mt-6 max-md:max-w-full">
              We believe Untitled should be accessible to all companies, no
              matter the size.
            </p>
          </div>
        </div>
      </div>

      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          isWide={feature.isWide}
          hasPadding={feature.hasPadding}
        >
          {feature.content}
        </FeatureCard>
      ))}
    </section>
  );
};

export default FeaturesSection;
