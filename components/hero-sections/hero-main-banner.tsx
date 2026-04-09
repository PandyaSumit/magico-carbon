import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = { fadeInUp: any };

export function HeroMainBanner({ fadeInUp }: Props) {
  return (
    <motion.div
      className="relative h-96 md:h-screen bg-slate-900 overflow-hidden"
      variants={fadeInUp}
    >
      <Image
        src="/images/hero-carbon.jpg"
        alt="Magico Carbon Manufacturing Facility"
        fill
        className="object-cover opacity-40 absolute inset-0"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/40"></div>

      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
            WORLD&apos;S FINEST
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1000cc] mb-6 leading-tight"
            variants={fadeInUp}
          >
            ACTIVATED CARBON
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white font-semibold mb-8"
            variants={fadeInUp}
          >
            Quality Sourcing • Steam Activated • Reliable Partnerships
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            At Magico Carbon, we take pride in offering a comprehensive range of
            activated carbon products crafted with the utmost precision to meet
            your exact specifications and quality requirements.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <button className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-3">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-95">
              Know More
            </button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-white"
            variants={fadeInUp}
          >
            <div>
              <p className="text-sm text-slate-300 uppercase mb-1">Call Us</p>
              <p className="text-lg md:text-xl font-bold">
                +91 8010223355 | +1 (214) 779-6566
              </p>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-500"></div>
            <div>
              <p className="text-sm text-slate-300 uppercase mb-1">Email</p>
              <p className="text-lg md:text-xl font-bold">
                sales@magicotradelinks.com
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
