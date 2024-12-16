import Image from "next/image";

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
  reverse?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  content,
  reverse = false,
}) => {
  return (
    <section className="mx-52 mb-8">
      <div
        className={`flex grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-10`}
      >
        <div
          className={`${reverse && "order-last flex justify-end"} col-span-2`}
        >
          <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
        </div>
        <div className="col-span-8">
          <span className="mb-6 inline-block text-base font-semibold text-primaryText">
            {title}
          </span>
          <span className="inline-block text-sm font-medium text-primaryTextBody">
            {content}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
