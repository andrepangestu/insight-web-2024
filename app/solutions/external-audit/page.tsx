import Banner from "@/components/Banner";
import ContentSection from "@/components/Common/ContentSection";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionDescription from "@/components/Common/SectionDescription";
import SectionTitle from "@/components/Common/SectionTitle";
import { externalAuditData } from "./externalAuditData";
import ServiceListSection from "@/components/Common/ServiceListSection";
import ContactUsSection from "@/components/Section/ContactUsSection";

const ExternalAuditPage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/solutions/external-audit/external-audit-banner.svg"
        alt="Banner External Audit"
      />

      <SectionTitle
        center
        title="External Audit"
        paragraph="Enhance your engagement workflow with analytics"
        mb="24px"
      />

      <SectionDescription
        texts={[
          "As online transactions increase, you now have access to more data than ever before. This data presents new challenges, such as identifying anomalies and analyzing various trends and patterns. Therefore, it is essential to integrate analytics into your assurance engagements to provide high-quality audits with greater efficiency.",

          "Insight offers leading global audit analytics software that seamlessly integrates with Caseware Working Papers and Caseware Cloud. This solution provides a user-friendly, data-driven approach for external auditors, accountants, and data analysts, ensuring you have the tools needed to succeed. Why insight’s external audit solutions can optimize your business:",
        ]}
      />

      {externalAuditData.map((section, index) => (
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
        title="External Audit solutions include :"
        services={[
          "Quickly and easily import data from multiple sources",
          "Accelerate audits with intelligent analytics",
          "Analyze all your data with pre-built tests",
          "Create impactful reports with powerful visualization tools",
          "Improve collaboration with Caseware Cloud features",
        ]}
      />

      <ContactUsSection />
    </>
  );
};

export default ExternalAuditPage;
