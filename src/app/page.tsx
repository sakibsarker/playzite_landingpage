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
        <div className="w-full h-[250px] bg-gradient-to-t from-blacktext  to-[#21772B]" />
        {/* Single red glow on the top */}

        <div className="flex justify-center items-center">
          <div className="h-[800px] bg-gradient-to-t from-blacktext  to-[#22762b]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[200px] h-[800px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[200px] h-[800px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[200px] h-[800px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[1200px] w-[150px] h-[1350px] lg:w-[150px] lg:h-[800px]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[400px] w-[150px] h-[1300px] bg-gradient-to-t from-primary  to-blacktext blur-[130px] opacity-40" />
        </div>

        <div className="absolute inset-0">
          <CardComponents />
        </div>
      </div>
    </>
  );
};

export default page;
