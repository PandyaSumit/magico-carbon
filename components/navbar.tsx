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
    <>
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-full min-w-0 pt-[env(safe-area-inset-top)]">
      <nav
        className={`w-full min-w-0 shrink-0 transition-all duration-300 ${
          solidNav
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
          <div className="h-16 sm:h-[4.5rem] flex items-center justify-between gap-3 min-w-0">
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
                  width={80}
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
              className={`md:hidden shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                solidNav
                  ? "text-slate-900 border-slate-200 hover:bg-slate-100"
                  : "text-white border-white/50 hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile: backdrop + right sidebar (not full-screen) */}
    <div className="md:hidden" aria-hidden={!isOpen}>
      <button
        type="button"
        className={`fixed inset-0 z-40 bg-slate-900/45 transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
      />
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`fixed inset-y-0 right-0 z-[45] flex w-[min(100%,19rem)] max-w-[85vw] flex-col border-l border-slate-200 bg-white pt-[env(safe-area-inset-top)] shadow-xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-slate-100 py-3 text-[15px] font-medium text-slate-800 hover:text-[#4f6ef7] active:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-4 inline-flex h-11 w-full shrink-0 items-center justify-center rounded-lg bg-[#4f6ef7] text-white text-sm font-semibold hover:bg-[#3b5de7] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Request Quote
          </Link>
        </nav>
      </div>
    </div>
    </>
  );
}
