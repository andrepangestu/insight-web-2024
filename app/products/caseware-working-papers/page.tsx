import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
  casewareWorkingPapersKeyFeatures,
  casewareWorkingPapersData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareWorkingPapersPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/caseware-working-papers/caseware-working-papers-banner.svg"
        alt="Banner Caseware Working Papers"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle
      />

      <SectionTitle
        center
        title="Caseware Working Papers"
        paragraph="Simplify audits with seamless data integration"
        description="Manage audits easily with automatic data updates and links"
      />

      {casewareWorkingPapersData.map((section, index) => (
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
        keyFeaturesData={casewareWorkingPapersKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware Working Papers?" />
    </>
  );
};

export default casewareWorkingPapersPage;
