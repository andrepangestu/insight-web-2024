"use client";

import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { casewareCloudKeyFeatures, casewareCloudData } from "./data";
import ContactUsSection from "@/components/Section/ContactUsSection";
import KeyFeatures from "@/components/KeyFeature";
import useDeviceType from "@/hook/use-device-type";

const casewareCloudPage = () => {
  const { isMobile, isDesktop } = useDeviceType();
  const bannerSrc = isMobile
    ? "/images/products/caseware-cloud/caseware-cloud-mobile-banner.svg"
    : "/images/products/caseware-cloud/caseware-cloud-banner.svg";

  return (
    <>
      <ScrollUp />
      <Banner
        src={bannerSrc}
        alt="Banner Caseware Cloud"
        logoSrc="/images/products/caseware-logo.svg"
        withRectangle={isDesktop}
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
        title="Key features of Caseware Cloud"
        paragraph="Caseware Cloud transforms your accounting practice with the following key features:"
        keyFeaturesData={casewareCloudKeyFeatures}
      />

      <ContactUsSection textContent="Interested in trying Caseware Cloud?" />
    </>
  );
};

export default casewareCloudPage;
