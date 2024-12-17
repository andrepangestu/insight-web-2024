import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
    casewareAuditSolutionKeyFeatures,
    casewareAuditSolutionData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareAuditSolutionPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/caseware-audit-solution/caseware-audit-solution-banner.svg"
        alt="Banner Caseware Audit Solution"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle
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
        title="Key features of Caseware Working Papers"
        paragraph="Caseware Working Papers enhances your audit insights with the following key features:"
        keyFeaturesData={casewareAuditSolutionKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware Audit Solution?" />
    </>
  );
};

export default casewareAuditSolutionPage;
