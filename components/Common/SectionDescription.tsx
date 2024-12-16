import React from "react";

interface SectionDescriptionProps {
  texts: string[];
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ texts }) => {
  return (
    <section className="mx-24 mb-16">
      {texts.map((text, index) => (
        <span
          key={index}
          className={`inline-block text-center text-sm font-medium text-primaryTextBody ${
            index !== texts.length - 1 ? "mb-8" : ""
          }`}
        >
          {text}
        </span>
      ))}
    </section>
  );
};

export default SectionDescription;
