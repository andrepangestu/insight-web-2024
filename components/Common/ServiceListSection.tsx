import React from "react";
import { CheckBlueIcon } from "@/public/icons";

interface ServiceListSectionProps {
  title: string;
  services: string[];
  withoutDivider?: boolean;
}

const ServiceListSection: React.FC<ServiceListSectionProps> = ({
  title,
  services,
  withoutDivider,
}) => {
  return (
    <section className="container md:mx-24 md:mb-16">
      {!withoutDivider && (
        <hr className="mb-12 w-full border-b border-lightSilver md:my-16" />
      )}

      <div className="mb-8 flex-row md:justify-center md:text-center">
        <span className="mb-8 block text-center text-base font-semibold text-primaryText">
          {title}
        </span>

        {services.map((service, index) => (
          <div key={index} className="mb-4 flex items-center md:justify-center">
            <div>
              <CheckBlueIcon />
            </div>

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
