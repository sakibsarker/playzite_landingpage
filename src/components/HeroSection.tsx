import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLinepros } from "@/hooks/useLinepros";

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
  const loopedImages = [
    ...navImages,
    ...navImages,
    ...navImages,
    ...navImages,
    ...navImages,
    ...navImages,
    ...navImages,
  ];

  return (
    <div className="overflow-hidden bg-[#0D0827] ">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bannerimg.png"
            alt="Crypto Background"
            height={1000}
            width={1800}
            className="object-cover w-full"
          />
        </div>
        {/* Navigation Icons */}
        <div className="w-full p-1 bg-gray-800/70 backdrop-blur-sm ">
          <div className="overflow-hidden">
            <motion.div
              className="flex "
              animate={{ x: ["0%", "-50%"] }} // Adjust "-50%" based on content
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Adjust to control speed
                ease: "linear",
              }}
            >
              {loopedImages.map((imageSrc, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-400 cursor-pointer"
                >
                  <Image
                    src={imageSrc}
                    alt={`Navigation Icon ${index + 1}`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Hero Text and Content */}
        <div className="relative z-10 text-center space-y-8 pt-20 px-5">
          <h1 className="text-5xl sm:text-4xl font-bebasNeue md:text-8xl font-bold text-white tracking-wider gap-2 flex items-center justify-center whitespace-nowrap">
            YOU CAN
            <motion.div
              animate={{
                rotateX: [0, 90, -90, 0], // Quick flip sequence
              }}
              transition={{
                repeat: Infinity, // Infinite loop
                duration: 2, // Total animation duration (adjust as needed)
                ease: "easeInOut", // Smooth easing
                times: [0, 0.2, 0.8, 1], // Control keyframe timing
              }}
            >
              <Image
                src="/images/hodllogo.png"
                alt="logo"
                height={500}
                width={500}
                className="object-cover sm:w-1/3 md:w-[250px] lg:w-[300px]"
              />
            </motion.div>
            HERE
          </h1>

          <p className="text-xl sm:text-lg md:text-xl tracking-wider font-inter text-gray-100">
            Welcome hodlers to your supreme crypto entertainment & gaming.
          </p>
          <button className="relative group" onClick={lp.showJoin}>
            <div className="inline-flex px-9 py-4 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 hover:shadow-[0_0_15px_rgba(78,56,216,0.3)] shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
              <h1 className="text-white font-inter tracking-wider font-medium">
                Become a member
              </h1>
            </div>
          </button>
        </div>

        {/* Features Card */}
        <div className="relative mt-0 sm:mt-12 flex justify-center py-20">
          <div className="relative flex">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ marginLeft: index > 0 ? "-20px" : "0px" }}
                animate={{
                  marginLeft:
                    scrollDirection === "down"
                      ? index > 0
                        ? "-50px"
                        : "0px"
                      : index > 0
                      ? "-200px"
                      : "0px",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <motion.img
                  src={feature.icon}
                  alt="Feature Icon"
                  width={360}
                  height={360}
                  className="object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
