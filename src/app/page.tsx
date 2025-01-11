"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";

import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";
// to-[#175820]
const page = () => {
  return (
    <>
      {/* <HeroSection /> */}

      <div className="w-full h-full bg-blacktext relative">
        <div
          className="absolute mt-[55vh] md:mt-[80vh] md:max-lg:mt-[55vh] lg:max-xl:mt-[45vh] top-0 left-0 w-full h-[650px] md:max-h-full md:max-lg:h-[500px] lg:max-xl:h-[500px]
             bg-[#3a5429]  to-transparent z-20 pointer-events-none blur-[100px]"
        />

        <div className="w-full h-[600px] md:h-[800px] md:max-lg:h-[500px] lg:max-xl:h-[500px]  bg-blacktext      " />
        <div className="w-full h-[500px] md:h-[600px] md:max-lg:h-[700px] lg:max-xl:h-[700px]  bg-blacktext    " />

        {/* Single red glow on the top */}

        <div className="flex justify-center items-center">
          <div className="h-[400px] bg-gradient-to-t from-blacktext  to-[#3a5429]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1800px] sm:h-[900px] md:max-lg:h-[800px] lg:max-xl:h-[100px] semi-circle bg-[#3a5429] blur-[130px] opacity-50" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-[800px] md:min-h-screen w-[200px] h-[1800px] sm:h-[700px] md:max-lg:h-[800px] lg:max-xl:h-[400px] semi-circle bg-[#3a5429] blur-[130px] opacity-50" />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[150px] h-[900px] md:h-[1100px] sm:h-[1300px] md:w-[500px]  md:max-lg:h-[1100px] lg:max-xl:h-[300px] xl:max-2xl:h-[100px]  bg-gradient-to-t from-[#3a5429]  to-blacktext blur-[130px] opacity-70" />
        </div>

        <div className="absolute inset-0">
          <HeroSection />
          <PromoSlider />
          <CardComponents />
        </div>
      </div>
    </>
  );
};

export default page;
