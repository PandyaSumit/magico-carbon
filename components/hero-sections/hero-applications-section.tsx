import Image from "next/image";
import { motion } from "framer-motion";
import { industries } from "./hero-data";

type Props = { fadeInUp: any };

export function HeroApplicationsSection({ fadeInUp }: Props) {
  return (
    <motion.div className="py-12 md:py-16 bg-white border-b border-slate-200" variants={fadeInUp}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-8 md:mb-10 space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">APPLICATIONS</h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Discover the Endless Possibilities with Magico Carbon
          </p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 auto-rows-[180px] md:auto-rows-[200px] gap-3 sm:gap-4">
          {industries.map((industry, idx) => {
            const layoutClasses = [
              "col-span-2 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-1",
              "col-span-3 row-span-1",
            ];

            return (
              <article
                key={idx}
                className={`relative rounded-3xl overflow-hidden shadow-xl ${layoutClasses[idx % 7]}`}
              >
                <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h4 className="text-white text-sm md:text-base font-semibold">{industry.name}</h4>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

