import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLinepros } from "@/hooks/useLinepros";

import { Jost, Inter } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export default function HeroSection() {
  const { trackHeight, actions: lp } = useLinepros();
  const [scrollDirection, setScrollDirection] = useState("up");
  const navImages = [
    "/images/Symbol.png",
    "/images/Symbol1.png",
    "/images/Symbol2.png",
    "/images/Symbol4.png",
    "/images/Symbol5.png",
    "/images/Symbol6.png",
    "/images/Symbol7.png",
    "/images/Symbol8.png",
    "/images/Symbol9.png",
    "/images/Symbol10.png",
    "/images/Symbol11.png",
    "/images/Symbol12.png",
    "/images/Symbol13.png",
    "/images/Symbol14.png",
    "/images/Symbol15.png",
    "/images/Symbol16.png",
    "/images/Symbol17.png",
    "/images/Symbol18.png",
    "/images/Symbol19.png",
    "/images/Symbol20.png",
    "/images/Symbol21.png",
    "/images/Symbol22.png",
    "/images/Symbol23.png",
  ];

  const features = [
    {
      icon: "/images/Group2085663741.png",
    },
    {
      icon: "/images/Group2085663746.png",
    },
    {
      icon: "/images/Group2085663743.png",
    },
    {
      icon: "/images/Group2085663745.png",
    },
  ];

  useEffect(() => {
    trackHeight();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down"); // Scrolling down
      } else {
        setScrollDirection("up"); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="overflow-hidden  ">
      <div className="relative flex flex-col items-start justify-start pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#21772B]">
          <Image
            src="/images/bannerimg.png"
            alt="Crypto Background"
            height={1000}
            width={1800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  bg-gradient-to-b from-gray-600/5 to-[#21772B] border-none" />
        </div>

        {/* Hero Text and Content */}
        <div className="relative z-10 text-start  px-5 md:px-32 py-10 md:py-40">
          <div>
            <div className="inline-flex px-4 py-2 items-center justify-center w-auto rounded-xl transition-all duration-200 shadow-[inset_0_0_6px_rgba(255,255,255,0.5)] border-2 border-primary border-r-primary border-b-primary">
              <h1
                className={`text-white tracking-wide font-medium uppercase ${inter.className}`}
              >
                RD$200 gratis
              </h1>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl py-10 font-bold text-white  tracking-wider  items-start justify-start text-start ">
            <motion.span
              className=" block"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              RECIBE RD$200
            </motion.span>
            <motion.span
              className=" uppercase block"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              Gratis al crear
            </motion.span>{" "}
            <motion.span
              className="uppercase"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            >
              tu cuenta*
            </motion.span>
          </h1>

          <p
            className={`text-md md:text-3xl pb-10 tracking-wide text-start items-start justify-start text-white ${jost.className}`}
          >
            <motion.span
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Abre tu cuenta en Playzite y comienza a apostar con
            </motion.span>
            <motion.span
              className=" block"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              {" "}
              RD$200 de regalo. Da el primer paso hacia tus mejores
            </motion.span>{" "}
            <motion.span
              className=" block"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
            >
              jugadas y vive la emoción de ganar con nosotros.
            </motion.span>
          </p>
          <button
            className={` bg-secondary hover:bg-primary text-white rounded-2xl px-5 py-4 text-xl tracking-wide font-medium transition-colors duration-200 ${inter.className}`}
            onClick={lp.showJoin}
          >
            {" "}
            Crear Cuenta
          </button>
        </div>
        {/* promo */}
        <div className="flex gap-4  px-5 md:px-20 ">
          <div className="scroll-container">
            <div className="scroll-content">
              {/* Your existing promo cards */}
              <div className="flex gap-4 px-5 md:px-20">
                {promos.map((promo, index) => (
                  <div
                    key={index}
                    className="relative w-[calc(40vw-2rem)] min-w-[400px] md:w-[calc(40vw-2rem)] md:min-w-[600px]  overflow-hidden rounded-3xl border-2 border-gray-600/80 backdrop-blur-md"
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
                        className={` bg-secondary hover:bg-primary w-fit mt-5 text-white rounded-2xl px-5 py-4 text-xl tracking-wide font-medium transition-colors duration-200 ${inter.className}`}
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
        </div>
      </div>
    </div>
  );
}
