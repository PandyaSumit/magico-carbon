import { motion } from "framer-motion";

type Props = { fadeInUp: any };

export function HeroQuickStats({ fadeInUp }: Props) {
  return (
    <motion.div
      className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 md:py-16"
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#1000cc] mb-2">
              200+
            </p>
            <p className="text-white font-semibold text-sm md:text-base">
              MT Monthly Capacity
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#1000cc] mb-2">
              20+
            </p>
            <p className="text-white font-semibold text-sm md:text-base">
              Years of Excellence
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#1000cc] mb-2">
              500+
            </p>
            <p className="text-white font-semibold text-sm md:text-base">
              Global Clients
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#1000cc] mb-2">
              ISO
            </p>
            <p className="text-white font-semibold text-sm md:text-base">
              Certified Quality
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
