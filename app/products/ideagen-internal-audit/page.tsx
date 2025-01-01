"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import ContentSection from "@/components/Common/ContentSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import {
  ideagenInternalAuditData,
  ideagenInternalAuditKeyFeatures,
} from "./data";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const InternalAuditPage = () => {
  const { isMobile, isDesktop, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "/images/products/ideagen-internal-audit/ideagen-internal-audit-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "/images/products/ideagen-internal-audit/ideagen-internal-audit-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "/images/products/ideagen-internal-audit/ideagen-internal-audit-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Ideagen Internal Audit"
        logoSrc="/images/products/ideagen-internal-audit/ideagen-internal-audit-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="Ideagen Internal Audit"
        paragraph="Strengthen internal audit control and boost confidence with Ideagen"
        description="Ideagen Internal Audit is the market-leading risk-based audit management software solution for hundreds of organizations worldwide"
      />

      {ideagenInternalAuditData.map((section, index) => (
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
        title="Key features of Ideagen Internal Audit"
        paragraph="Ideagen Internal Audit management software provides all the tools you need to manage every part of the audit process:"
        keyFeaturesData={ideagenInternalAuditKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Ideagen Internal Audit?" />
    </>
  );
};

export default InternalAuditPage;
