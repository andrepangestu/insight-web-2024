import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import ContentSection from "@/components/Common/ContentSection";
import SectionDescription from "@/components/Common/SectionDescription";
import ContactUsSection from "@/components/Section/ContactUsSection";
import { ideagenInternalAuditData } from "./data";

const InternalAuditPage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/products/ideagen-internal-audit/ideagen-internal-audit-banner.svg"
        alt="Banner Ideagen Internal Audit"
        logoSrc="/images/products/ideagen-internal-audit/ideagen-internal-audit-logo.svg"
        withRectangle
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

      {ideagenInternalAuditData.map((section, index) => (
        <ContentSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          content={section.content}
          reverse={section.reverse}
        />
      ))}

      <ContactUsSection />
    </>
  );
};

export default InternalAuditPage;
