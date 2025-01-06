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
      bannerSrc = "/images/news-events/news-events-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc = "/images/news-events/news-events-tablet-banner.svg";
      break;
    default:
      bannerSrc = "/images/news-events/news-events-banner.svg";
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
          Caseware Monitor became Alessa
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
          Formerly known as CaseWare Monitor, Alessa is CaseWare’s solution for
          AML compliance, sanctions screening, fraud detection & prevention,
          procurement monitoring and continuous controls monitoring.
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
