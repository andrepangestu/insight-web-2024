import React from "react";
import { CheckBlueIcon } from "@/public/icons";

interface ServiceListSectionProps {
  title: string;
  services: string[];
}

const ServiceListSection: React.FC<ServiceListSectionProps> = ({
  title,
  services,
}) => {
  return (
    <section className="mx-24 mb-16">
      <hr className="my-16 w-full border-b border-lightSilver" />

      <div className="flex-row justify-center text-center">
        <span className="mb-8 inline-block text-base font-semibold text-primaryText">
          {title}
        </span>

        {services.map((service, index) => (
          <div key={index} className="mb-4 flex items-center justify-center">
            <CheckBlueIcon />
            <span className="ml-4 text-sm font-medium text-primaryText">
              {service}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceListSection;
