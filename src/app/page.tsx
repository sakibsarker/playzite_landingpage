"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";

import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";

const page = () => {
  return (
    <>
      <HeroSection />
      {/* <PromoSlider /> */}

      <div className="w-full h-full bg-blacktext relative">
        <div className="w-full h-[250px] md:h-[500px] md:max-lg:h-[400px] lg:max-xl:h-[500px] bg-gradient-to-t from-blacktext  to-[#175820]" />
        {/* Single red glow on the top */}

        <div className="flex justify-center items-center">
          <div className="h-[400px] bg-gradient-to-t from-blacktext  to-[#22762b]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1500px] sm:h-[100px] md:max-lg:h-[1200px] lg:max-xl:h-[100px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1500px] sm:h-[400px] md:max-lg:h-[1000px] lg:max-xl:h-[500px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[150px] h-[1500px] md:min-h-screen sm:h-[1000px] md:w-[500px]  sm:max-md:h-[100] md:max-lg:h-[800px] lg:max-xl:h-[300px] xl:max-2xl:h-[100px]  bg-gradient-to-t from-primary  to-blacktext blur-[130px] opacity-50" />
        </div>
        <div className="absolute inset-0">
          <CardComponents />
        </div>
      </div>
    </>
  );
};

export default page;
