import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
    casewareCloudFinancialsKeyFeatures,
    casewareCloudFinancialsData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareCloudPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/caseware-cloud-financials/caseware-cloud-financials-banner.svg"
        alt="Banner Caseware Cloud Financials"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle
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
