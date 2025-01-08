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
  ];

  useEffect(() => {
    trackHeight();
  }, []);

  return (
    <div className="py-10">
      <div className="relative mx-auto w-full h-full px-32">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {promos.map((promo, index) => (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
              transition={{ type: "spring", stiffness: 300 }}
              key={index}
              className="relative w-[calc(40vw-2rem)] min-w-[600px] overflow-hidden rounded-3xl border-2 border-gray-600/80 backdrop-blur-md"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative flex h-[240px] flex-col justify-between p-8">
                <h2 className="text-4xl font-bold leading-tight text-white whitespace-pre-line">
                  {promo.title}
                </h2>
                <button
                  className=" w-fit mt-5 bg-primary hover:bg-hovercolr text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
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
