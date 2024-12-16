import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import { independentReviewData } from "./data";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";

const ItAssurancePage = () => {
  return (
    <>
      <ScrollUp />

      <Banner
        src="/images/solutions/it-assurance/it-assurance-banner.svg"
        alt="Banner Independent Review for Brokerage"
      />

      <SectionTitle
        center
        title="IT Assurance"
        paragraph="Protecting your assets and ensuring data security"
        mb="24px"
      />

      <SectionDescription
        texts={[
            "The role of Information Technology (IT) has become essential in managing business operations, but it faces many challenges. IT is now critical for protecting assets, maintaining data confidentiality and integrity, and ensuring smooth organizational performance.",

            "Insight Consulting addresses these challenges by offering IT assurance services that focus on risk management. We create customized audit plans based on each organization’s needs and follow international best practices.",
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
        title="IT assurance solutions include :"
        services={[
          "Assessment of IT controls, against COBIT, ITIL, ISO and other international standards",
          "Assessment of IT audit functions",
          "Design and implementation of more effective and efficient IT controls",
          "Development of IT audit policy and procedures"
        ]}
      />

      <ContactUsSection />
    </>
  );
};

export default ItAssurancePage;
