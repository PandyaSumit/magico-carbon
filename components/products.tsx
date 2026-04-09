import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

const packagingInfo = {
  bagQuality: [
    "We provide good quality of packing with safety factor 5.1. Including HDPE bags woven with inner liners: 25 kg HDPE bags, 50 kg HDPE bags, 500 kg HDPE jumbo bags.",
    "25 kg PP plastic bags quality range from 175 to 200 microns and available in white or black colour.",
    "Industry standard heat sealed to ensure secure delivery.",
  ],
  printing: [
    "Customized printing is available.",
    "We have in-house bag designers who can design the bags based on your brand requirements. Labels are pasted as per the requirement of the customer.",
  ],
  shipment:
    "The bags can be placed on wooden pallets in the container and fumigated as per ISPM 15 standards. Once the material is dispatched there will be continuous follow-up from our firm regarding the connectivity of vessels and we will keep you with the tracking details.",
};

export function Products() {
  return (
    <section id="products" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16">
        <header className="text-center space-y-3 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[#1000cc]">
            Our Range Of Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Activated Carbon Grades
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professionally designed catalog that mirrors our printed brochure:
            granular, powdered, and pelletized carbons with detailed benefits,
            sizes, and specifications.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/70 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1000cc]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 p-5">
                {/* Category */}
                <p className="text-[10px] uppercase tracking-widest text-slate-400">
                  {product.categoryLabel}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 leading-snug transition-colors group-hover:text-[#1000cc]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                  {product.excerpt}
                </p>

                {/* CTA */}
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#1000cc]">
                  View details
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200 shadow-md p-6 sm:p-8 space-y-6 sm:space-y-8">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-[#1000cc]">
              Custom Packaging
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Bag Quality, Printing & Shipment
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Packaging details follow the brochure exactly so your orders ship
              safely while reflecting your brand.
            </p>
          </header>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold text-slate-900">
                Bag Quality
              </h4>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-slate-600">
                {packagingInfo.bagQuality.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Printing</h4>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-slate-600">
                {packagingInfo.printing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Shipment</h4>
              <p className="text-sm text-slate-600 mt-3">
                {packagingInfo.shipment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
