import React from "react";

interface ListSectionProps {
  items: string[];
}

const ListSection: React.FC<ListSectionProps> = ({ items }) => {
  return (
    <ul className="list-outside list-disc">
      {items.map((item, index) => (
        <li
          key={index}
          className="mt-1 w-[250px] text-left text-sm font-medium text-primaryTextBody"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListSection;
