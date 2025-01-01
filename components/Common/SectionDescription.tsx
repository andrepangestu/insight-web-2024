import React from "react";

interface SectionDescriptionProps {
  texts: string[];
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ texts }) => {
  return (
    <section className="container mx-auto mx-auto mb-12 md:w-3/5">
      {texts.map((text, index) => (
        <span
          key={index}
          className={`inline-block text-center text-sm font-medium text-primaryTextBody ${
            index !== texts.length - 1 ? "mb-4 md:mb-8" : ""
          }`}
        >
          {text}
        </span>
      ))}
    </section>
  );
};

export default SectionDescription;
