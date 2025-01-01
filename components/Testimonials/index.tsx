"use client";

import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonyData } from "./data";
import useDeviceType from "@/hook/use-device-type";
import CustomButton from "./CustomButton";
import "./styles.css";

const Testimonials = () => {
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

  const { isDesktop } = useDeviceType();

  return (
    <>
      <section
        id="testimonials"
        className="relative z-10 w-full overflow-hidden"
      >
        <MultiCarousel
          responsive={responsive}
          ssr
          infinite
          containerClass="container-with-dots"
          itemClass="image-item md:px-4 md:py-6 p-4 flex items-center justify-center"
          className="w-full bg-cultured"
          autoPlay
          arrows={isDesktop}
          customLeftArrow={<CustomButton direction="left" />}
          customRightArrow={<CustomButton direction="right" />}
        >
          {testimonyData.map((item) => (
            <div className="container mx-auto w-full md:w-[800px]">
              <div className="mb-4 text-center text-base italic text-primaryText md:text-lg">
                {item.testimony}
              </div>

              <div className="mb-2 text-center text-sm font-bold text-primaryTextBlue md:text-base">
                {item.name}
              </div>
              <div className="text-center text-xs font-medium text-primaryTextBlue md:text-sm">
                {item.position}
              </div>
            </div>
          ))}
        </MultiCarousel>
      </section>
    </>
  );
};

export default Testimonials;
