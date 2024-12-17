import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { casewareIdeaKeyFeatures, casewareIdeaData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";

const casewareIdeaPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/caseware-idea/caseware-idea-banner.svg"
        alt="Banner Caseware IDEA"
        logoSrc="/images/products/caseware-idea/caseware-logo.svg"
        withRectangle
      />

      <SectionTitle
        center
        title="Caseware IDEA"
        paragraph="Unlock powerful audit insights with Caseware IDEA"
        description="Gain deep insights and value through efficient data analytics in auditing and finance"
      />

      {casewareIdeaData.map((section, index) => (
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
        title="Key features of Caseware IDEA"
        paragraph="Our Caseware IDEA improves your audit insights with the following key features:"
        keyFeaturesData={casewareIdeaKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware IDEA?" />
    </>
  );
};

export default casewareIdeaPage;
