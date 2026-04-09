import Image from "next/image";
import { motion } from "framer-motion";
import { aboutHighlights, plantGallery } from "./hero-data";

type Props = { fadeInUp: any };

export function HeroAboutSection({ fadeInUp }: Props) {
  return (
    <motion.div
      className="bg-white py-12 md:py-16 border-b border-slate-200"
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#1000cc]">About Us</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-2">
              STATEOF THE ART ACTIVATED CARBON MANUFACTURING PLANT IN INDIA
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              At Magico Carbon, we take pride in offering a comprehensive range of activated carbon
              products crafted with the utmost precision to meet your exact specifications and quality
              requirements
            </p>

            <p>
              Partner with us and experience the magic of superior activated carbon products for your
              sustainable future
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#1000cc]">State-of-the-art Plant</p>
            <p className="text-lg font-semibold text-slate-900">Activated carbon manufacturing facility in India</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {plantGallery.map((src) => (
                <div
                  key={src}
                  className="relative h-40 w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-100"
                >
                  <Image
                    src={src}
                    alt="Magico Carbon plant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

