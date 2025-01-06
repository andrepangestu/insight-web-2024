import useDeviceType from "@/hook/use-device-type";
import SectionTitle from "../Common/SectionTitle";
import NewsAndEventItem from "./NewsAndEventItem";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { newsAndEventData } from "./data";

const NewsAndEvents = () => {
  const { isMobile } = useDeviceType();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  return (
    <section className="relative z-10 bg-white py-6 md:py-10 lg:py-16">
      <div className="container">
        <SectionTitle
          title="News / Product News / Events"
          paragraph=""
          center
          mb={isMobile ? "10px" : "16px"}
        />

        <MultiCarousel
          responsive={responsive}
          ssr
          infinite
          containerClass="container-with-dots"
          itemClass="image-item p-4 h-full"
          arrows={false}
          swipeable
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
        >
          {newsAndEventData.map((item) => (
            <NewsAndEventItem key={item.id} item={item} withEllipsis />
          ))}
        </MultiCarousel>

        {/* {isMobile ? (
          <MultiCarousel
            responsive={responsive}
            ssr
            infinite
            containerClass="container-with-dots"
            itemClass="image-item p-4"
            arrows={false}
            swipeable
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {newsAndEventData.map((item) => (
              <NewsAndEventItem key={item.id} item={item} withEllipsis />
            ))}
          </MultiCarousel>
        ) : (
          <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
            {newsAndEventData.map((item) => (
              <NewsAndEventItem key={item.id} item={item} />
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
};

export default NewsAndEvents;
