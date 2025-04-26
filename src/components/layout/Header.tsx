import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header
      className="bg-gradient-to-b from-zinc-950 to-transparent flex w-full flex-col overflow-hidden items-center py-1 max-md:max-w-full"
      aria-label="Main navigation"
    >
      <div className="self-stretch z-10 flex w-full max-w-6xl gap-5 text-base text-white tracking-[-0.16px] leading-loose flex-wrap justify-between pt-8 pb-12 px-4 md:px-6 mx-auto max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-1">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="aspect-[3.18] object-contain w-[118px] shrink-0 max-w-full"
          />
          <div className="text-xl font-bold text-white tracking-tight">
            ApplyBee AI
          </div>
        </div>
        <nav className="flex items-stretch gap-6 md:gap-10 font-normal mt-3">
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
