import { MessageIcon } from "@/public/icons";
import Link from "next/link";
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

        <Link
          href="contact-us"
          className="ml-4 inline-flex items-center justify-center rounded-lg border border-white p-2"
        >
          <MessageIcon />
          <span className="ml-2 font-semibold italic text-white">
            Contact us for Demo
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;
