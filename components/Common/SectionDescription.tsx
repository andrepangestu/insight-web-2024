import React from "react";

interface SectionDescriptionProps {
  texts: string[];
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ texts }) => {
  return (
    <section className="container mb-12 md:mx-24 md:mb-16">
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
