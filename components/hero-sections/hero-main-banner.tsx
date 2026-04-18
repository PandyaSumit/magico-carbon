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
      className="relative min-h-[calc(100svh-4rem-env(safe-area-inset-top))] overflow-hidden"
      //   className="relative min-h-[calc(100svh-4rem-env(safe-area-inset-top))] overflow-hidden bg-[#030712]"
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
        className="relative z-10 min-h-[calc(100svh-4rem-env(safe-area-inset-top))] flex flex-col text-center px-5 sm:px-8 py-10 sm:py-20 max-sm:items-stretch max-sm:justify-start max-sm:pt-[max(6.5rem,calc(env(safe-area-inset-top)+5.25rem))] max-sm:pb-14 sm:items-center sm:justify-center"
        variants={fadeInUp}
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <motion.p
            className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/65 mb-6 sm:mb-8 leading-snug px-1"
            variants={fadeInUp}
          >
            <span className="hidden sm:block h-px w-8 bg-white/20" />
            Premium Activated Carbon Solutions
            <span className="hidden sm:block h-px w-8 bg-white/20" />
          </motion.p>

          <motion.h1
            className="font-bold text-white leading-[1.02] sm:leading-[0.95] tracking-tight text-[2rem] sm:text-[3.1rem] md:text-[4.2rem] lg:text-[5rem] px-0.5"
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
            className="mt-6 sm:mt-7 text-base sm:text-lg text-white/90 font-medium max-w-[22rem] sm:max-w-2xl leading-relaxed"
            variants={fadeInUp}
          >
            Quality Sourcing · Steam Activated · Reliable Partnerships
          </motion.p>
          <motion.p
            className="mt-3.5 sm:mt-3 text-sm sm:text-base text-white/80 max-w-[22rem] sm:max-w-2xl leading-relaxed"
            variants={fadeInUp}
          >
            High-performance activated carbon grades for purification, refining,
            and industrial applications with dependable supply and technical
            support.
          </motion.p>

          <motion.div
            className="flex justify-center w-full mt-8 sm:mt-9"
            variants={fadeInUp}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 min-h-12 sm:h-12 py-3 sm:py-0 bg-[#4f6ef7] text-white text-[15px] sm:text-sm font-semibold rounded-lg hover:bg-[#3b5de7] transition-all"
            >
              Contact Us <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        className="relative z-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 pb-[env(safe-area-inset-bottom)]"
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
