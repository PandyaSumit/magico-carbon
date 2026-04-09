import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PRODUCTS } from "@/lib/products";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1000cc]">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Product not found</h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            This URL does not match a catalog grade. Product pages use short names such as{" "}
            <code className="text-[#1000cc] font-medium">gac</code>, <code className="text-[#1000cc] font-medium">pac</code>
            , or <code className="text-[#1000cc] font-medium">pelletized</code> (or{" "}
            <code className="text-[#1000cc] font-medium">1</code>–<code className="text-[#1000cc] font-medium">3</code>
            ).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/products" className="btn-primary text-center">
              Browse products
            </Link>
            <Link href="/" className="btn-secondary text-center">
              Home
            </Link>
          </div>
          <ul className="text-left border border-slate-200 rounded-2xl bg-white p-4 space-y-2 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="text-[#1000cc] font-medium hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
