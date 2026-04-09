"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroQuickStats } from "@/components/hero-sections/hero-quick-stats";
import { HeroAboutSection } from "@/components/hero-sections/hero-about-section";
import { HeroProductRangeSection } from "@/components/hero-sections/hero-product-range-section";
import { HeroApplicationsSection } from "@/components/hero-sections/hero-applications-section";
import { Products } from "@/components/products";
import { CTABanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div suppressHydrationWarning>
      <main>
        <Navbar />
        <Hero />
        <HeroQuickStats fadeInUp={fadeInUp} />
        <HeroAboutSection fadeInUp={fadeInUp} />
        <HeroProductRangeSection fadeInUp={fadeInUp} />
        <HeroApplicationsSection fadeInUp={fadeInUp} />
        <Products />
        <CTABanner />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
