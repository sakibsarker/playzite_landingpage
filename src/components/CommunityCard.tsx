import Image from "next/image";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
  FaTelegram,
  FaReddit,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function CommunityCard() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 50,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaDiscord, href: "#", label: "Discord" },
    { icon: FaTelegram, href: "#", label: "Telegram" },
    { icon: FaReddit, href: "#", label: "Reddit" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0D0827] to-[#0D0827]  bg-[#150B2E] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative w-full h-full md:w-[450px] md:h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/imgbox.png"
                alt="HODL Community Member"
                width={800}
                height={600}
                className="object-cover"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                <h1 className="text-white font-inter tracking-wide font-medium">
                  NO TE LO PIERDAS
                </h1>
              </div>
              <h2 className="text-5xl font-bebasNeue font-bold tracking-wider text-white my-5 uppercase">
                SÍGUENOS
              </h2>

              <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                Conéctate con nosotros en las redes sociales y sé el primero en
                enterarte de nuestras promociones exclusivas, bonos especiales y
                emocionantes novedades. Únete a la comunidad de Playzite y vive
                la emoción del juego al máximo. ¡No te pierdas nada!
              </p>

              <div className="flex gap-2 justify-start items-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B2456] to-[#1E1736] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
