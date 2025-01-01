"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { ideagenHuddleKeyFeatures, ideagenRiskManagementData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const ideagenHuddlePage = () => {
  const { isMobile, isDesktop, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "/images/products/ideagen-huddle/ideagen-huddle-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "/images/products/ideagen-huddle/ideagen-huddle-tablet-banner.svg";
      break;
    default:
      bannerSrc = "/images/products/ideagen-huddle/ideagen-huddle-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Ideagen Huddle"
        logoSrc="/images/products/ideagen-huddle/ideagen-huddle-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="Ideagen Huddle"
        paragraph="Efficient and secure collaboration made simple"
        description="Improve collaboration in regulated industries with easy teamwork and branded workspaces"
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
        title="Key features of Ideagen Huddle"
        paragraph="Ideagen huddle solution helps you succeed with the following key features:"
        keyFeaturesData={ideagenHuddleKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Ideagen Huddle?" />
    </>
  );
};

export default ideagenHuddlePage;
