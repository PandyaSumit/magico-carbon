import { motion } from "framer-motion";
import { HeroMainBanner } from "./hero-sections/hero-main-banner";

export function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.16 } },
  };

  return (
    <motion.section className="relative overflow-hidden bg-white" variants={staggerContainer}>
      <HeroMainBanner fadeInUp={fadeInUp} />
    </motion.section>
  );
}

