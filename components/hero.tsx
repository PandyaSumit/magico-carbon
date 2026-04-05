import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const industries = [
    {
      name: "Water Treatment",
      image: "/images/WATER_4_1.png",
    },
    {
      name: "Gold Recovery",
      image: "/images/WATER_4_2.png",
    },
    {
      name: "Air & Gas Treatment",
      image: "/images/WATER_4_3.png",
    },
    {
      name: "Food & Beverage",
      image: "/images/WATER_4_4.png",
    },
    {
      name: "Pharmaceutical / Medical",
      image: "/images/WATER_4_5.png",
    },
    {
      name: "Automotive",
      image: "/images/WATER_4_6.png",
    },
    {
      name: "Tobacco",
      image: "/images/WATER_4_7.png",
    },
  ];

  const aboutHighlights = [
    {
      label: "Sustainability-driven",
      detail: `We use locally sourced raw materials to support
communities & regional economy. Our energy-efficient manufacturing
process ensures eco-friendly practices with net zero wastage`,
    },
    {
      label: "Wide product range",
      detail:
        "Coconut Shell Steam Activated Carbon for purification, refinery, and metal extraction.",
    },
    {
      label: "Customizations available",
      detail: " pH-matching options for specific application requirements.",
    },
    {
      label: "Collaborative approach",
      detail: "Tailoring effective solutions for diverse customer needs.",
    },
    {
      label: "High-capacity factory",
      detail: "Reliable monthly supply of over 200 MT of activated carbon",
    },
  ];
  const plantGallery = [
    "/images/CARBON_2_1.png",
    "/images/CARBON_5_4.png",
    "/images/hero-carbon.jpg",
  ];
  const productRange = [
    {
      name: "Granular Activated Carbon",
      summary: "Superior filtration and efficient precious metal recovery.",
      image: "/images/CTC_Adsorption_3_2.png",
    },
    {
      name: "Powdered Activated Carbon",
      summary:
        "Versatile carbon for unlocking the potential of liquid applications.",
      image: "/images/CTC_Adsorption_3_4.png",
    },
    {
      name: "Pelletized Activated Carbon",
      summary: "Premium carbon used for air and water purification.",
      image: "/images/CTC_Adsorption_3_6.png",
    },
  ];
  const broadSpecs = [
    { label: "CTC Adsorption", value: "40 to 65" },
    { label: "Iodine Adsorption", value: "800 to 1250 mg/g" },
    { label: "Surface Area", value: "850 to 1300 m²/g" },
    { label: "Hardness", value: "97 to 99.8" },
    { label: "Apparent Density", value: "350 to 550 gms/ltr" },
    { label: "Moisture", value: "Less than 5%" },
    { label: "Ash Content", value: "Less than 5%" },
    { label: "pH", value: "6 to 8.8 to 11" },
  ];
  const detailSections = [
    {
      title: "Granular Activated Carbon (GAC)",
      body: "With high adsorptive capacity, Magico Carbon GAC removes contaminants from water, air, liquids and gases while recovering precious metals. Manufactured to filter small organics, it excels in municipal water treatment, waste gas scrubbing, mercury removal, and metal recovery.",
      image: "/images/CARBON_2_4.png",
    },
    {
      title: "Powdered Activated Carbon (PAC)",
      body: "PAC particles pass through an 80-mesh sieve and are ideal for taste, odor and color control in water and beverage applications. The economical grade reduces sludge, conserves resources, and is backed by analytical support.",
      image: "/images/CARBON_5_8.png",
    },
    {
      title: "Pelletized Activated Carbon",
      body: "Extruded pellets deliver consistent performance for VOC and mercury removal across air, gas and industrial streams. They retain adsorptive capacity after thermal oxidation and can be reactivated for multiple cycles.",
      image: "/images/CARBON_9_2.png",
    },
  ];
  const packagingDetails = {
    bagQuality: [
      "HDPE woven bags with inner liners (25kg, 50kg, 500kg jumbo).",
      "25kg PP plastic bags available in white or black from 175 to 200 microns.",
      "Industry-standard heat sealing and a safety factor of 5.1 for every shipment.",
    ],
    printing: [
      "Customized branding and label design handled by our in-house artists.",
      "Labels applied per customer requirement before dispatch.",
    ],
    shipment:
      "Our teams palletize carbon bags, fumigate containers per ISPM 15, and provide vessel connectivity updates plus tracking details.",
  };
  const contacts = [
    {
      label: "India Office",
      lines: [
        "A-14/2, Malviya Nagar Extn Saket, Delhi 110017",
        "Manufacturing plant located in Kerala, India",
      ],
    },
    {
      label: "United States Office",
      lines: ["13364 Spruce Wood Trl, Frisco, TX 75033"],
    },
  ];
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.16 } },
  };
  return (
    <motion.section
      className="relative overflow-hidden bg-white"
      variants={staggerContainer}
    >
      {/* Hero Banner with Image Background */}
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

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/40"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto">
            {/* Headline */}
            <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
              WORLD&apos;S FINEST
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1000cc] mb-6 leading-tight"
              variants={fadeInUp}
            >
              ACTIVATED CARBON
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl text-white font-semibold mb-8"
              variants={fadeInUp}
            >
              Quality Sourcing • Steam Activated • Reliable Partnerships
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              At Magico Carbon, we take pride in offering a comprehensive range
              of activated carbon products crafted with the utmost precision to
              meet your exact specifications and quality requirements.
            </motion.p>

            {/* CTA Buttons */}
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

            {/* Contact Info Below */}
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

      {/* Quick Stats Section */}
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

      {/* About Section */}
      <motion.div
        className="bg-white py-12 md:py-16 border-b border-slate-200"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#1000cc]">
                About Us
              </p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">
                STATEOF THE ART ACTIVATED CARBON MANUFACTURING PLANT IN INDIA
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                At Magico Carbon, we take pride in offering a comprehensive
                range of activated carbon products crafted with the utmost
                precision to meet your exact specifications and quality
                requirements
              </p>

              <p>
                Partner with us and experience the magic of superior activated
                carbon products for your sustainable future
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 p-4 bg-slate-50"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-600 mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-[#1000cc]">
                State-of-the-art Plant
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Activated carbon manufacturing facility in India
              </p>
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

      {/* Product Range */}
      <motion.div
        className="bg-slate-950 text-white py-12 md:py-16"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr,1fr]">
            <div>
              <h3 className="text-3xl font-bold mt-2">OUR RANGEOF PRODUCTS</h3>
              <p className="mt-4 text-slate-200 leading-relaxed">
                Each grade is engineered for the end application with
                proprietary activation and washing routines, ensuring consistent
                performance in adsorption capacity, mechanical strength, and
                purity.
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
                  <p className="text-sm text-slate-200 mt-2">
                    {product.summary}
                  </p>
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

      {/* Industry Applications Banner */}
      <motion.div
        className="py-12 md:py-16 bg-white border-b border-slate-200"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-slate-900 mb-10">
            APPLICATIONS
          </h3>
          <p className="text-center text-slate-600 max-w-3xl mx-auto">
            Discover the Endless Possibilities with Magico Carbon
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 auto-rows-[200px] gap-4">
            {industries.map((industry, idx) => {
              // custom layout pattern for 7 items
              const layoutClasses = [
                "col-span-2 row-span-1", // 1 (top-left big)
                "col-span-2 row-span-1", // 2 (top-right)
                "col-span-1 row-span-1", // 3
                "col-span-1 row-span-1", // 4
                "col-span-2 row-span-1", // 5 (middle right wide)
                "col-span-1 row-span-1", // 6
                "col-span-3 row-span-1", // 7 (bottom wide)
              ];

              return (
                <article
                  key={idx}
                  className={`relative rounded-3xl overflow-hidden shadow-xl ${layoutClasses[idx % 7]}`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h4 className="text-white text-sm md:text-base font-semibold">
                      {industry.name}
                    </h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
