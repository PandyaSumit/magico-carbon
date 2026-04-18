import Image from "next/image";
import { motion } from "framer-motion";
import { broadSpecs, productRange } from "./hero-data";

type Props = { fadeInUp: any };

export function HeroProductRangeSection({ fadeInUp }: Props) {
  return (
    <motion.div
      className="bg-slate-950 text-white py-12 md:py-16"
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr,1fr]">
          <div>
            <h3 className="text-3xl font-bold mt-2">OUR RANGE OF PRODUCTS</h3>
            <p className="mt-4 text-slate-200 leading-relaxed">
              Each grade is engineered for the end application with proprietary
              activation and washing routines, ensuring consistent performance
              in adsorption capacity, mechanical strength, and purity.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {productRange.map((product) => (
              <div
                key={product.name}
                className="rounded-3xl border border-white/20 bg-white/5 p-4"
              >
                <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-white/20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h4 className="mt-4 text-lg font-semibold">{product.name}</h4>
                <p className="text-sm text-slate-200 mt-2">{product.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/20 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f9a02b]">
            Broad Specification
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {broadSpecs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  {spec.label}
                </p>
                <p className="text-xl font-bold mt-1">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
