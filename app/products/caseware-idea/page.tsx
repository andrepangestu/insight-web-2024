"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { casewareIdeaKeyFeatures, casewareIdeaData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const casewareIdeaPage = () => {
  const { isMobile, isDesktop, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-idea/caseware-idea-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-idea/caseware-idea-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-idea/caseware-idea-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Caseware IDEA"
        logoSrc="https://assets.insight.co.id/images/products/caseware-idea/caseware-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="Caseware IDEA"
        paragraph="Unlock powerful audit insights with Caseware IDEA"
        description="Gain deep insights and value through efficient data analytics in auditing and finance"
      />

      {casewareIdeaData.map((section, index) => (
        <ContentSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          content={section.content}
          reverse={section.reverse}
        />
      ))}

      <KeyFeatures
        title="Key features of Caseware IDEA"
        paragraph="Our Caseware IDEA improves your audit insights with the following key features:"
        keyFeaturesData={casewareIdeaKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware IDEA?" />
    </>
  );
};

export default casewareIdeaPage;
