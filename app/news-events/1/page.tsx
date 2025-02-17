"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import NavigationFooter from "@/components/NavigationFooter";
import useDeviceType from "@/hook/use-device-type";
import { ArrowLeftRedIcon, ArrowRightRedIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const NewsEventsDetailPage1 = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/news-events/news-events-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/news-events/news-events-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/news-events/news-events-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner News & Events Detail" />

      <Link href={`/news-events`}>
        <div className="container flex cursor-pointer items-center">
          <ArrowLeftRedIcon />
          <span className="container block text-[16px] font-semibold text-primaryRed">
            Back to list
          </span>
        </div>
      </Link>

      <div className="container mb-16">
        <hr className="my-8 w-full border-b border-lightSilver" />
        <span className="mb-4 block text-[26px] font-semibold text-primaryTextBlue">
          Caseware Announces Acquisition of Extractly.ai
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            25 January 2025 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Insight Consulting
          </span>
        </div>

        <span className="mb-4 block font-medium text-primaryText">
          CaseWare, a global leader in cloud-enabled audit, financial reporting
          and data analytics solutions, today announced the acquisition of
          <Link href="https://extractly.ai/">
            <span className="ml-1 font-medium text-primaryRed underline">
              Extractly.ai
            </span>
          </Link>
          , the provider of intelligent document processing solutions that
          streamline the audit process for accounting and finance teams. Founded
          in 2021, Extractly.ai offers solutions that understand and process
          accounting and financial documents, delivering actionable results and
          enabling automated workflows.
        </span>
        <span className="mb-4 block font-medium text-primaryText">
          This strategic acquisition includes Extractly.ai’s proprietary
          software solutions,
          <Link href="https://extractly.ai/validate/">
            <span className="mx-1 font-medium text-primaryRed underline">
              Validate
            </span>
          </Link>
          and
          <Link href="https://extractly.ai/extractly/">
            <span className="mx-1 font-medium text-primaryRed underline">
              Extractly+
            </span>
          </Link>
          which are available in all English-speaking markets. Plans to localize
          Validate are due to be announced in the future.
        </span>
        <span className="mb-4 block font-medium text-primaryText">
          Validate’s AI-powered algorithms automate the financial statement
          review process. The cloud-based solution enables accounting
          professionals in audit and in corporate financial reporting to
          automate the tedious task of validating the accuracy of their
          financial statement reports for mathematical accuracy, internal
          consistency, prior period consistency and consistency across versions.
        </span>
        <span className="mb-4 block font-medium text-primaryText">
          Extractly+ optimizes workflows with automated PDF data extraction and
          document matching, eliminating manual searching and data entry. It
          delivers reliable data, allowing team members to gain maximum insight
          via trusted extracted data, resulting in higher-quality outputs
          completed in less time. Collaborative data access promotes teamwork
          and informed decision-making by facilitating easy sharing of extracted
          data among team members, enhancing productivity.
        </span>

        {/* <ul className="mb-4 list-inside list-disc">
          <li>Advanced data analysis</li>
          <li>Improved compability</li>
          <li>A collaborative virtualized audit environment</li>
          <li>Robust integration</li>
          <li>A flexible licensing model</li>
        </ul>

        <span className="mb-1 block font-medium text-primaryText">
          Watch the recording above for a glimpse of IDEA 11 in action!
        </span>
        <Link href="https://idea.caseware.com/idea-11-release-webinar/">
          <span className="mb-4 block font-medium text-primaryRed underline">
            https://idea.caseware.com/idea-11-release-webinar/
          </span>
        </Link> */}
      </div>

      <NavigationFooter
        previousLink="/news-events/4"
        nextLink="/news-events/2"
      />
    </>
  );
};

export default NewsEventsDetailPage1;
