import LearnMoreButton from "../Button/LearnMoreButton";
import { NewsAndEvent } from "@/types/newsAndEvent";

const NewsAndEventItem = ({ item }: { item: NewsAndEvent }) => {
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one lg:px-5 xl:px-8"
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
          <span className="text-sm font-medium text-primaryText">
            {item?.content}
          </span>
        </div>

        <LearnMoreButton />
      </div>
    </div>
  );
};

export default NewsAndEventItem;
