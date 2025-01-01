"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
  ideagenRiskManagementData,
  ideagenRiskManagementKeyFeatures,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const IdeagenRiskManagementPage = () => {
  const { isMobile, isDesktop, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "/images/products/ideagen-risk-management/ideagen-risk-management-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "/images/products/ideagen-risk-management/ideagen-risk-management-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "/images/products/ideagen-risk-management/ideagen-risk-management-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Ideagen Risk Management"
        logoSrc="/images/products/ideagen-risk-management/ideagen-risk-management-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="Ideagen Risk Management"
        paragraph="Professional risk management solutions by experts"
        description="Provide actionable insights to your entire organisation with data-driven decision making with our risk software solution"
      />

      {ideagenRiskManagementData.map((section, index) => (
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
        title="Key features of Ideagen Risk Management"
        paragraph="All-in-one risk management solution helps you control risk with the following key features:"
        keyFeaturesData={ideagenRiskManagementKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Ideagen Risk Management?" />
    </>
  );
};

export default IdeagenRiskManagementPage;
