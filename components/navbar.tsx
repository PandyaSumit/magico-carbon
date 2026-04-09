"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solidNav = scrolled || pathname !== "/" || isOpen;
  const navLinks = [
    { href: "/#products", label: "Products" },
    { href: "/#applications", label: "Applications" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          solidNav
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-[4.5rem] flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6ef7] rounded-md"
              aria-label="Go to homepage"
            >
              <div className="relative w-[112px] sm:w-[124px] h-auto rounded-lg overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Magico Carbon logo"
                  width={124}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    solidNav
                      ? "text-slate-700 hover:text-[#4f6ef7]"
                      : "text-white/95 hover:text-[#60a5fa]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/#contact"
                className={`inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-all ${
                  solidNav
                    ? "bg-[#4f6ef7] text-white hover:bg-[#3b5de7] shadow-sm"
                    : "border border-white/80 text-white hover:bg-white hover:text-slate-900"
                }`}
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                solidNav
                  ? "text-slate-900 border-slate-300 hover:bg-slate-100"
                  : "text-white border-white/50 hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-slate-700 text-sm font-medium hover:bg-slate-100 hover:text-[#4f6ef7] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#4f6ef7] text-white text-sm font-semibold hover:bg-[#3b5de7] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
