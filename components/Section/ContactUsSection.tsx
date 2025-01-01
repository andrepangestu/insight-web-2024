import { MessageIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

interface ContactUsSectionProps {
  textContent?: string;
}

const ContactUsSection: React.FC<ContactUsSectionProps> = (props) => {
  return (
    <section className="bg-spaceCadet p-8 md:py-4">
      <div className="w-full flex-row items-center justify-center text-center">
        <span className="block text-base font-normal text-white md:inline-block">
          {props.textContent ??
            "Connect with our audit experts to explore internal audit solutions"}
        </span>

        <Link
          href="contact-us"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-white p-2 md:ml-4"
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
