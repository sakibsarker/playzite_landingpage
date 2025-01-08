import React, { useEffect } from "react";
import { useLinepros } from "@/hooks/useLinepros";
import { motion } from "framer-motion";
const PromoSlider: React.FC = () => {
  const { trackHeight, actions: lp } = useLinepros();
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
  ];

  useEffect(() => {
    trackHeight();
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {/* Your existing promo cards */}
        <div className="flex gap-4 px-5 md:px-20">
          {promos.map((promo, index) => (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
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
                  className={` bg-secondary hover:bg-primary w-fit mt-5 text-white rounded-2xl px-5 py-5 text-xl tracking-wide font-medium transition-colors duration-200 `}
                  onClick={lp.showJoin}
                >
                  {promo.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
