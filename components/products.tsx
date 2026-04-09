import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

const packagingSections = [
  {
    id: "bag-quality",
    title: "Bag Quality",
    tag: "Materials & sealing",
    kind: "list" as const,
    items: [
      "We provide good quality of packing with safety factor 5.1. Including HDPE bags woven with inner liners: 25 kg HDPE bags, 50 kg HDPE bags, 500 kg HDPE jumbo bags.",
      "25 kg PP plastic bags quality range from 175 to 200 microns and available in white or black colour.",
      "Industry standard heat sealed to ensure secure delivery.",
    ],
  },
  {
    id: "printing",
    title: "Printing",
    tag: "Branding",
    kind: "list" as const,
    items: [
      "Customized printing is available.",
      "We have in-house bag designers who can design the bags based on your brand requirements. Labels are pasted as per the requirement of the customer.",
    ],
  },
  {
    id: "shipment",
    title: "Shipment",
    tag: "Logistics",
    kind: "text" as const,
    body: "The bags can be placed on wooden pallets in the container and fumigated as per ISPM 15 standards. Once the material is dispatched there will be continuous follow-up from our firm regarding the connectivity of vessels and we will keep you with the tracking details.",
  },
];

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

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
          <div className="grid lg:grid-cols-[minmax(0,340px)_1fr]">
            <aside className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-[#0d0d4d] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
              <div
                className="pointer-events-none absolute -right-px top-8 bottom-8 hidden w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block"
                aria-hidden
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#a5b4fc]">
                Custom Packaging
              </p>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Bag Quality, Printing & Shipment
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                Packaging details follow the brochure exactly so your orders ship
                safely while reflecting your brand.
              </p>
              <div className="mt-8 hidden gap-2 lg:flex lg:flex-col">
                {packagingSections.map((s, i) => (
                  <div
                    key={s.id}
                    className="flex items-baseline gap-3 border-l-2 border-[#6366f1]/80 py-1 pl-4"
                  >
                    <span className="font-mono text-xs text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-white/95">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="bg-slate-50/80">
              {/* Mobile / tablet: compact accordion */}
              <div className="divide-y divide-slate-200 border-t border-slate-200 lg:hidden">
                {packagingSections.map((section) => (
                  <details
                    key={section.id}
                    className="group bg-white open:bg-slate-50/50"
                    {...(section.id === "bag-quality"
                      ? { defaultOpen: true }
                      : {})}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#1000cc]">
                          {section.tag}
                        </span>
                        <span className="mt-1 block text-base font-semibold text-slate-900">
                          {section.title}
                        </span>
                      </span>
                      <ChevronDown
                        className="size-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <div className="border-t border-slate-100 px-5 pb-5 pt-0">
                      {section.kind === "list" ? (
                        <ul className="space-y-3 pt-4 text-[14px] leading-relaxed text-slate-600">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-[#1000cc]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="pt-4 text-[14px] leading-relaxed text-slate-600">
                          {section.body}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>

              {/* Desktop: open numbered sections */}
              <div className="hidden divide-y divide-slate-200 lg:block">
                {packagingSections.map((section, index) => (
                  <div
                    key={section.id}
                    className="grid grid-cols-[4.5rem_1fr] gap-6 bg-white px-8 py-10 xl:grid-cols-[5rem_1fr] xl:px-10"
                  >
                    <div className="pt-1 text-right">
                      <span className="inline-block font-mono text-3xl font-light tabular-nums text-slate-200 xl:text-4xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1000cc]">
                        {section.tag}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-slate-900">
                        {section.title}
                      </h4>
                      {section.kind === "list" ? (
                        <ul className="mt-5 max-w-prose space-y-3.5 text-[15px] leading-relaxed text-slate-600">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="border-l-2 border-slate-200 pl-4"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-slate-600">
                          {section.body}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
