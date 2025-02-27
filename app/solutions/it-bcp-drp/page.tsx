"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { independentReviewData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import useDeviceType from "@/hook/use-device-type";

const DrpbcpPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/it-bcp-drp/drp-bcp-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/it-bcp-drp/drp-bcp-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/it-bcp-drp/drp-bcp-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Business Continuity Management" />

      <SectionTitle
        center
        title="DRP BCP"
        paragraph="Protect your business with expert continuity solutions"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "The ability to maintain operations during disruptions is essential for success. Business Continuity Management (BCM) ensures that your organization can effectively respond to crises, whether caused by natural disasters, technical failures, or unforeseen events. By implementing a robust BCM strategy, you can safeguard your resources, protect your reputation, and minimize financial losses.",

          "Every company, regardless of its size or industry, faces potential risks that could disrupt its operations. With Business Continuity Management, you can identify vulnerabilities, develop effective response plans, and ensure a smooth recovery process. This proactive approach not only enhances your organization’s resilience but also fosters confidence among stakeholders, clients, and employees.  Here is why choose Insight’s IT Advisory solutions :",
        ]}
      />

      {independentReviewData.map((section, index) => (
        <ContentSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          content={section.content}
          reverse={section.reverse}
        />
      ))}

      <ServiceListSection
        title="BCP / DRP solutions include :"
        services={[
          "Developing Business Continuity Plan (BCP)",
          "Developing Disaster Recovery Plan (DRP)",
        ]}
      />

      <ContactUsSection textContent="Connect with our audit experts to explore business continuity solutions" />
    </>
  );
};

export default DrpbcpPage;
