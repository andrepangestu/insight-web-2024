import useDeviceType from "@/hook/use-device-type";
import { CompanyLogoFooter, CompanyLogoFooterMobile } from "@/public/images";
import React from "react";

const Copyright = () => {
  const { isMobile } = useDeviceType();

  return (
    <section className="container py-8 md:py-10">
      <div className="flex items-center justify-between">
        <div className="w-11/12">
          <span className="mr-1 text-sm font-normal text-primaryText">
            Copyright 2025 © All Rights Reserved by
          </span>
          <span className="text-sm font-semibold text-primaryText">
            Insight Consulting
          </span>
        </div>
        <div>
          {isMobile ? <CompanyLogoFooterMobile /> : <CompanyLogoFooter />}
        </div>
      </div>
    </section>
  );
};

export default Copyright;
