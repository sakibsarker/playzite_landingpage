"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";

import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";

const page = () => {
  return (
    <>
      <HeroSection />
      <PromoSlider />
      <CardComponents />

      {/* <CommunityCard /> */}
    </>
  );
};

export default page;
