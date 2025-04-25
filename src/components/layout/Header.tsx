import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header
      className="bg-zinc-950 flex w-full flex-col overflow-hidden items-center py-1 max-md:max-w-full"
      aria-label="Main navigation"
    >
      <div className="self-stretch z-10 flex w-full gap-5 text-base text-white tracking-[-0.16px] leading-loose flex-wrap justify-between pt-[54px] pb-[93px] px-[52px] max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/eea9f21a41014b13acb324820f1d5b25003166f8?placeholderIfAbsent=true"
          alt="Company Logo"
          className="aspect-[3.18] object-contain w-[118px] shrink-0 max-w-full"
        />
        <nav className="flex items-stretch gap-[40px_59px] font-normal mt-[13px]">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About Us
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">
            FAQ
          </a>
          <a href="#blog" className="hover:text-blue-400 transition-colors">
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>
        <Button className="bg-black shadow-[0px_8px_16px_rgba(0,111,255,0.2)] border overflow-hidden font-bold text-center px-[25px] py-2.5 rounded-2xl border-[rgba(0,119,255,1)] border-solid max-md:px-5">
          Sign in
        </Button>
      </div>
    </header>
  );
};

export default Header;
