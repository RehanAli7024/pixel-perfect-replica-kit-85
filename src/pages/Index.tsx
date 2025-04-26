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
    <div className="relative">
      {/* Background section with image */}
      <div 
        className="absolute top-0 left-0 right-0 h-[700px]"
        style={{
          backgroundImage: backgroundLoaded 
            ? 'url(/BackgroundImage.png)' 
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />

      <div className="relative z-10">
        <Header />
        
        <div className="relative">
          <main>
            <div className="text-white text-center mt-20 relative z-10">
              <h1 className="text-[56px] font-bold tracking-[-1.8px] leading-[77px] pt-4 pb-[7px] px-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px] max-md:px-5">
                Take a Nap while we apply 
                <br />
                for your job
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
              <img 
                src="Searchbar.png" 
                alt="Searchbar" 
                className="mx-auto max-w-full mt-10"
              />
            </div>

            {/* Features section with margin and black background */}
            <div className="bg-[#000000] py-20 mt-20">
              <img 
                src="/Features.png" 
                alt="Features" 
                className="mx-auto max-w-full"
              />
              <ComingSoon />
            </div>
          </main>
        </div>

        <Footer className="bg-[#000000]" />
      </div>
    </div>
  );
};

export default Index;
