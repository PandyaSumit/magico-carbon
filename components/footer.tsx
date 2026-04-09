import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className=" w-[150px] h-auto ">
                <Image
                  src="/images/logo.png"
                  alt="Magico Carbon logo"
                  width={150}
                  height={40}
                  className="object-contain p-1"
                  priority
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium activated carbon solutions for global industries.
              Engineered for excellence, committed to sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/gac"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Granular (GAC)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pac"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Powdered (PAC)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pelletized"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Pelletized (EAC)
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-bold text-white mb-4">Applications</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#applications"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Water Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="#applications"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Air & Gas Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="#applications"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Gold Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="#applications"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  Food & Beverage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#1000cc] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400">+91 8010223355</p>
                  <p className="text-slate-400">+1 (214) 779-6566</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#1000cc] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:sales@magicotradelinks.com"
                  className="text-slate-400 hover:text-[#1000cc] transition-colors"
                >
                  sales@magicotradelinks.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1000cc] flex-shrink-0 mt-0.5" />
                <p className="text-slate-400">Delhi, India | Frisco, Texas</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          <div className="text-center text-sm text-slate-400">
            <p>&copy; {currentYear} Magico Carbon. All rights reserved.</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            Manufacturing Plant: Kerala, India | Global Sales: USA, UK, UAE |
            Website: magicocarbon.com
          </p>
        </div>
      </div>
    </footer>
  );
}
