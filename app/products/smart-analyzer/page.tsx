"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { casewareSmartAnalyzerData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import useDeviceType from "@/hook/use-device-type";

const casewareSmartAnalyzerPage = () => {
  const { isMobile, isDesktop } = useDeviceType();
  const bannerSrc = isMobile
    ? "/images/products/smart-analyzer/smart-analyzer-mobile-banner.svg"
    : "/images/products/smart-analyzer/smart-analyzer-banner.svg";

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Smart Analyzer"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle={isDesktop}
      />

      <SectionTitle
        center
        title="SmartAnalyzer"
        paragraph="Audit smarter, not harder with SmartAnalyzer"
        description="Effortless, pre-built routines for faster, more reliable audits"
      />

      {casewareSmartAnalyzerData.map((section, index) => (
        <ContentSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          content={section.content}
          reverse={section.reverse}
        />
      ))}
      <ContactUsSection textContent="Interested in trying SmartAnalyzer?" />
    </>
  );
};

export default casewareSmartAnalyzerPage;
