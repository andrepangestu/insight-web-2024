"use client";

import { ArrowBarRightIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

const BannerCarousel = () => {
  const images = [
    {
      id: 1,
      src: "/images/banner-carousel/banner-carousel-1.svg",
      alt: "Banner 1",
      link: "/",
      buttonStyle: "bg-gradient-red ",
      title:
        "Leading Management Assurance Consulting and Technology Solutions in Asia Pacific",
    },
    {
      id: 2,
      src: "/images/banner-carousel/banner-carousel-2.svg",
      alt: "Banner 2",
      link: "/",
      buttonStyle: "bg-telemagenta",
      title:
        "Streamline Your Business Compliance and Collaboration with Ideagen",
    },
    {
      id: 3,
      src: "/images/banner-carousel/banner-carousel-3.svg",
      alt: "Banner 3",
      link: "/",
      buttonStyle: "border-2 border-white",
      title: "Revolutionize Your Company Auditing and Reporting with Caseware",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section
        id="home"
        className="relative z-10 w-full overflow-hidden pb-16 pt-[120px]"
      >
        <div className="flex items-center justify-center bg-spaceCadet p-2 text-center text-white">
          <span className="mr-1 font-normal">
            Looking for a fast, easy, automated, high value for money Audit and
            risk management solution?
          </span>
          <span className="mr-1 font-bold">Try our solutions here</span>
          <ArrowBarRightIcon />
        </div>
        <MultiCarousel
          responsive={responsive}
          ssr
          infinite
          showDots
          containerClass="container-with-dots"
          itemClass="image-item"
          autoPlay
          arrows={false}
        >
          {images.map((item) => (
            <div key={item.id} className="relative h-[500px] w-full">
              <Image src={item.src} alt={item.alt} fill objectFit="cover" />
              <div className="absolute right-0 top-20 m-4 p-2">
                <div className="flex w-[700px] flex-col items-center justify-center">
                  <div>
                    <span
                      className={`text-[30px] font-bold ${
                        item.id === 3 ? "text-white" : "text-primaryText"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <button
                    className={`mt-8 h-[50px] w-[185px] font-semibold text-white ${item.buttonStyle}`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </MultiCarousel>
      </section>
    </>
  );
};

export default BannerCarousel;
