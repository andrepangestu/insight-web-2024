import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { independentReviewData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";

const ItAdvisoryPage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/solutions/it-assurance/it-assurance-banner.svg"
        alt="Banner Independent Review for Brokerage"
      />

      <SectionTitle
        center
        title="IT Advisory"
        paragraph="Empower your business with effective IT advisory"
        mb="24px"
      />

      <SectionDescription
        texts={[
            "Strong IT advisory is essential for any organization aiming to succeed. Choosing an IT advisory service allows you to benefit from expert insights and practical solutions tailored to your unique needs. With a structured approach, you can optimize your existing governance systems or establish a solid foundation for IT governance for the first time. Empower your business to navigate challenges confidently and achieve its strategic objectives with the right governance in place. Here is why choose Insight’s IT Advisory solutions :",
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
        title="IT advisory solutions include :"
        services={[
          "Development of IT strategic plan, including business and technical aspects",
          "Development of IT policy and procedures",
        ]}
      />

      <ContactUsSection />
    </>
  );
};

export default ItAdvisoryPage;