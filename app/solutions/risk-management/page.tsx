"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { riskManagementData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import useDeviceType from "@/hook/use-device-type";

const RiskManagementPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/risk-management/risk-management-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/risk-management/risk-management-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/risk-management/risk-management-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner Risk Management" />

      <SectionTitle
        center
        title="Risk Management"
        paragraph="Mitigate risk, maximize growth"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "In today's dynamic business environment, effective risk management is crucial for sustained growth. Insight’s comprehensive risk management solutions empower organizations to identify, assess, and mitigate risks, enabling you to focus on what matters most, your success.",

          "Learn how our Managed Risk Services can help your organization strengthen compliance, limit risk, and achieve operational excellence. Growing companies face ever-evolving risks, but with guidance from Insight Consulting, your approach to risk management can be much more than a preventative measure, it can be a strategic driver. Why insight’s risk management solutions can optimize your business:",
        ]}
      />

      {riskManagementData.map((section, index) => (
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
        title="Risk Management solutions include :"
        services={[
          "Assessment of risks against international standards, including financial, operational, technology and other risks.",
          "Assessment of risk management functions",
          "Development of risk management policy and procedures",
          "Implementation of risk management system software",
          "Provision of risk management training",
        ]}
      />

      <ContactUsSection textContent="Connect with our audit experts to explore risk management solutions" />
    </>
  );
};

export default RiskManagementPage;
