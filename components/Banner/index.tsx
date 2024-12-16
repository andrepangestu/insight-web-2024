import Image from "next/image";
import React from "react";

interface BannerProps {
  src: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <>
      <section
        id="banner"
        className="relative z-10 mb-8 w-full overflow-hidden pt-[120px]"
      >
        <div className="max-w-screen relative w-full">
          <Image
            src={props.src}
            alt={props.alt}
            width={0}
            height={320}
            layout="responsive"
          />
          <div className="absolute right-0 top-0 h-full">
            <Image
              src="/images/products/ideagen-internal-audit/rectangle-banner.svg"
              alt="rectangle"
              width={0}
              height={0}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
