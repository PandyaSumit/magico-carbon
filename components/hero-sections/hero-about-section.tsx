import Image from "next/image";
import { motion } from "framer-motion";
import { aboutHighlights, plantGallery } from "./hero-data";

type Props = { fadeInUp: any };

export function HeroAboutSection({ fadeInUp }: Props) {
  return (
    <motion.section
      className="bg-[#f8fafc] py-14 sm:py-16 lg:py-20 border-b border-slate-200/80"
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#1000cc] mb-3 font-semibold">
            About Us
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            State-of-the-Art Activated Carbon Manufacturing Plant in India
          </h3>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            At Magico Carbon, we deliver precision-engineered activated carbon
            solutions tailored for industrial performance and sustainability.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* LEFT → HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="group p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#1000cc] font-semibold">
                  {item.label}
                </p>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed min-h-[2.5rem]">
                  {item.detail}
                </p>

                {/* subtle hover line */}
                <div className="mt-3 h-[2px] w-0 bg-[#1000cc] group-hover:w-10 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* RIGHT → IMAGE */}
          <div className="relative">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src={plantGallery[0]}
                alt="Magico Carbon plant"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
