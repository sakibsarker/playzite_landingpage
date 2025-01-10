"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";

import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";
import HeroSectionTwo from "@/components/HeroSectionTwo";

const pagetwo = () => {
  return (
    <>
      <HeroSectionTwo />
      {/* <PromoSlider /> */}

      <div className="w-full h-full bg-blacktext relative">
        <div className="w-full h-[250px] md:h-[500px] md:max-lg:h-[1300px] lg:max-xl:h-[1500px] bg-gradient-to-t from-blacktext  to-[#34c748]/30 " />
        {/* Single red glow on the top */}

        <div className="flex justify-center items-center">
          <div className="h-[800px] bg-gradient-to-t from-blacktext  to-[#22762b]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1200px] sm:h-[800px] md:max-lg:h-[1500px] lg:max-xl:h-[1500px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1200px] sm:h-[800px] md:max-lg:h-[1500px] lg:max-xl:h-[1500px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1200px] sm:h-[800px] md:max-lg:h-[1500px] lg:max-xl:h-[1500px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[150px] h-[1400px] md:min-h-screen sm:h-[50px] md:w-[800px]  sm:max-md:h-[3000] md:max-lg:h-[500px] lg:max-xl:h-[1600px] xl:max-2xl:h-[100px]  bg-gradient-to-t from-primary  to-blacktext blur-[130px] opacity-50" />
        </div>
        <div className="absolute inset-0">
          <CardComponents />
        </div>
      </div>
    </>
  );
};

export default pagetwo;
