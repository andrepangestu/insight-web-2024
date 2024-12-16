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
        id="features"
        className="flex items-center justify-center bg-[url('/images/divider-section-home.svg')] bg-cover bg-center text-center"
      >
        <div className="w-[800px] py-20 text-[30px] text-white">
          Advance your auditing with a data-driven approach for greater success
        </div>
      </section>
      <NewsAndEvents />
      <Testimonials />
    </>
  );
}
