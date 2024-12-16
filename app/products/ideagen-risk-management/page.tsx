import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { ideagenRiskManagementData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";

const IdeagenRiskManagementPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/ideagen-risk-management/ideagen-risk-management-banner.svg"
        alt="Banner Ideagen Risk Management"
        logoSrc="/images/products/ideagen-risk-management/ideagen-risk-management-logo.svg"
        withRectangle
      />

      <SectionTitle
        center
        title="Ideagen Risk Management"
        paragraph="Professional risk management solutions by experts"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "Provide actionable insights to your entire organisation with data-driven decision making with our risk software solution",
        ]}
      />

      {ideagenRiskManagementData.map((section, index) => (
        <ContentSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          content={section.content}
          reverse={section.reverse}
        />
      ))}
      <ContactUsSection />
    </>
  );
};

export default IdeagenRiskManagementPage;
