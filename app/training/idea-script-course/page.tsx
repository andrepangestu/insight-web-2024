import Banner from "@/components/Banner";
import ListSection from "@/components/Common/ListSection";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceListSection from "@/components/Common/ServiceListSection";
import TitleTraining from "@/components/ContentSection/TitleTraining";
import ContactUsTraining from "@/components/Section/ContactUsTraining";
import Image from "next/image";
import React from "react";

const IdeaScriptCoursePage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/training/script-for-analysis-banner.svg"
        alt="Banner Idea Script Course"
      />

      <div className="mt-4 flex justify-center">
        <Image
          src="/images/training/training-script-for-analysis.svg"
          alt="Training Script For Analysis"
          width={684}
          height={134}
        />
      </div>

      <TitleTraining
        title="IDEAScript for Analysis (3 Days)"
        description="This three-day course introduces experienced users to more advanced topics devoted to workflow automation with IDEAScript macros. IDEAScript, the IDEA programming language behind IDEAScript macros, is similar to and compatible with Visual Basic for Applications, the macro language used in Excel®, PowerPoint®, Word®, Access® and other Microsoft® Office® applications."
      />

      <ServiceListSection
        withoutDivider
        title="After completing this training, participants will be able to:"
        services={[
          "Automate repetitive tasks such as importing files.",
          "Create special tests and functions.",
          "Control and leverage the functionality of other OLE enabled software such as Microsoft® Excel®.",
          "Create smart data analytics systems with customizable dialog boxes, tags, and reports.",
        ]}
      />

      <div className="container text-center">
        <span className="mb-4 inline-block text-base font-semibold text-primaryText">
          Course Outline
        </span>

        <div className="container mx-auto grid grid-cols-1 md:w-4/5 md:grid-cols-2 lg:grid-cols-3">
          <ListSection
            items={[
              "Importing and Reconciling Project Data",
              "Profiling and Isolating Payment Data",
              "Identifying Irregularities and Using Field Manipulation",
              "Summarizing Data and Working with Multiple Files",
            ]}
          />
        </div>

        <div className="container mb-24 text-center">
          <div className="mb-8 mt-16 text-base font-semibold text-primaryText">
            Prerequisites
          </div>

          <span className="mb-1 w-[500px] text-center text-sm font-medium text-primaryText">
            Working knowledge of Microsoft® Windows® desktop environment
            Microsoft® Office® applications.
          </span>
          <div className="mb-1 text-center text-sm font-medium text-primaryText">
            Familiarity with CI101 course topics.
          </div>
          <span className="mb-1 text-center text-sm font-medium text-primaryText">
            Completion of CI101 is recommended.
          </span>
        </div>
      </div>

      <ContactUsTraining />
    </>
  );
};

export default IdeaScriptCoursePage;
