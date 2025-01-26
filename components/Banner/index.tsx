import Image from "next/image";
import React from "react";

interface BannerProps {
  src: string;
  alt: string;
  logoSrc?: string;
  withRectangle?: boolean;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <>
      <section
        id="banner"
        className="relative z-10 mb-8 w-full overflow-hidden pt-[90px] md:pt-[120px]"
      >
        <div className="max-w-screen relative w-full">
          {/* <Image
            src={props.src}
            alt={props.alt}
            width={0}
            height={320}
            layout="responsive"
            // objectFit="cover"
          /> */}
          <img
            src={props.src}
            alt={props.alt}
            className="w-full object-cover"
          />
          {props.withRectangle && (
            <div className="absolute right-0 top-0 w-1/3">
              <Image
                className="relative"
                src="/images/products/rectangle-banner.svg"
                alt="rectangle"
                width={0}
                height={320}
                layout="responsive"
              />

              <div className="absolute bottom-20 left-20">
                <Image
                  className="relative"
                  src={props?.logoSrc}
                  alt="logo-product"
                  width={0}
                  height={320}
                  layout="responsive"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Banner;
