"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-600 ${
        scrolled
          ? "bg-[#ffffff] backdrop-blur-[15px]  shadow-2xl"
          : "bg-transparent "
      }
      
      
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[120px] h-auto rounded-lg overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Magico Carbon logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#products"
              className={` ${scrolled ? "hover:text-[#1000cc] " : "hover:text-[#1000cc] text-white"} transition-colors font-medium`}
            >
              Products
            </Link>
            <Link
              href="#applications"
              className={`text-slate-700 ${scrolled ? "hover:text-[#1000cc]" : "hover:text-[#1000cc] text-white"} transition-colors font-medium`}
            >
              Applications
            </Link>
            <Link
              href="#about"
              className={`text-slate-700 ${scrolled ? "hover:text-[#1000cc]" : "hover:text-[#1000cc] text-white"} transition-colors font-medium`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`text-slate-700 ${scrolled ? "hover:text-[#1000cc]" : "hover:text-[#1000cc] text-white"} transition-colors font-medium`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <button className={`${scrolled ? "btn-primary" : "text-white border-white! bg-transparent! border btn-primary "}`}>Request Quote</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-3">
            <Link
              href="#products"
              className="block text-slate-700 hover:text-[#1000cc] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#applications"
              className="block text-slate-700 hover:text-[#1000cc] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Applications
            </Link>
            <Link
              href="#about"
              className="block text-slate-700 hover:text-[#1000cc] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-slate-700 hover:text-[#1000cc] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full btn-secondary mt-4">Request Quote</button>
          </div>
        )}
      </div>
    </nav>
  );
}
