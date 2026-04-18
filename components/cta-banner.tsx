import { ArrowRight, Download } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#1000cc] via-[#3d33e0] to-[#1000cc] text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Experience the Magico Carbon difference with premium activated
              carbon, expert technical support, and reliable global supply.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span>Get a customized quote in 24 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span>Free product samples and technical data sheets</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span>Dedicated account manager for ongoing support</span>
              </li>
            </ul>
          </div>

          {/* Right CTA Buttons */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1000cc] font-bold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
              <Download className="w-5 h-5" />
              <span>Download Product Catalog</span>
            </button>

            <p className="text-center text-white/70 text-sm">
              📞 Call us: +91 8010223355 | +1 (214) 779-6566
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
