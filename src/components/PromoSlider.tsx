import React, { useEffect } from "react";
import { useLinepros } from "@/hooks/useLinepros";
const PromoSlider: React.FC = () => {
  const { trackHeight, actions: lp } = useLinepros();
  const promos = [
    {
      title: "GANA RD$200\nTOTALMENTE GRATIS",
      buttonText: "Crear Cuenta",
      image: "/placeholder.svg",
    },
    {
      title: "BONO DEL 10% EXTRA\nCON TU DEPOSITO",
      buttonText: "Deposita Ahora",
      image: "/placeholder.svg",
    },
    {
      title: "RETIRA TU DINERO\nCUANDO QUIERAS",
      buttonText: "Saber Más",
      image: "/placeholder.svg",
    },
  ];

  useEffect(() => {
    trackHeight();
  }, []);

  return (
    <div className="py-10">
      <div className="relative mx-auto w-screen px-32">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="relative w-[calc(40vw-2rem)] min-w-[600px] overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={promo.image}
                  alt=""
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
