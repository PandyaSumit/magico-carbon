import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PRODUCTS } from "@/lib/products";

const SITE_URL = "https://www.magicocarbon.com";

export const metadata: Metadata = {
  title: "Activated Carbon Products | Magico Carbon",
  description:
    "Browse granular, powdered, and pelletized activated carbon grades with technical details, use-case fit, and specifications.",
  keywords: [
    "activated carbon products",
    "granular activated carbon",
    "powdered activated carbon",
    "pelletized activated carbon",
    "coconut shell activated carbon",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Activated Carbon Products | Magico Carbon",
    description:
      "Explore Magico Carbon product grades with detailed specifications and application insights.",
    url: `${SITE_URL}/products`,
    type: "website",
    siteName: "Magico Carbon",
  },
};

export default function ProductsIndexPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Activated Carbon Products",
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/products/${product.slug}`,
      name: product.title,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-10 sm:mb-14 space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#1000cc]">Catalog</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Activated carbon products</h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Select a grade to view full specifications, mesh sizes, and features.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-[#1000cc]/30 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1000cc] focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6 gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-[#1000cc] transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-4 flex-1">{product.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1000cc]">
                    View details
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
