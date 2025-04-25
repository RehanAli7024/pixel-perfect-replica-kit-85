import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComingSoon from "@/components/ComingSoon";

const Index: React.FC = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    // Comprehensive background image debugging
    const img = new Image();
    img.src = '/BackgroundImage.png';
    img.onload = () => {
      console.log('Background image loaded successfully');
      console.log('Image details:', {
        width: img.width,
        height: img.height,
        src: img.src
      });
      setBackgroundLoaded(true);
    };
    img.onerror = (error) => {
      console.error('Failed to load background image', error);
      console.log('Image source:', img.src);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: backgroundLoaded 
            ? 'url(/BackgroundImage.png)' 
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: backgroundLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <main>
            <div className="text-white text-center mt-20">
              <h1 className="text-[56px] font-bold tracking-[-1.8px] leading-[77px] pt-4 pb-[7px] px-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px] max-md:px-5">
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
            <ComingSoon />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
