import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = { fadeInUp: any };

export function HeroMainBanner({ fadeInUp }: Props) {
  const stats = [
    { val: "200+", lbl: "MT / Month" },
    { val: "20+", lbl: "Years" },
    { val: "500+", lbl: "Clients" },
    { val: "ISO", lbl: "Certified" },
  ];

  return (
    <motion.div
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden"
      //   className="relative min-h-[calc(100svh-6rem)] overflow-hidden bg-[#030712]"
      variants={fadeInUp}
    >
      <Image
        src="/images/hero-carbon.jpg"
        alt="Magico Carbon Manufacturing Facility"
        fill
        className="object-cover absolute inset-0 opacity-25"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/70 to-[#030712]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-[#030712]/20 to-transparent" />

      {/* Main centered content */}
      <motion.div
        className="relative z-10 min-h-[calc(100svh-6rem)] flex items-center text-center px-4 sm:px-6 py-16 sm:py-20"
        variants={fadeInUp}
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <motion.p
            className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/50 mb-7 sm:mb-8"
            variants={fadeInUp}
          >
            <span className="h-px w-8 bg-white/20" />
            Premium Activated Carbon Solutions
            <span className="h-px w-8 bg-white/20" />
          </motion.p>

          <motion.h1
            className="font-bold text-white leading-[0.94] tracking-tight text-[2.2rem] sm:text-[3.1rem] md:text-[4.2rem] lg:text-[5rem]"
            variants={fadeInUp}
          >
            WORLD&apos;S FINEST
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
              ACTIVATED CARBON
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 sm:mt-7 text-base sm:text-lg text-white/85 font-medium max-w-2xl leading-relaxed"
            variants={fadeInUp}
          >
            Quality Sourcing · Steam Activated · Reliable Partnerships
          </motion.p>
          <motion.p
            className="mt-3 text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed"
            variants={fadeInUp}
          >
            High-performance activated carbon grades for purification, refining,
            and industrial applications with dependable supply and technical
            support.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mt-7 sm:mt-8 justify-center w-full sm:w-auto max-w-md sm:max-w-none"
            variants={fadeInUp}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 h-12 bg-[#4f6ef7] text-white text-sm font-semibold rounded-lg hover:bg-[#3b5de7] transition-all"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center px-8 h-12 text-white/70 text-sm border border-white/20 rounded-lg hover:text-white hover:border-white/40 transition-all"
            >
              Know More
            </Link>
          </motion.div>

          <motion.div
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm text-white/70 text-center"
            variants={fadeInUp}
          >
            <span>+91 8010223355 · +1 (214) 779-6566</span>
            <span className="hidden sm:block h-3 w-px bg-white/20" />
            <span>sales@magicotradelinks.com</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        className="relative z-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10"
        variants={fadeInUp}
      >
        {stats.map((s, i) => (
          <div key={i} className="px-4 sm:px-8 py-5 sm:py-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">{s.val}</p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/55 mt-1">
              {s.lbl}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
