"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
  casewareCloudFinancialsKeyFeatures,
  casewareCloudFinancialsData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const casewareCloudPage = () => {
  const { isMobile, isDesktop, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-cloud-financials/caseware-cloud-financials-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-cloud-financials/caseware-cloud-financials-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-cloud-financials/caseware-cloud-financials-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Caseware Cloud Financials"
        logoSrc="https://assets.insight.co.id/images/products/caseware-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="Caseware Cloud Financials"
        paragraph="Cloud-based accounts production software for improved speed and quality"
        description="Easily manage compliant accounts in one central platform"
      />

      {casewareCloudFinancialsData.map((section, index) => (
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
        title="Key features of Caseware Cloud Financial"
        paragraph="Caseware Cloud Financials manages compliant accounts with the following key features:"
        keyFeaturesData={casewareCloudFinancialsKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware Cloud Financials?" />
    </>
  );
};

export default casewareCloudPage;
