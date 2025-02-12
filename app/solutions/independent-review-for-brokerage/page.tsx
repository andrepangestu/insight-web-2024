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

const IndependentReviewPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/independent-review-for-brokerage/independent-review-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/independent-review-for-brokerage/independent-review-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/solutions/independent-review-for-brokerage/independent-review-banner.svg";
  }
  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner Independent Review for Brokerage" />

      <SectionTitle
        center
        title="Independent Review for Brokerage"
        paragraph="Improve your decision-making process with our all-in-one review solutions"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "In a rapidly evolving market, accurate and unbiased insights are crucial for strategic decision-making. At Insight, we offer a suite of Independent Review solutions designed to provide clarity and drive results.",

          "In order to keep up with the risk of attacks, organizations need to utilize professional expertise to secure their infrastructure and applications. Insight Consulting, as one of the registered Independent Reviewer at the Indonesian Stock Exchange, facilitates every stock exchange member and broker in the review process towards the system competency and implementation.",
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
        title="Independent review solutions include :"
        services={[
          "Equity Trading System (Remote Trading, Online Trading, Mobile Trading, Direct Market Access)",
          "Brokerage Office Information System (BOFIS) Standardization and Implementation",
          "Algorithmic Trading System",
          "Data Center and Disaster Recovery Center (DRC) Relocation",
          "Business Continuity Plan (BCP) Implementation for Brokerage",
          "Vulnerability Assessment",
          "Vulnerability Assessment",
        ]}
      />

      <ContactUsSection textContent="Connect with our audit experts to explore independent review solutions" />
    </>
  );
};

export default IndependentReviewPage;
