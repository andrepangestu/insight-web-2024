import useDeviceType from "@/hook/use-device-type";
import SectionTitle from "../Common/SectionTitle";
import NewsAndEventItem from "./NewsAndEventItem";
import { NewsAndEvent } from "@/types/newsAndEvent";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const newsAndEventData: NewsAndEvent[] = [
  {
    id: 1,
    type: "Product News 1",
    title: "Expand Your Audit Analytics Landscape: Introducing IDEA 11",
    date: "6 September 2024",
    content:
      "Improving efficiency has always been a priority for the audit function. With newer technological applications, expansion across geographies, and increasing competition, auditors around the world need to adopt a robust audit practice.",
  },
  {
    id: 2,
    type: "Product News 2",
    title: "Expand Your Audit Analytics Landscape: Introducing IDEA 11",
    date: "6 September 2024",
    content:
      "Improving efficiency has always been a priority for the audit function. With newer technological applications, expansion across geographies, and increasing competition, auditors around the world need to adopt a robust audit practice.",
  },
  {
    id: 3,
    type: "Product News 3",
    title: "Expand Your Audit Analytics Landscape: Introducing IDEA 11",
    date: "6 September 2024",
    content:
      "Improving efficiency has always been a priority for the audit function. With newer technological applications, expansion across geographies, and increasing competition, auditors around the world need to adopt a robust audit practice.",
  },
];

const NewsAndEvents = () => {
  const { isMobile } = useDeviceType();
  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };
  return (
    <section className="relative z-10 bg-white py-6 md:py-16">
      <div className="">
        <SectionTitle
          title="News / Product News / Events"
          paragraph=""
          center
          mb={isMobile ? "10px" : "16px"}
        />

        {isMobile ? (
          <MultiCarousel
            responsive={responsive}
            ssr
            infinite
            containerClass="container-with-dots"
            itemClass="image-item p-4"
            arrows={false}
            swipeable
            customTransition="all .5"
            transitionDuration={500}
          >
            {newsAndEventData.map((item) => (
              <NewsAndEventItem key={item.id} item={item} />
            ))}
          </MultiCarousel>
        ) : (
          <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {newsAndEventData.map((item) => (
              <NewsAndEventItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsAndEvents;
