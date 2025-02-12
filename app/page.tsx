"use client";

import { useEffect, useState } from "react";
import BannerCarousel from "@/components/BannerCarousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import ProductOverview from "@/components/ProductOverview";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [bgImage, setBgImage] = useState(
    "https://assets.insight.co.id/images/divider-section-home.svg"
  );

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth < 768) {
        setBgImage(
          "https://assets.insight.co.id/images/divider-section-home-mobile.svg"
        );
      } else {
        setBgImage(
          "https://assets.insight.co.id/images/divider-section-home.svg"
        );
      }
    };

    updateBgImage();
    window.addEventListener("resize", updateBgImage);

    return () => {
      window.removeEventListener("resize", updateBgImage);
    };
  }, []);

  return (
    <>
      <ScrollUp />
      <BannerCarousel />
      <Features />
      <ProductOverview />
      <section
        className={`flex items-center justify-center bg-cover bg-center text-center`}
        style={{ backgroundImage: `url(${bgImage})` }}
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
