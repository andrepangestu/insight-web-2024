import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { ideagenRiskManagementData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";

const ideagenHuddlePage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/products/ideagen-huddle/ideagen-huddle-banner.svg"
        alt="Banner Ideagen Huddle"
        logoSrc="/images/products/ideagen-huddle/ideagen-huddle-logo.svg"
        withRectangle
      />

      <SectionTitle
        center
        title="Ideagen Huddle"
        paragraph="Efficient and secure collaboration made simple"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "Improve collaboration in regulated industries with easy teamwork and branded workspaces",
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

export default ideagenHuddlePage;
