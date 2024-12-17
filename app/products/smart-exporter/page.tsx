import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
    casewareSmartExporterKeyFeatures,
    casewareSmartExporterData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareSmartExporterPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/smart-exporter/smart-exporter-banner.svg"
        alt="Banner SmartExporter"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle
      />

      <SectionTitle
        center
        title="SmartExporter"
        paragraph="Streamline SAP data extraction for faster insights"
        description="Export data from SAP® and prepare it automatically"
      />

      {casewareSmartExporterData.map((section, index) => (
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
        title="Find the Right Fit"
        paragraph="SmartExporter offers several editions to match your needs:"
        keyFeaturesData={casewareSmartExporterKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying SmartExporter?" />
    </>
  );
};

export default casewareSmartExporterPage;
