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

  useEffect(() => {
    trackHeight();
  }, []);

  return (
    <div className="overflow-hidden relative  ">
      <div className="relative flex flex-col items-start justify-start ">
        {/* Background Image */}

        <div className="absolute inset-0 ">
          <Image
            src="/images/bannerimg.png"
            alt="Crypto Background"
            height={1000}
            width={1800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Hero Text and Content */}
        <div className="relative z-10 text-start  px-5 py-10 md:px-32  md:py-40 md:max-lg:py-10 lg:max-xl:py-10 md:max-lg:px-10 lg:max-xl:px-10">
          <div>
            <div className="inline-flex px-4 py-2 items-center justify-center w-auto rounded-xl transition-all duration-200 shadow-[inset_0_0_6px_rgba(255,255,255,0.5)] border-2 border-primary border-r-primary border-b-primary">
              <h1
                className={`text-white tracking-wide font-medium uppercase ${inter.className}`}
              >
                RD$200 gratis
              </h1>
            </div>
          </div>

          <h1 className="text-4xl z-20 md:text-6xl md:max-lg:text-6xl lg:max-xl:text-6xl py-10 font-black text-white  items-start justify-start text-start ">
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
            className={`text-sm z-20 md:text-3xl md:max-lg:text-2xl lg:max-xl:text-3xl pb-10 tracking-wide text-start items-start justify-start text-white ${jost.className}`}
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
            className={` bg-secondary z-20  hover:bg-primary text-white rounded-2xl px-5 py-4 text-xl tracking-wide font-medium transition-colors duration-200 ${inter.className}`}
            onClick={lp.showJoin}
          >
            {" "}
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
