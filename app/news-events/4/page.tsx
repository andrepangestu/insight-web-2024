"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import NavigationFooter from "@/components/NavigationFooter";
import VideoEmbed from "@/components/VideoEmbed";
import useDeviceType from "@/hook/use-device-type";
import { ArrowLeftRedIcon, ArrowRightRedIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const NewsEventsDetailPage4 = () => {
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

  const FeatureList = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => {
    return (
      <div className="mb-6">
        <span className="mb-2 block font-bold text-primaryText">{title}</span>
        <ul className="mb-4 list-inside list-disc">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

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
          Caseware Introduces AiDA: The AI-Powered Digital Assistant Changing
          the Face of Accounting and Audit
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            20 June 2024 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Insight Consulting
          </span>
        </div>

        <span className="mb-4 block font-medium text-primaryText">
          CaseWare International, a global leader in cloud-enabled audit,
          financial reporting and data analytics solutions, is delighted to
          announce the pre-launch availability of{" "}
          <Link href="https://www.caseware.com/au/aida-future-accounting-audit/">
            <span className="ml-1 font-medium text-primaryRed underline">
              Caseware AiDA
            </span>
          </Link>
          , its Artificial Intelligence digital assistant, for customers in
          Australia. As the latest enhancement to the industry-leading Caseware
          Cloud platform, AiDA complements Caseware’s comprehensive suite of
          solutions created with accounting, audit and finance professionals in
          mind.
        </span>

        <span className="mb-4 block font-medium text-primaryText">
          AiDA is designed to enhance efficiency, ensure compliance and provide
          precise, context-aware responses to profession-specific enquiries
          enabling accounting, audit and finance experts to work more
          efficiently, collaborate with greater effectiveness and gain deeper
          insights.
        </span>

        <span className="mb-4 block font-medium text-primaryText">
          Whether providing timely responses to methodology or compliance
          questions, supporting the processing and analysis of audit evidence,
          or assisting with the production of key audit workpapers and
          deliverables, AiDA empowers professional users to achieve more with
          less effort. This will, in turn, drive practice growth and power the
          financial success of clients.
        </span>

        <span className="mb-4 block font-medium text-primaryText">
          Some of the benefits to be gained from Caseware AiDA include:
        </span>

        <ul className="mb-4 ml-4 list-disc">
          <li>
            Enhanced workflow efficiency with precision and relevance – whether
            summarising lengthy PDFs or providing informed answers about your
            documentation in the moment, AiDA helps you work smarter, not
            harder.
          </li>
          <li>
            Reassurance around security and compliance – with AiDA, no prompts
            are stored or fed back into the model. Users can trust AiDA to
            maintain the highest data security and compliance standards that
            Caseware has always delivered for the profession.
          </li>
          <li>
            Assistance with routine tasks – AiDA assists with mundane tasks,
            enabling professionals to focus on strategic decision-making.
          </li>
          <li>
            Focus on quality output – AiDA delivers a safe and fit-for-purpose
            resource which ensures efficient workflows for clients.
          </li>
        </ul>

        <span className="mb-4 block font-medium text-primaryText">
          Caseware AiDA (pronounced AY-duh) draws inspiration from
          <Link href="https://en.wikipedia.org/wiki/Ada_Lovelace">
            <span className="ml-1 font-medium text-primaryRed underline">
              Ada Lovelace
            </span>
          </Link>
          , whose impact on scientific computing continues to influence
          generations of technologists and mathematicians around the world.
        </span>
      </div>

      <NavigationFooter
        previousLink="/news-events/3"
        nextLink="/news-events/1"
      />
    </>
  );
};

export default NewsEventsDetailPage4;
