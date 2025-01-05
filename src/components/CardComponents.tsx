import Image from "next/image";
import { motion } from "framer-motion";
import { useLinepros } from "@/hooks/useLinepros";

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
  return (
    <div className="bg-gradient-to-br from-[#0D0827] to-[#0D0827] p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Withdraw Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
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
              <div className="items-center ">
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
                <button
                  className="bg-gradient-to-br mb-5 mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                  onClick={lp.showJoin}
                >
                  Crear Cuenta
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Deposit Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
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
                className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
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
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
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
                className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </motion.div>
        {/* Deposit Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
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
                className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
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
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
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
                className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200"
                onClick={lp.showJoin}
              >
                Depositar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
