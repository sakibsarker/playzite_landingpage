"use client";
import React from "react";
import CardComponents from "@/components/CardComponents";
import CommunityCard from "@/components/CommunityCard";
import GameCard from "@/components/GameCard";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <CardComponents />
      <GameCard />
      <CommunityCard />
    </>
  );
};

export default page;
