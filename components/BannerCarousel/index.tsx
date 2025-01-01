"use client";

import { ArrowBarRightIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dataBannerCarousel } from "./data";
import useDeviceType from "@/hook/use-device-type";
import Link from "next/link";

import "./styles.css";

const BannerCarousel = () => {
  const { isMobile, isTablet } = useDeviceType();

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
    <section
      id="home"
      className="relative z-10 w-full overflow-hidden pt-[90px] lg:pb-16 lg:pt-[120px] xl:pb-16 2xl:pb-16"
    >
      {isMobile || isTablet ? (
        <div className="flex items-center justify-between bg-spaceCadet p-4 text-xs text-white md:justify-center">
          <div>
            <span className="mr-1 font-normal">
              Looking for a fast, easy, automated, high value for money Audit
              and risk management solution?
            </span>
            <Link href="/contact-us/inquiry-form">
              <span className="font-bold underline md:mr-1">
                Try our solutions here
              </span>
            </Link>
          </div>

          <div>
            <ArrowBarRightIcon />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-spaceCadet p-2 text-center text-white">
          <span className="mr-1 font-normal">
            Looking for a fast, easy, automated, high value for money Audit and
            risk management solution?
          </span>
          <Link href="/contact-us/inquiry-form">
            <span className="mr-1 font-bold underline">
              Try our solutions here
            </span>
          </Link>

          <div>
            <ArrowBarRightIcon />
          </div>
        </div>
      )}

      {isMobile ? (
        <MultiCarousel
          responsive={responsive}
          ssr
          infinite
          showDots
          containerClass="container-with-dots"
          itemClass="image-item"
          autoPlay
          arrows={false}
          swipeable
          className="h-[261px] bg-[#F3F8FB]"
          dotListClass="dot-carousel-style"
        >
          {dataBannerCarousel.map((item) => (
            <div
              key={item.id}
              className=" w-full flex-row items-center justify-center p-4 text-center"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="block text-2xl font-semibold">
                  {item.title}
                </span>
              </div>

              <button className="bg-gradient-red mt-4 h-[33px] w-[120px] text-xs font-semibold text-white">
                Learn more
              </button>
            </div>
          ))}
        </MultiCarousel>
      ) : (
        <MultiCarousel
          responsive={responsive}
          ssr
          infinite
          showDots
          containerClass="container-with-dots"
          itemClass="image-item"
          autoPlay
          arrows={false}
          swipeable
        >
          {dataBannerCarousel.map((item) => (
            <div key={item.id} className="relative h-[500px] w-full">
              <Image src={item.src} alt={item.alt} fill objectFit="cover" />
              <div className="absolute right-0 top-20 m-4 p-2">
                <div className="flex w-[700px] flex-col lg:items-center lg:justify-center">
                  <div className="md:text-right">
                    <span
                      className={`text-[30px] font-bold ${
                        item.id === 3 ? "text-white" : "text-primaryText"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <Link href={item.link} className="md:text-right">
                    <button
                      className={`mt-8 h-[50px] w-[185px] font-semibold text-white ${item.buttonStyle}`}
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </MultiCarousel>
      )}
    </section>
  );
};

export default BannerCarousel;
