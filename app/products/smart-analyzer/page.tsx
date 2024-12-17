import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { casewareSmartAnalyzerData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareSmartAnalyzerPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/smart-analyzer/smart-analyzer-banner.svg"
        alt="Banner Smart Analyzer"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle
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
