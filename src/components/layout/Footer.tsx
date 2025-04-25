import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-zinc-950 self-stretch w-full overflow-hidden text-base font-normal tracking-[-0.16px] leading-loose mt-[30px] max-md:max-w-full"
      aria-label="Site footer"
    >
      <div className="flex flex-col relative min-h-[349px] w-full px-20 py-[74px] max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/70011b7a846bc4cf84f26803a43b03731465b62d?placeholderIfAbsent=true"
          alt="Footer background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex w-full max-w-6xl items-stretch text-sm tracking-[-0.14px] leading-[1.7] max-md:max-w-full">
          <div className="flex mr-[-47px] flex-col items-stretch max-md:max-w-full">
            <div>© 2024 Fargo LLC</div>
            <div className="bg-[rgba(0,62,161,1)] flex shrink-0 h-px mt-5 max-md:max-w-full" />
          </div>
          <div className="flex mr-[-47px] flex-col items-stretch">
            <div>Our Product</div>
            <div className="bg-[rgba(0,62,161,1)] flex shrink-0 h-px mt-[23px]" />
          </div>
          <div className="flex flex-col items-stretch whitespace-nowrap">
            <div>Company</div>
            <div className="bg-[rgba(0,62,161,1)] flex shrink-0 h-px mt-5" />
          </div>
        </div>
        <div className="relative flex w-[907px] max-w-full items-stretch gap-5 text-white flex-wrap justify-between mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4ada7a2ed1f244abb01b61d3e4e21db0/192322b14b397d2ae7f0e58e2e43f7be94a710c4?placeholderIfAbsent=true"
            alt="Company logos"
            className="aspect-[15.87] object-contain w-[638px] max-md:max-w-full"
          />
          <div>About Us</div>
        </div>
        <div className="relative flex w-[899px] max-w-full items-stretch gap-5 flex-wrap justify-between mt-3">
          <div className="flex flex-col items-stretch mt-[11px]">
            <div className="flex items-stretch gap-[5px]">
              <div className="text-white grow">Fargo template by </div>
              <div className="text-white">Nick Stepuk</div>
            </div>
            <div className="flex items-stretch gap-1.5 mt-3">
              <div className="text-white grow">Part of </div>
              <div className="flex items-stretch gap-0.5">
                <div className="text-white grow">Remix Unlimited</div>
                <div className="text-white"> collection</div>
              </div>
            </div>
          </div>
          <nav className="flex items-stretch gap-[40px_100px] text-white whitespace-nowrap">
            <div className="flex flex-col">
              <a
                href="#benefits"
                className="hover:text-blue-400 transition-colors"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="mt-8 hover:text-blue-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="self-stretch mt-7 hover:text-blue-400 transition-colors"
              >
                Testimonials
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#faq" className="hover:text-blue-400 transition-colors">
                FAQ
              </a>
              <a
                href="#blog"
                className="mt-[31px] hover:text-blue-400 transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="self-stretch mt-[29px] hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
