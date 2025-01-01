"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { documentCollaborationData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import useDeviceType from "@/hook/use-device-type";

const DocumentCollaborationPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "/images/solutions/document-collaboration/document-collaboration-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "/images/solutions/document-collaboration/document-collaboration-banner.svg";
      break;
    default:
      bannerSrc =
        "/images/solutions/document-collaboration/document-collaboration-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner Document Collaboration" />

      <SectionTitle
        center
        title="Document Collaboration"
        paragraph="Streamline your workflow with seamless collaborationh"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "In today’s fast-paced business environment, ensuring efficient and secure collaboration on critical documents is essential for productivity and accuracy. Whether your team is working on audits, compliance reviews, or complex management reports, document collaboration solutions allow for real-time updates, version control, and better coordination across departments and locations.",

          "By utilizing document collaboration tools, your organization can eliminate delays caused by manual processes, reduce risks associated with outdated files, and keep projects moving forward with clarity and precision.For companies operating across the Asia Pacific, leveraging a robust document collaboration solution can enhance cross-functional teamwork and ensure that stakeholders have access to the most up-to-date information. Below are why insight’s document collaboration solutions can optimize your business:",
        ]}
      />

      {documentCollaborationData.map((section, index) => (
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
        title="Document collaboration solutions include :"
        services={[
          "Secure document collaboration",
          "Free external users",
          "Review & approval workflows",
          "Multifactor authentication",
          "Integration with Microsoft 365 & SharePoint, Google Workspace & more",
          "Remote Collaboration app for iOS & Android",
        ]}
      />

      <ContactUsSection textContent="Connect with our audit experts to explore document collaboration solutions" />
    </>
  );
};

export default DocumentCollaborationPage;
