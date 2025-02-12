"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
  casewareAuditSolutionKeyFeatures,
  casewareAuditSolutionData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const casewareAuditSolutionPage = () => {
  const { isMobile, isDesktop, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-audit-solution/caseware-audit-solution-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-audit-solution/caseware-audit-solution-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/products/caseware-audit-solution/caseware-audit-solution-banner.svg";
  }

  return (
    <>
      <ScrollUp />

      <Banner
        src={bannerSrc}
        alt="Banner Caseware Audit Solution"
        logoSrc="https://assets.insight.co.id/images/products/caseware-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="Caseware Audit Solution"
        paragraph="Elevate audit quality with seamless integrations"
        description="Optimize engagement management and auditor experience"
      />

      {casewareAuditSolutionData.map((section, index) => (
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
        title="Key features of Caseware Audit Solutions"
        paragraph="Caseware Audit Solution elevates your audit quality with the following key features:"
        keyFeaturesData={casewareAuditSolutionKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware Audit Solution?" />
    </>
  );
};

export default casewareAuditSolutionPage;
