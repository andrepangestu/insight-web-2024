"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import { ArrowLeftRedIcon, ArrowRightRedIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const NewsEventsDetailPage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/news-events/news-events-banner.svg"
        alt="Banner Document Collaboration"
      />

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
          Expand Your Audit Analytics Landscape: Introducing IDEA 11
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            16 December 2019 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Irfan Irawan
          </span>
        </div>

        <span className="mb-4 block text-sm font-medium text-primaryText">
          Improving efficiency has always been a priority for the audit
          function. With newer technological applications, expansion across
          geographies, and increasing competition, auditors around the world
          need to adopt a robust audit practice
        </span>
        <span className="mb-4 block text-sm font-medium text-primaryText">
          With its latest release, IDEA expands its already stellar analytics
          offering with a range of new features and capabilities. IDEA 11
          empowers auditors with the following capabilities:
        </span>

        <ul className="mb-4 list-inside list-disc">
          <li>Advanced data analysis</li>
          <li>Improved compability</li>
          <li>A collaborative virtualized audit environment</li>
          <li>Robust integration</li>
          <li>A flexible licensing model</li>
        </ul>

        <span className="mb-1 block text-sm font-medium text-primaryText">
          Watch the recording above for a glimpse of IDEA 11 in action!
        </span>
        <Link href="https://idea.caseware.com/idea-11-release-webinar/">
          <span className="mb-4 block text-sm font-medium text-primaryRed underline">
            https://idea.caseware.com/idea-11-release-webinar/
          </span>
        </Link>
      </div>

      <div className="container mb-16">
        <hr className="my-8 w-full border-b border-lightSilver" />

        <div className="flex justify-center px-36">
          <div className="mr-4 flex cursor-pointer items-center">
            <ArrowLeftRedIcon />
            <span className="ml-2 text-[16px] font-semibold text-primaryRed">
              Previous
            </span>
          </div>
          <div className="ml-4 flex cursor-pointer items-center">
            <span className="mr-2 text-[16px] font-semibold text-primaryRed">
              Next
            </span>
            <ArrowRightRedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEventsDetailPage;
