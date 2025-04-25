import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  isWide?: boolean;
  hasPadding?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  children,
  isWide = false,
  hasPadding = false,
}) => {
  return (
    <article
      className={`border flex min-w-60 flex-col overflow-hidden ${isWide ? "grow shrink w-[750px]" : "grow shrink w-[412px]"} ${hasPadding ? "pl-[35px] pr-20 pt-[400px] pb-10" : "px-[35px] py-[39px]"} rounded-3xl border-[rgba(0,119,255,1)] border-solid max-md:px-5 ${hasPadding ? "max-md:pt-[100px]" : ""} ${isWide ? "max-md:max-w-full" : ""}`}
    >
      {children}
      <div className="text-zinc-200 text-xl font-medium leading-none mt-[30px]">
        {title}
      </div>
      <div className="text-zinc-400 text-[15px] font-normal leading-[26px] mt-[22px]">
        {description.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < description.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};

export default FeatureCard;
