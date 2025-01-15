import React, { useEffect, useRef, useState } from "react";
import { useLinepros } from "@/hooks/useLinepros";
import { motion } from "framer-motion";
import { Jost, Inter } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const PromoSlider: React.FC = () => {
  const { trackHeight, actions: lp } = useLinepros();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const promos = [
    {
      title: "GANA RD$200\nTOTALMENTE GRATIS",
      buttonText: "Crear Cuenta",
      image: "/images/promo1.png",
    },
    {
      title: "BONO DEL 10% EXTRA\nCON TU DEPOSITO",
      buttonText: "Deposita Ahora",
      image: "/images/promo2.png",
    },
    {
      title: "RETIRA TU DINERO\nCUANDO QUIERAS",
      buttonText: "Saber Más",
      image: "/images/promo3.png",
    },
    {
      title: "GANA RD$200\nTOTALMENTE GRATIS",
      buttonText: "Crear Cuenta",
      image: "/images/promo1.png",
    },
  ];
  const extendedPromos = [...promos, ...promos];
  useEffect(() => {
    trackHeight();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        (scrollContainerRef.current.firstChild as HTMLElement)?.offsetWidth ||
        0;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      const cardWidth =
        (scrollContainerRef.current.firstChild as HTMLElement)?.offsetWidth ||
        0;

      if (scrollLeft >= scrollWidth / 2) {
        scrollContainerRef.current.scrollTo({ left: 0 });
      } else {
        scrollContainerRef.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        scrollRight();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative z-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="scroll-container overflow-x-scroll flex gap-4 "
      >
        {/* Promo Cards */}
        {extendedPromos.map((promo, index) => (
          <motion.div
            key={index}
            className="promo-card relative w-[calc(40vw-2rem)] min-w-[400px] md:w-[calc(40vw-2rem)] md:min-w-[600px] md:max-lg:w-[calc(40vw-2rem)] lg:max-xl:w-[calc(40vw-2rem)] md:max-lg:min-w-[400px] lg:max-xl:min-w-[400px]  overflow-hidden rounded-3xl border-2 border-gray-600/80 backdrop-blur-md"
          >
            <div className="absolute inset-0">
              <img
                src={promo.image}
                alt={promo.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative flex h-[240px] flex-col justify-between p-8">
              <h2 className="text-xl md:text-4xl font-black leading-tight text-white whitespace-pre-line">
                {promo.title}
              </h2>
              <button
                className={` bg-secondary hover:bg-primary w-fit mt-5 text-white rounded-2xl px-5 py-4 text-xl tracking-wide font-medium transition-colors duration-200 ${inter.className}`}
                onClick={lp.showJoin}
              >
                {promo.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white ml-2 p-3 rounded-lg hover:bg-black/70 transition"
      >
        &larr;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white mr-2 p-3 rounded-lg hover:bg-black/70 transition"
      >
        &rarr;
      </button>
    </div>
  );
};

export default PromoSlider;
