import SectionTitle from "../Common/SectionTitle";
import NewsAndEventItem from "./NewsAndEventItem";
import { NewsAndEvent } from "@/types/newsAndEvent";

const newsAndEventData: NewsAndEvent[] = [
  {
    id: 1,
    type: "Product News",
    title: "Expand Your Audit Analytics Landscape: Introducing IDEA 11",
    date: "6 September 2024",
    content:
      "Improving efficiency has always been a priority for the audit function. With newer technological applications, expansion across geographies, and increasing competition, auditors around the world need to adopt a robust audit practice.",
  },
  {
    id: 2,
    type: "Product News",
    title: "Expand Your Audit Analytics Landscape: Introducing IDEA 11",
    date: "6 September 2024",
    content:
      "Improving efficiency has always been a priority for the audit function. With newer technological applications, expansion across geographies, and increasing competition, auditors around the world need to adopt a robust audit practice.",
  },
  {
    id: 3,
    type: "Product News",
    title: "Expand Your Audit Analytics Landscape: Introducing IDEA 11",
    date: "6 September 2024",
    content:
      "Improving efficiency has always been a priority for the audit function. With newer technological applications, expansion across geographies, and increasing competition, auditors around the world need to adopt a robust audit practice.",
  },
];

const NewsAndEvents = () => {
  return (
    <section className="relative z-10 bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="News / Product News / Events"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {newsAndEventData.map((item) => (
            <NewsAndEventItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
