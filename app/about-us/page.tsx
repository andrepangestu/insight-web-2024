import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import ContactUsTraining from "@/components/Section/ContactUsTraining";
import {
  HandshakeIcon,
  ImprovementIcon,
  LandscapeIcon,
  LearningIcon,
  MessagingIcon,
  PottedPlantIcon,
} from "@/public/icons";
import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  const OurValueSection = ({
    title,
    icon,
  }: {
    title: string;
    icon: JSX.Element;
  }) => (
    <div className="flex flex-col items-center">
      {icon}
      <span className="mt-4 text-base font-medium text-primaryTextBody">
        {title}
      </span>
    </div>
  );
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/about-us/about-us-banner.svg"
        alt="Banner About Us"
      />

      <div className="container text-center">
        <div className="mb-8 text-base font-medium text-primaryText">
          Overview
        </div>

        <div className="mb-8 text-[26px] font-semibold text-primaryText">
          Leading Management Assurance Consulting and Technology Solutions in
          Asia Pacific
        </div>

        <div className="mb-8 text-base font-semibold text-primaryTextBody">
          Insight Consulting is proud to be one of Asia Pacific’s leading
          providers of management assurance consulting services and technology
          solutions. Our services include corporate governance, internal audit,
          risk management, IT audit, IT security, business continuity planning
          (BCP), disaster recovery planning (DRP), and IT business processes. We
          serve over 100 clients from various industries, achieving success
          through our effective methodologies and resources.
        </div>

        <div className="mb-8 text-sm font-medium text-primaryTextBody">
          Established in 2000, Insight Consulting has built a reputation for
          trust. We have completed many consulting and implementation projects.
          These include internal audits, risk consulting services, and data
          analytics implementation. We also provide continuous control
          monitoring systems, IT audits, IT security projects, and BCP/DRP
          projects. Our services extend to Independent Reviews and Vulnerability
          Assessments for brokers. This includes remote trading, online trading
          (i-trade, web trade, mobile trading), Direct Market Access, Automated
          Ordering (Algorithmic Trading), BCP Implementation (including Business
          Continuity Management and Disaster Recovery Center), Multi-JONEC
          Implementation, BOFIS Standardization, and network hardware changes.
        </div>

        <hr className="my-16 w-full border-b border-lightSilver" />
      </div>

      <div className="container mb-16 text-center">
        <div className="mb-8 text-lg font-medium text-primaryText">
          Our Values
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <OurValueSection
            title="Be Passionate and Determined"
            icon={<LandscapeIcon />}
          />

          <OurValueSection
            title="Be Proactive and Productive"
            icon={<LearningIcon />}
          />

          <OurValueSection
            title="Be Reliable and Trustworthy"
            icon={<HandshakeIcon />}
          />

          <OurValueSection
            title="Build Open and Positive Communication"
            icon={<MessagingIcon />}
          />

          <OurValueSection
            title="Pursue Growth and Learning"
            icon={<PottedPlantIcon />}
          />

          <OurValueSection
            title="Deliver Effective and Excellent Services"
            icon={<ImprovementIcon />}
          />
        </div>

        <hr className="my-16 w-full border-b border-lightSilver" />
      </div>

      <div className="container mb-24 text-center">
        <div className="mb-8 text-lg font-medium text-primaryText">
          Our People
        </div>

        <div className="mb-8 text-base font-semibold text-primaryTextBody">
          At Insight Consulting, we have passionate, well-trained, and highly
          skilled professionals who work together with clients to overcome
          challenges. Our team has unique skills and experiences from diverse
          backgrounds. This combination allows us to provide fresh ideas and
          practical solutions for our clients’ complex assignments.
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/about-us/placeholder-rounded.svg"
            alt="About Us People"
            width={100}
            height={100}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex w-[300px] text-base font-semibold text-primaryTextBody">
            Rizki Rangkuti MMT IIAP CCSA CRMA GRCP GRCA CIDA QRGP CERG
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="text-sm font-medium text-primaryText">
            Managing Director
          </div>
        </div>
      </div>

      <ContactUsTraining />
    </>
  );
};

export default AboutUsPage;
