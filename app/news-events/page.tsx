"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import NewsEventsItem from "@/components/NewsEventsItem";
import React from "react";
import newsEventsListData from "./data";
import useDeviceType from "@/hook/use-device-type";

const NewsEventsPage = () => {
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
      <Banner src={bannerSrc} alt="Banner News & Events" />

      <span className="container block text-[16px] font-semibold text-primaryText">
        News & Events
      </span>

      <div className="container">
        {newsEventsListData.map((newsEvent, index) => (
          <NewsEventsItem
            key={index}
            title={newsEvent.title}
            date={newsEvent.date}
            author={newsEvent.author}
            content={newsEvent.content}
            slug={newsEvent.slug}
          />
        ))}
      </div>
    </>
  );
};

export default NewsEventsPage;
