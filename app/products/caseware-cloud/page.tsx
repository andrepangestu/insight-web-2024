import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {
    casewareCloudKeyFeatures,
    casewareCloudData,
} from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareCloudPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/caseware-cloud/caseware-cloud-banner.svg"
        alt="Banner Caseware Cloud"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle
      />

      <SectionTitle
        center
        title="Caseware Cloud"
        paragraph="Transform your accounting practice with Caseware Cloud"
        description="One secure platform for all your engagement and practice management needs"
      />

      {casewareCloudData.map((section, index) => (
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
        keyFeaturesData={casewareCloudKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware Cloud?" />
    </>
  );
};

export default casewareCloudPage;
