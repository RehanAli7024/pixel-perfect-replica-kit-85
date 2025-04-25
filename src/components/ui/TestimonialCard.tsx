import React from "react";

interface TestimonialCardProps {
  companyLogo: {
    icon?: string;
    text: string;
    logomark?: boolean;
  };
  quote: string;
  avatar: string;
  name: string;
  verifiedIcon: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyLogo,
  quote,
  avatar,
  name,
  verifiedIcon,
  role,
}) => {
  return (
    <article className="border w-full mt-8 first:mt-0 px-6 py-3 rounded-3xl border-[rgba(0,119,255,1)] border-solid max-md:px-5">
      <div className="items-stretch flex w-full flex-col gap-3">
        <div className="flex gap-[7px]">
          {companyLogo.logomark ? (
            <div className="flex flex-col items-stretch justify-center w-[29px] py-[9px]">
              <div className="flex shrink-0 h-[15px] rounded-[32px] border-[rgba(206,207,210,1)] border-solid border-[3px]" />
            </div>
          ) : (
            <img
              src={companyLogo.icon}
              alt="Company logo icon"
              className="aspect-[0.75] object-contain w-6 shrink-0"
            />
          )}
          <img
            src={companyLogo.text}
            alt="Company logo text"
            className="aspect-[3.13] object-contain w-[100px] shrink-0"
          />
        </div>
        <p className="text-white text-base font-normal leading-6 mt-3">
          {quote}
        </p>
      </div>
      <div className="items-center flex w-full gap-3 text-base leading-6 mt-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-full"
        />
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
          <div className="justify-center items-center flex gap-1 text-white font-semibold">
            <div className="self-stretch my-auto">{name}</div>
            <img
              src={verifiedIcon}
              alt="Verified icon"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            />
          </div>
          <div className="text-[#535862] font-normal">{role}</div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
