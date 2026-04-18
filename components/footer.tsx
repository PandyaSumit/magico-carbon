import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

const siteLinks = [
  { href: "/products", label: "Product catalog" },
  { href: "/#applications", label: "Applications" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 pb-10 border-b border-slate-800">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6ef7] rounded-md">
              <div className="w-[150px] h-auto">
                <Image
                  src="/images/logo.png"
                  alt="Magico Carbon logo"
                  width={150}
                  height={40}
                  className="object-contain object-left p-1"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Coconut shell activated carbon for water treatment, air and gas
              purification, and industrial applications.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-sm mb-3">Site</h2>
            <ul className="space-y-2 text-sm">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#4f6ef7] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white text-sm mb-3">Grades</h2>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-slate-400 hover:text-[#4f6ef7] transition-colors"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white text-sm mb-3">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#4f6ef7] shrink-0 mt-0.5" aria-hidden />
                <div className="text-slate-400 space-y-0.5">
                  <p>+91 8010223355</p>
                  <p>+1 (214) 779-6566</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#4f6ef7] shrink-0 mt-0.5" aria-hidden />
                <a
                  href="mailto:sales@magicotradelinks.com"
                  className="text-slate-400 hover:text-[#4f6ef7] transition-colors break-all"
                >
                  sales@magicotradelinks.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4f6ef7] shrink-0 mt-0.5" aria-hidden />
                <p className="text-slate-400">
                  Delhi, India · Frisco, TX · Manufacturing: Kerala, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-center text-sm text-slate-500">
          &copy; {currentYear} Magico Carbon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
