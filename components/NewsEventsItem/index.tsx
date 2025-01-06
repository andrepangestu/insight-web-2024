import Link from "next/link";
import React from "react";

interface NewsEventsItemProps {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  slug: string;
}

const NewsEventsItem: React.FC<NewsEventsItemProps> = ({
  id,
  title,
  date,
  author,
  content,
  slug,
}) => {
  return (
    <>
      <hr className="my-8 w-full border-b border-lightSilver" />
      <Link href={`/news-events/${id}`}>
        <span className="mb-4 block text-[26px] font-semibold text-primaryTextBlue">
          {title}
        </span>
      </Link>
      <div className="mb-4">
        <span className="mr-1 text-sm font-normal text-primaryTextGrey">
          {date} | Product News. | by
        </span>
        <span className="text-sm font-normal text-primaryRed">{author}</span>
      </div>
      <span className="mb-16 block text-sm font-medium text-primaryText">
        {content}
      </span>
    </>
  );
};

export default NewsEventsItem;
