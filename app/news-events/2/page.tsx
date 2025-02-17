"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import NavigationFooter from "@/components/NavigationFooter";
import useDeviceType from "@/hook/use-device-type";
import { ArrowLeftRedIcon, ArrowRightRedIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const NewsEventsDetailPage2 = () => {
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
          IDEA 13 is here!
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            12 December 2024 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Insight Consulting
          </span>
        </div>

        <span className="mb-4 block font-medium text-primaryText">
          With this latest release, take your audit analytics to the next level.
        </span>

        <span className="mb-4 block font-medium text-primaryText">
          IDEA 13 bring you a new and exciting hybrid analytics experience,
          intuitive interface, built-in Smart Actions, powerful enhancements and
          much more.This release includes significant new features like the
          integration of the AI-powered digital assistant Caseware AiDA, which
          designed to enhance efficiency and provide dynamic, context-aware
          responses to profession-specific enquiries.
        </span>

        <span className="mb-4 block font-medium text-primaryText">
          A major improvement in terms of user experience is the new Check for
          Updates feature, which is available in the IDEA ribbon. It provides
          easy access to IDEA updates and notifies users when updates for IDEA
          are available. Additionally, the new versions come with sample
          enhancements for script scheduling, handling of the DPI scaling as
          well as performance improvements in several areas.
        </span>
      </div>

      <NavigationFooter
        previousLink="/news-events/1"
        nextLink="/news-events/3"
      />
    </>
  );
};

export default NewsEventsDetailPage2;
