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

const TrainingLevel2Page = () => {
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

      <div className="mt-4 flex justify-center">
        <Image
          src="/images/training/training-step-2.svg"
          alt="Training Step 2"
          width={684}
          height={134}
        />
      </div>

      <TitleTraining
        title="IDEA Data Analysis Level 2 (Two Days)"
        description="This two-day course is ideal for those who have completed the IDEA Data Analysis Level 1 training or have a sound understanding of IDEA functionality. Participants learn more advanced topics, such as creating complex equations or criteria, automating tasks and connecting databases."
      />

      <ServiceListSection
        withoutDivider
        title="After completing this training, participants will be able to:"
        services={[
          "Expand their use of data analytics in Audit, Finance, and other industries.",
          "Apply advanced data analytics techniques and best practices.",
          "Automate data analytics.",
          "Improve governance and controls, and reduce risk in their organization.",
        ]}
      />

      <div className="container text-center">
        <span className="mb-4 inline-block text-base font-semibold text-primaryText">
          Course Outline
        </span>

        <div className="container mx-auto grid grid-cols-1 md:w-4/5 md:grid-cols-2 lg:grid-cols-3">
          <ListSection
            items={[
              "Advanced Imports",
              "Advanced Extractions",
              "Connecting Multiple Databases",
            ]}
          />
          <ListSection
            items={[
              "Advanced @Functions",
              "Custom functions",
              "Advanced Data Profiling using Benford’s Law",
            ]}
          />
          <ListSection
            items={[
              "Introduction to Automation in IDEA",
              "Case Study – Independent Study",
              "Case Study – Management Report",
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

export default TrainingLevel2Page;
