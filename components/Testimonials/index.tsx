"use client";

import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const images = [
    {
      id: 1,
      src: "/images/banner-carousel/banner-carousel-1.svg",
      alt: "Banner 1",
    },
    {
      id: 2,
      src: "/images/banner-carousel/banner-carousel-2.svg",
      alt: "Banner 2",
    },
    {
      id: 3,
      src: "/images/banner-carousel/banner-carousel-3.svg",
      alt: "Banner 3",
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
        id="testimonials"
        className="relative z-10 w-full overflow-hidden"
      >
        <MultiCarousel
          responsive={responsive}
          ssr
          infinite
          containerClass="container-with-dots"
          itemClass="image-item px-4 py-6"
          className="w-full bg-cultured"
        >
          <div className="flex items-center justify-center">
            <div className="md:w-[800px]">
              <div className="mb-4 text-center text-base italic text-primaryText md:text-lg">
                “ Two years ago we didnt expected that in this pandemic phase,
                IDES and Pentana Audit software utility could really help in a
                remote audit process, in term of desk audit process as well as
                the reporting activity process. With IDEA data analytic, the
                process of the desk audit can save the field work & visit time
                up to 70%, this could happen because IDEA can analyze and do the
                data processing to identyfy risk and spesific scoop at the
                beginning of desk audit process. “
              </div>

              <div className="mb-2 text-center text-sm font-bold text-primaryTextBlue md:text-base">
                Widodo
              </div>
              <div className="text-center text-xs font-medium text-primaryTextBlue md:text-sm">
                Chief Audit Officer, Indonesia Port Corporation
              </div>
            </div>
          </div>
        </MultiCarousel>
      </section>
    </>
  );
};

export default Testimonials;
