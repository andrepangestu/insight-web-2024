import React from "react";
import { ArrowBarRightIcon } from "@/public/icons";

import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dataBannerCarousel } from "./data";
import useDeviceType from "@/hook/use-device-type";
import Link from "next/link";

import "./styles.css";

interface dataSrc {
  desktop: string;
  tablet: string;
  mobile: string;
}

const BannerCarousel = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

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

  const getImageSrc = (dataItem: dataSrc): string => {
    if (isMobile) {
      return dataItem.mobile;
    } else if (isTablet) {
      return dataItem.tablet;
    } else {
      return dataItem.desktop;
    }
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
          <div
            key={item.id}
            className="relative h-[321px] w-full md:h-[400px] lg:h-[500px]"
          >
            <img
              src={getImageSrc(item.src)}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1"></div>
                <div className="col-span-1 mx-auto mb-[100px] w-10/12 text-center md:mb-[130px] md:w-11/12 lg:mb-[150px] lg:w-11/12">
                  <div className="mb-4 text-center md:text-left">
                    <span
                      className={`text-[20px] font-semibold md:text-[24px] md:font-bold lg:text-[30px] ${
                        item.id === 3 ? "text-white" : "text-primaryText"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <Link
                    href={item.link}
                    className="flex justify-center md:justify-start"
                  >
                    <button
                      className={`h-[40px] w-[150px] font-semibold text-white ${
                        isDesktop ? item.buttonStyle : "bg-gradient-red"
                      }`}
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </MultiCarousel>
    </section>
  );
};

export default BannerCarousel;
