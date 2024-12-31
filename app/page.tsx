"use client";

import BannerCarousel from "@/components/BannerCarousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import ProductOverview from "@/components/ProductOverview";
import { Inter } from "@next/font/google";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <BannerCarousel />
      <Features />
      <ProductOverview />
      <section
        className={`flex items-center justify-center bg-[url("/images/divider-section-home-mobile.svg")] bg-cover bg-center text-center md:bg-[url("/images/divider-section-home.svg")] lg:bg-[url("/images/divider-section-home.svg")]`}
      >
        <div className="container mx-auto w-[800px] py-20 text-[20] text-white md:text-[30px]">
          Advance your auditing with a data-driven approach for greater success
        </div>
      </section>
      <NewsAndEvents />
      <Testimonials />
    </>
  );
}
