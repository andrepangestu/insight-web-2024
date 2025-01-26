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
        "http://localhost/insight-new-assets/news-events/news-events-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "http://localhost/insight-new-assets/news-events/news-events-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "http://localhost/insight-new-assets/news-events/news-events-banner.svg";
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
          Ideagen acquaires Morgan Kai Group Ltd.
        </span>
        <div className="mb-4">
          <span className="mr-1 text-sm font-normal text-primaryTextGrey">
            16 December 2019 | Product News. | by
          </span>
          <span className="text-sm font-normal text-primaryRed">
            Irfan Irawan
          </span>
        </div>

        <span className="mb-5 block font-medium text-primaryText">
          Ideagen plc, the UK-based, global software firm, today announced the
          acquisition of Morgan Kai Group Ltd, a leading Audit Management
          software provider to both public and private sector organisations.
        </span>

        <VideoEmbed src="https://www.youtube.com/embed/ThDt3Zfl2JI" />
      </div>

      <NavigationFooter
        previousLink="/news-events/2"
        nextLink="/news-events/4"
      />
    </>
  );
};

export default NewsEventsDetailPage3;
