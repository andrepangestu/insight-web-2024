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
    <section className="container lg:px-40 xl:px-60">
      <div
        className={`flex grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3`}
      >
        <div
          className={`${
            reverse && "order-last flex justify-end"
          } md:col-span-1`}
        >
          <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
        </div>
        <div className="md:col-span-2">
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
