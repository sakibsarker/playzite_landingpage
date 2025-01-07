import Image from "next/image";
import { motion } from "framer-motion";
import { useLinepros } from "@/hooks/useLinepros";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
  FaTelegram,
  FaReddit,
} from "react-icons/fa6";
export default function CardComponents() {
  const { actions: lp } = useLinepros();

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
    <div className="bg-gradient-to-br from-black to-secondary p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6 py-20">
        {/* Withdraw Section */}
        <motion.div
          className="relative border-2 border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="relative w-full h-full md:w-[450px] md:h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664289.png"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium uppercase">
                    bienvenido
                  </h1>
                </div>
                <h2 className="text-5xl font-bebasNeue font-bold tracking-wider text-white my-5 uppercase">
                  TU NUEVA
                  <br />
                  EXPERIENCIA
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  Somos tu comunidad, tu acceso al mejor entretenimiento y tu
                  aliado para momentos únicos. Valoramos tu confianza y
                  trabajamos contigo para garantizar una experiencia llena de
                  seguridad y privacidad.
                </p>
              </div>
              <button
                className=" mt-5 bg-primary hover:bg-hovercolr text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </motion.div>

        {/* Deposit Section */}
        <motion.div
          className="relative  border-2 border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium uppercase">
                    10% gratis
                  </h1>
                </div>
                <h2 className="text-5xl font-bebasNeue font-bold tracking-wider text-white my-5 uppercase">
                  DEPOSITA
                </h2>

                <p className="text-lg  tracking-wide font-light text-white leading-snug ">
                  Haz tus depósitos de forma segura y con total confianza.
                  Nuestro equipo de servicio al cliente está listo para
                  asistirte en cada paso, asegurando que todo sea rápido y
                  sencillo.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-hovercolr text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Depositar
              </button>
            </div>
            <div className="relative w-full h-full md:w-[450px] md:h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664286.png"
                width={450}
                height={450}
                alt="Crypto icon"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Withdraw Section */}
        <motion.div
          className="relative border-2 border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="relative w-full h-full md:w-[450px] md:h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664285.png"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium uppercase">
                    retiros rápidos
                  </h1>
                </div>
                <h2 className="text-5xl font-bebasNeue font-bold tracking-wider text-white my-5 uppercase">
                  RETIRa de forma fácil cuando quieras
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  Realiza tus retiros sin complicaciones, con el respaldo y
                  apoyo de nuestro servicio al cliente. Estamos aquí para
                  garantizar que tengas acceso a tus fondos de manera fácil y
                  segura.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-hovercolr text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </motion.div>
        {/* Deposit Section */}
        <motion.div
          className="relative  border-2 border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium uppercase">
                    seguridad
                  </h1>
                </div>
                <h2 className="text-5xl font-bebasNeue font-bold tracking-wider text-white my-5 uppercase">
                  UNA EXPERIENCIA CONFIABLE Y SEGURA
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  En Playzite, estamos comprometidos con brindarte una
                  plataforma donde la seguridad y la confianza son nuestra
                  prioridad. Todo está diseñado pensando en tu tranquilidad.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-hovercolr text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Crear Cuenta
              </button>
            </div>
            <div className="relative w-full h-full md:w-[450px] md:h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664287.png"
                width={450}
                height={450}
                alt="Crypto icon"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>
        </motion.div>
        {/* Withdraw Section */}
        <motion.div
          className="relative border-2 border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="relative w-full h-full md:w-[450px] md:h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664308.png"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium uppercase">
                    10% GRATIS
                  </h1>
                </div>

                <h2 className="text-5xl font-bebasNeue font-bold tracking-wider text-white my-5 uppercase">
                  BONO DEL 10% EXTRA <br />
                  CON TU DEPOSITO
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  Aprovecha un bono del 10% en tus depósitos, automáticamente
                  acreditado a tu cuenta. Por ejemplo, si depositas $10,000, tu
                  saldo final será de $11,000.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-hovercolr text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Depositar
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative  border-2 border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B2456] to-[#1E1736] hover:from-gray-500/30 hover:to-gray-700/40 transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-primary border-r-secondary border-b-secondary"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-200" />
                  </a>
                ))}
              </div>
            </div>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
