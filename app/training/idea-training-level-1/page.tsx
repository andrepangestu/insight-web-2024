import Banner from "@/components/Banner";
import ListSection from "@/components/Common/ListSection";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceListSection from "@/components/Common/ServiceListSection";
import TitleTraining from "@/components/ContentSection/TitleTraining";
import ContactUsTraining from "@/components/Section/ContactUsTraining";
import Image from "next/image";
import React from "react";

const TrainingLevel1Page = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/solutions/document-collaboration/document-collaboration-banner.svg"
        alt="Banner Document Collaboration"
      />

      <div className="mt-4 flex justify-center">
        <Image
          src="/images/training/training-step-1.svg"
          alt="Training Step 1"
          width={684}
          height={134}
        />
      </div>

      <TitleTraining
        title="IDEA Data Analysis Level 1 (Two Days)"
        description="The purpose of this two-day introductory course is to acquaint new users with the bulk of IDEA’s basic functionality and breadth of tools. Training is immediately hands-on, so participants have the opportunity to quickly interact with the software by completing exercises and case studies using sample data."
      />

      <ServiceListSection
        withoutDivider
        title="After completing this training, participants will be able to:"
        services={[
          "Understand the purpose and features of IDEA.",
          "Consider business objectives to which IDEA can be applied.",
          "Determine the data required and import the data.",
          "Use IDEA in Audit, Finance, and other industries to increase efficiency and effectiveness.",
          "Improve governance and controls, and reduce risk in their organization.",
        ]}
      />

      <div className="container text-center">
        <span className="mb-4 inline-block text-base font-semibold text-primaryText">
          Course Outline
        </span>

        <div className="grid grid-cols-3 px-52">
          <ListSection
            items={[
              "Introducing IDEA",
              "Managing Databases",
              "Obtaining and Importing Data",
              "Reconciling and Examining Data",
              "Isolating Specific Records",
              "Profiling the Data",
            ]}
          />
          <ListSection
            items={[
              "Introducing IDEA",
              "Managing Databases",
              "Obtaining and Importing Data",
              "Reconciling and Examining Data",
              "Isolating Specific Records",
              "Profiling the Data",
            ]}
          />
          <ListSection
            items={[
              "Introducing IDEA",
              "Managing Databases",
              "Obtaining and Importing Data",
              "Reconciling and Examining Data",
              "Isolating Specific Records",
              "Profiling the Data",
            ]}
          />
        </div>

        <div className="container ">
          <span className="mt-16 inline-block text-base font-semibold text-primaryText">
            Prerequisites
          </span>
          <br />
          <span className="mb-24 mt-8 inline-block w-[500px] text-center text-sm font-medium text-primaryText">
            Working knowledge of Microsoft® Windows® desktop environment
            Microsoft® Office® applications.
          </span>
        </div>
      </div>

      <ContactUsTraining />
    </>
  );
};

export default TrainingLevel1Page;
