"use client";

import React from "react";
import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import PricingCard from "@/components/PricingCard";
import ContactUsTraining from "@/components/Section/ContactUsTraining";
import useDeviceType from "@/hook/use-device-type";

const FeesSchedulesPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc = "/images/training/training-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc = "/images/training/training-tablet-banner.svg";
      break;
    default:
      bannerSrc = "/images/training/training-banner.svg";
  }
  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner Document Collaboration" />

      <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            <PricingCard
              title="CI101 - IDEA Data Analysis Level 1"
              investmentFee="Rp 8.500.000"
              schedules={[
                "1-2 March 2023",
                "31 May - 1 June 2023",
                "1-2 March 2023",
                "31 May - 1 June 2023",
              ]}
            />

            <PricingCard
              title="CI101 - IDEA Data Analysis Level 2"
              investmentFee="Rp 8.500.000"
              schedules={[
                "8-9 March 2023",
                "7-8 June 2023",
                "11-12 October 2023",
                "6-7 December 2023",
              ]}
            />

            <PricingCard
              title="CI103 & CI104 - IDEA Script"
              investmentFee="Rp 8.500.000"
              schedules={[
                "15-17 March 2023",
                "14-16 June 2023",
                "18-20 October 2023",
                "13-15 December 2023",
              ]}
            />

            <PricingCard
              title="CI201 - IDEA Exam Preparation"
              investmentFee="Rp 8.500.000"
              schedules={[
                "6 March 2023",
                "5 June 2023",
                "9 October 2023",
                "4 December 2023",
              ]}
            />
          </div>
        </div>
      </section>

      <ContactUsTraining />
    </>
  );
};

export default FeesSchedulesPage;
