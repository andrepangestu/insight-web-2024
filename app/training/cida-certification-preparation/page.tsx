"use client";

import Banner from "@/components/Banner";
import ListSection from "@/components/Common/ListSection";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceListSection from "@/components/Common/ServiceListSection";
import TitleTraining from "@/components/ContentSection/TitleTraining";
import ContactUsTraining from "@/components/Section/ContactUsTraining";
import useDeviceType from "@/hook/use-device-type";
import Image from "next/image";
import React from "react";

const CidaCertificationPage = () => {
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
      <Banner src={bannerSrc} alt="Banner CIDA Certification Preparation" />

      <div className="mt-4 flex justify-center">
        <Image
          src="/images/training/cida-exam-preparation.svg"
          alt="Training Script For Analysis"
          width={684}
          height={134}
        />
      </div>

      <TitleTraining
        title="IDEA Data Analysis CIDA Exam Preparation"
        description="This one-day course was developed to refresh long-time IDEA users and people that took the required training but want to be better prepared to write the Certified IDEA Data Analyst (CIDA) exam. This course was written using the concept of a case study to cover most of the core functionality of IDEA and focus on the content and the style of the CIDA exam."
      />

      <ServiceListSection
        withoutDivider
        title="After completing this training, participants will be able to:"
        services={[
          "Use IDEA tasks in the context of their daily work..",
          "Write the CIDA exam.",
          "Apply data analytics in a real-life situations.",
        ]}
      />

      <div className="container text-center">
        <span className="mb-4 inline-block text-base font-semibold text-primaryText">
          Course Outline
        </span>

        <div className="container mx-auto grid grid-cols-1 md:w-4/5 md:grid-cols-2 lg:grid-cols-3">
          <ListSection
            items={[
              "Importing and Reconciling Project Data",
              "Profiling and Isolating Payment Data",
              "Identifying Irregularities and Using Field Manipulation",
              "Summarizing Data and Working with Multiple Files",
            ]}
          />
        </div>

        <div className="container mb-24 text-center">
          <div className="mb-8 mt-16 text-base font-semibold text-primaryText">
            Prerequisites
          </div>

          <span className="mb-1 w-[500px] text-center text-sm font-medium text-primaryText">
            Working knowledge of Microsoft® Windows® desktop environment
            Microsoft® Office® applications.
          </span>
          <div className="mb-1 text-center text-sm font-medium text-primaryText">
            Familiarity with CI101 course topics.
          </div>
          <span className="mb-1 text-center text-sm font-medium text-primaryText">
            Completion of CI101 is recommended.
          </span>
        </div>
      </div>

      <ContactUsTraining />
    </>
  );
};

export default CidaCertificationPage;
