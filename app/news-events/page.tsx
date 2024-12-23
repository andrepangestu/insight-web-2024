import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import NewsEventsItem from "@/components/NewsEventsItem";
import React from "react";
import newsEventsListData from "./data";

const NewsEventsPage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/news-events/news-events-banner.svg"
        alt="Banner News & Events"
      />

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
