import { MessageIcon } from "@/public/icons";
import React from "react";

interface ContactUsSectionProps {
  textContent?: string;
}

const ContactUsSection: React.FC<ContactUsSectionProps> = (props) => {
  return (
    <section className="bg-spaceCadet py-4">
      <div className="w-full flex-row items-center justify-center text-center">
        <span className="text-base font-normal text-white">
          {props.textContent ??
            "Connect with our audit experts to explore internal audit solutions"}
        </span>

        <button className="justify center ml-4 inline-flex items-center rounded-lg border border-white p-2">
          <MessageIcon />
          <span className="ml-2 font-semibold italic text-white">
            Contact us for Demo
          </span>
        </button>
      </div>
    </section>
  );
};

export default ContactUsSection;
