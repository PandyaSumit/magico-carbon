import Image from "next/image";
import { motion } from "framer-motion";
import { industries } from "./hero-data";

type Props = { fadeInUp: any };

/** Desktop (lg+): 12-col bento — row1: 4+4+2+2, row2: 4+2+6. Below lg: stacked / simple grid with no orphan columns. */
const APPLICATION_CELL_LAYOUT = [
  "col-span-1 md:col-span-2 lg:col-span-4 row-span-1",
  "col-span-1 md:col-span-2 lg:col-span-4 row-span-1",
  "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
  "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
  "col-span-1 md:col-span-2 lg:col-span-4 row-span-1",
  "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
  "col-span-1 md:col-span-2 lg:col-span-6 row-span-1",
] as const;

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
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12 auto-rows-[180px] md:auto-rows-[200px]">
          {industries.map((industry, idx) => (
            <article
              key={industry.name}
              className={`relative overflow-hidden rounded-3xl shadow-xl ${APPLICATION_CELL_LAYOUT[idx % APPLICATION_CELL_LAYOUT.length]}`}
            >
              <Image src={industry.image} alt={industry.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h4 className="text-white text-sm md:text-base font-semibold">{industry.name}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
