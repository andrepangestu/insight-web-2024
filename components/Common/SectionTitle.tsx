"use client";

import useDeviceType from "@/hook/use-device-type";

const SectionTitle = ({
  title,
  paragraph,
  width = "931px",
  center,
  mb = "100px",
  description,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  description?: string;
}) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  return (
    <div
      className={`wow fadeInUp container mb-[30px] w-full md:mb-[50px] lg:mb-[60px] lg:mb-[80px] ${
        center ? "mx-auto text-center" : ""
      }`}
      data-wow-delay=".1s"
      style={{ maxWidth: width }}
    >
      <div
        className={`${
          paragraph && "mb-4"
        } text-base font-semibold text-primaryText`}
      >
        {title}
      </div>

      {paragraph && (
        <div className="text-[26px] font-semibold text-primaryText">
          {paragraph}
        </div>
      )}

      {description && (
        <div className="mt-6 text-base font-semibold text-primaryText">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
