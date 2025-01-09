import React, { useEffect, useRef, useState } from "react";
import { useLinepros } from "@/hooks/useLinepros";
import { motion } from "framer-motion";

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
    // Add more promos as needed
  ];

  useEffect(() => {
    trackHeight();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        scrollRight();
      }, 1000); // Autoplay every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="scroll-container overflow-x-scroll flex gap-4 px-5 md:px-20"
      >
        {/* Promo Cards */}
        {promos.map((promo, index) => (
          <motion.div
            key={index}
            className="relative w-[calc(40vw-2rem)] min-w-[400px] md:w-[calc(40vw-2rem)] md:min-w-[600px] overflow-hidden rounded-3xl border-2 border-gray-600/80 backdrop-blur-md"
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
              <h2 className="text-xl md:text-4xl font-bold leading-tight text-white whitespace-pre-line">
                {promo.title}
              </h2>
              <button
                className="bg-secondary hover:bg-primary w-fit mt-5 text-white rounded-2xl px-5 py-5 text-xl tracking-wide font-medium transition-colors duration-200"
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        &larr;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        &rarr;
      </button>
    </div>
  );
};

export default PromoSlider;
