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
        title="Strengthen internal audit control and boost confidence with Ideagen"
        paragraph="Ideagen Internal Audit is the market-leading risk-based audit management software solution for hundreds of organizations worldwide"
        mb="24px"
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
