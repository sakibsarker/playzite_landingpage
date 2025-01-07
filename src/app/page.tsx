"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";

import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";

const page = () => {
  return (
    <>
      <HeroSection />

      <div className="w-full h-full bg-[#161b29] relative">
        {/* Single red glow on the top */}
        <div className="flex justify-center items-center h-screen">
          <div className="w-full h-full bg-gradient-to-b from-primary/50 to-[#161b29]" />
        </div>

        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-primary blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-primary blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-primary blur-[130px] opacity-60" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:h-[800px] w-[150px] h-[150px] semi-circle bg-primary blur-[130px] opacity-60" />
        </div>

        <div className="absolute inset-0">
          <PromoSlider />
          <CardComponents />
        </div>
      </div>

      {/* <CommunityCard /> */}
    </>
  );
};

export default page;
