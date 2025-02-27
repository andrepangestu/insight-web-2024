import LearnMoreButton from "../Button/LearnMoreButton";
import { NewsAndEvent } from "@/types/newsAndEvent";
import "./styles.css";

const NewsAndEventItem = ({
  item,
  withEllipsis,
}: {
  item: NewsAndEvent;
  withEllipsis?: boolean;
}) => {
  return (
    <div className="h-[500px] shadow-inner shadow-lg md:h-[400px]">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-4">
          <span className="text-base font-semibold text-primaryTextBlue">
            {item?.type}
          </span>
        </div>

        <div className="mb-4">
          <span className="text-xl font-semibold text-primaryText">
            {item?.title}
          </span>
        </div>

        <div className="mb-4">
          <span className="text-sm font-normal text-primaryTextGrey">
            {item?.date}
          </span>
        </div>

        <div className="mb-4">
          <span
            className={`text-sm font-medium text-primaryText ${
              withEllipsis && "text-ellipsis"
            }`}
          >
            {item?.content}
          </span>
        </div>

        <LearnMoreButton link={`news-events/${item?.id}`} />
      </div>
    </div>
  );
};

export default NewsAndEventItem;
