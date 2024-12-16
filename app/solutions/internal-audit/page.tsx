import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";

import ContentSection from "@/components/Common/ContentSection";
import SectionDescription from "@/components/Common/SectionDescription";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";
import { internalAuditData } from "./internalAuditData";

const InternalAuditPage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/solutions/internal-audit/internal-audit-banner.svg"
        alt="Banner Internal Audit"
      />

      <SectionTitle
        center
        title="Internal Audit"
        paragraph="Delivering value beyond compliance"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "At Insight, we don’t just audit for compliance, we audit for business improvement. By identifying inefficiencies and areas for growth, we help you optimize your operations, reduce costs, and enhance overall performance.",

          "We advise a diverse range of clients, from growing and established businesses to public companies in global markets. Our hands-on approach focuses on understanding the people involved and gaining industry insights. Our internal audit solutions enhance financial, business, and IT controls, transforming your audit function into a strategic asset.",
        ]}
      />

      {internalAuditData.map((section, index) => (
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
        title="Internal audit services :"
        services={[
          "Assessment of internal controls based on COSO and other international standards",
          "Quality assessment review (QAR) of internal audit functions using IIA Standards",
          "Development of internal audit policy and procedures",
          "Implementation of audit management system software",
          "Implementation of fraud prevention and detection services",
          "Provision of internal audit training",
        ]}
      />

      <ContactUsSection />
    </>
  );
};

export default InternalAuditPage;
