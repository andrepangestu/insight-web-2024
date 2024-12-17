import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import ContactUsTraining from "@/components/Section/ContactUsTraining";
import {
  BooksIcon,
  FileExplorerIcon,
  SystemInformationIcon,
  TrainingIcon,
} from "@/public/icons";
import React from "react";

const TrainingOverviewPage = () => {
  const SectionDescription = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <div className="container mb-16 px-24 text-center">
        <span className="mb-4 inline-block text-base font-semibold text-primaryText">
          {title}
        </span>
        <span className="inline-block text-sm font-medium text-primaryText">
          {description}
        </span>
      </div>
    );
  };

  const ContentWithIcon = ({
    title,
    icon,
    description,
    descriptionList,
  }: {
    title: string;
    icon: JSX.Element;
    description?: string;
    descriptionList?: string[];
  }) => {
    return (
      <div className="container mb-16">
        <div className=" flex justify-center">{icon}</div>
        <div className="mt-8 text-center text-lg font-semibold text-primaryText">
          {title}
        </div>

        {description && (
          <div className="mt-8 text-center text-sm font-medium text-primaryTextBody">
            {description}
          </div>
        )}

        <div className="flex justify-center">
          <ul className="list-inside list-disc">
            {descriptionList?.map((item, index) => (
              <li
                key={index}
                className="mt-1 w-[450px] text-center text-sm font-medium text-primaryTextBody"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/training/training-banner.svg"
        alt="Banner Document Collaboration"
      />

      <SectionTitle
        center
        title="IDEA Training"
        paragraph="Data Analytic Training"
        description="Self-paced and textbook learning can be time-consuming and difficult. Our instructor-led training provides new and experienced IDEA® users with the skills to master the basics, refine existing knowledge, and fully utilize IDEA."
      />

      <ContentWithIcon
        title="Why Invest in IDEA Training?"
        icon={<BooksIcon />}
      />

      <SectionDescription
        title="Get the Most from IDEA."
        description="Unlock the full potential of IDEA by applying it to real-world business challenges. Automate routine tasks, focus on complex data analysis, and identify key trends in financial and customer data. IDEA training also helps improve communication between departments, reduce inefficiencies, and enhance service quality. For new hires and seasoned employees, IDEA training boosts productivity, job satisfaction, and retention. It equips employees with the tools and confidence they need to make a meaningful impact across the organization."
      />

      <SectionDescription
        title="Efficient and Effective Training"
        description="Our instructor-led training is performance-driven and focused on what you need to be more productive. Unlike traditional learning, this method ensures you stay engaged and maximize your learning time."
      />

      <SectionDescription
        title="Convenient and Flexible"
        description="We offer training onsite at your location or offsite at global facilities. IDEA's versatility supports various fields like Audit, Finance, Sales, and IT, making it relevant across roles and industries."
      />

      <ContentWithIcon
        title="Our Instructors"
        icon={<TrainingIcon />}
        description="Our CaseWare Certified Instructors are experienced professionals in data analytics and workflow automation. They use real-world examples and practical tips to ensure participants easily relate to the material. They are approachable and available to address any questions."
      />

      <ContentWithIcon
        title="Training Programs"
        icon={<FileExplorerIcon />}
        description="We offer three IDEA Data Analytics courses and one certification preparation course:"
        descriptionList={[
          "CI101: IDEA Data Analysis Level 1",
          "CI102: IDEA Data Analysis Level 2",
          "CI103: IDEAScript for Analysts",
          "CI201: IDEA Data Analysis CIDA Exam Preparation Each participant receives a training manual and course data files.",
        ]}
      />

      <ContentWithIcon
        title="Onsite Training"
        icon={<SystemInformationIcon />}
        description="Onsite training is a cost-effective solution for large teams or company-wide initiatives. We tailor the sessions to meet your team or organization's specific needs, making training more relevant and applicable. This fosters consistency and cooperation while ensuring training is adaptable and economical."
      />

      <ContactUsTraining />
    </>
  );
};

export default TrainingOverviewPage;
