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
      bannerSrc = "/images/news-events/news-events-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc = "/images/news-events/news-events-tablet-banner.svg";
      break;
    default:
      bannerSrc = "/images/news-events/news-events-banner.svg";
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
          Experience the IDEA 10.4 Launch and See How 10.4 Will Boost the
          Performance of Your Audit Team
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            16 December 2019 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Irfan Irawan
          </span>
        </div>

        <span className="mb-4 block font-medium text-primaryText">
          The new release of IDEA is here! Watch our pre-recorded webinar to
          experience improvements to visualizations, user experience,
          interoperability, and much more.
        </span>

        <VideoEmbed src="https://www.youtube.com/embed/X9Li-TPn_ww" />

        <span className="mb-4 block font-medium text-primaryText">
          The new features and enhancements demonstrated include:
        </span>

        <FeatureList
          title="Seamless Integrations"
          items={[
            "Now users can gain access to data sources from over 55 different accounting packages",
            "New: IDEA and CaseWare Working Papers integration now allows for seamless access of accounting data to enhance engagements",
            "A collaborative virtualized audit environment",
            "Free audit scripts from IDEAScripting.com",
            "Improved Python integration",
          ]}
        />

        <FeatureList
          title="Improved Visualizations"
          items={[
            "More charts available and an improved user experience",
            "Open Database Connectivity Driver (OBDC) lets users import third-party applications such as Tableau, Power BI and more",
            "Upgraded support for 4K monitors",
          ]}
        />

        <FeatureList
          title="Supporting Features"
          items={[
            "Improved data archiving",
            "Transport Layer Security 1.2 (TLS) improves security protocol for data transfer",
            "Identifies potential non-compliant General Data Protection Regulation (GDPR) risks within your data",
          ]}
        />

        <div>
          <span className="mr-1 font-medium text-primaryText">Source:</span>
          <Link href="https://idea.caseware.com/webinar-idea-10-4-launch/">
            <span className="mb-4 font-medium text-primaryRed underline">
              https://idea.caseware.com/webinar-idea-10-4-launch/
            </span>
          </Link>
        </div>
      </div>

      <NavigationFooter
        previousLink="/news-events/3"
        nextLink="/news-events/1"
      />
    </>
  );
};

export default NewsEventsDetailPage4;
