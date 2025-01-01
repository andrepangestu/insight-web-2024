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
    <section className="container mx-auto md:my-8 lg:px-40 xl:px-60">
      <div className={`flex grid grid-cols-1 items-center md:grid-cols-3`}>
        <div
          className={`flex justify-center md:justify-start ${
            reverse && "md:order-last md:flex md:justify-end"
          } mb-6 md:col-span-1`}
        >
          <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
        </div>
        <div
          className={`mb-12 text-center md:col-span-2 ${
            reverse ? "md:text-right" : "md:text-left"
          }`}
        >
          <span className="mb-4 inline-block text-base font-semibold text-primaryText md:mb-6">
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
