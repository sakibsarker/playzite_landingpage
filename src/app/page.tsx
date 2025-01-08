"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";

import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";

const page = () => {
  return (
    <>
      <HeroSection />

      <div className="w-full h-full bg-blacktext relative">
        <div className="w-full h-[250px] bg-gradient-to-t from-blacktext  to-[#21772B]" />
        {/* Single red glow on the top */}

        <div className="flex justify-center items-center">
          <div className="h-[800px] bg-gradient-to-t from-blacktext  to-[#22762b]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[200px] h-[1200px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[200px] h-[1200px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[200px] h-[1200px] semi-circle bg-primary blur-[130px] opacity-20" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[1600px] " />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[400px] w-[150px] h-[1300px] bg-gradient-to-t from-primary  to-blacktext blur-[130px] opacity-40" />
        </div>

        <div className="absolute inset-0">
          {/* <PromoSlider /> */}
          <CardComponents />
        </div>
      </div>

      {/* <CommunityCard /> */}
    </>
  );
};

export default page;
