"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import NavigationFooter from "@/components/NavigationFooter";
import VideoEmbed from "@/components/VideoEmbed";
import useDeviceType from "@/hook/use-device-type";
import { ArrowLeftRedIcon, ArrowRightRedIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const NewsEventsDetailPage3 = () => {
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
          New Ideagen Internal Audit.
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            1 December 2024 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Insight Consulting
          </span>
        </div>

        <span className="mb-5 block font-medium text-primaryText">
          Ideagen’s Internal Audit solution has a new edition that gives you the
          best of both worlds: a clean and modern interface that’s easy to use,
          with the expert functionality that Ideagen is known for.
        </span>

        <VideoEmbed src="https://www.youtube.com/embed/Tq99qyeLHLU" />
        <VideoEmbed src="https://www.youtube.com/embed/uX5E6lNJtUU" />
      </div>

      <NavigationFooter
        previousLink="/news-events/2"
        nextLink="/news-events/4"
      />
    </>
  );
};

export default NewsEventsDetailPage3;
