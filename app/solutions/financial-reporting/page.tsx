"use client";

import React from "react";
import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import { financialReportingData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import useDeviceType from "@/hook/use-device-type";

const FinancialReportingPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/financial-reporting/financial-reporting-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/financial-reporting/financial-reporting-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/financial-reporting/financial-reporting-banner.svg";
  }
  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner Financial Reporting" />

      <SectionTitle
        center
        title="Financial Reporting"
        paragraph="Accurate and compliant financial reporting for confident decision-making"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "Financial reporting solutions empower businesses to focus on growth while staying confident that their financial data is precise, consistent, and audit-ready. Without reliable solutions, companies risk errors, non-compliance, and potential financial setbacks.",

          "By leveraging technology-driven financial reporting tools, businesses can ensure accuracy, streamline reporting processes, and maintain alignment with evolving regulatory standards. Whether you are managing complex data or navigating regulatory requirements, these solutions provide the clarity and control you need. Below are why insight’s financial reporting solutions can optimize your business:",
        ]}
      />

      {financialReportingData.map((section, index) => (
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
        title="Financial reporting solutions include :"
        services={[
          "Automated financial data consolidation and validation",
          "Customizable templates to meet specific reporting requirements",
          "Comprehensive error detection and correction tools",
          "Real-time collaboration with team members and auditors",
          "Easy integration with accounting and ERP systems",
          "Secure cloud-based storage for reports and data",
          "User-friendly dashboards with advanced reporting capabilities",
        ]}
      />

      <ContactUsSection textContent="Connect with our audit experts to explore financial reporting solutions" />
    </>
  );
};

export default FinancialReportingPage;
