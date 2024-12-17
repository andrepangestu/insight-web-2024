import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import { dataAnalyticsData } from "./dataAnalyticsData";

const DataAnalyticsPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/solutions/data-analytics/data-analytics-banner.svg"
        alt="Banner Data Analytics"
      />

      <SectionTitle
        center
        title="Data Analytics"
        paragraph="Unleashing the power of data to drive strategic decisions"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "Unlock deeper insights to drive better decisions with Insight’s advanced data analytics solutions. In today’s fast-paced digital world, the ability to analyze large volumes of data quickly and accurately is crucial. With powerful data analytics, companies can detect fraud, identify trends, and uncover hidden patterns that lead to smarter business strategies.",

          "At Insight, we leverage cutting-edge analytics tools to help organizations transform raw data into actionable insights. Our solutions provide the clarity you need to manage risks, improve decision-making, and optimize processes efficiently. Whether you are looking to audit, assess risks, or analyze operational data, our services are designed to deliver comprehensive and reliable results. Below are why insight’s data analytics solutions can optimize your business:",
        ]}
      />

      {dataAnalyticsData.map((section, index) => (
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

      <ContactUsSection textContent="Connect with our audit experts to explore data analytics solutions"/>
    </>
  );
};

export default DataAnalyticsPage;
