import { MessageIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const ContactUsTraining = () => {
  return (
    <section className="bg-spaceCadet py-4">
      <div className="w-full flex-row items-center justify-center text-center">
        <span className="mb-2 block text-base font-normal text-white lg:inline-block">
          Contact us for details information about Training
        </span>
        <Link
          href="/contact-us/inquiry-form"
          className="justify center ml-4 inline-flex items-center rounded-lg border border-white p-2"
        >
          <MessageIcon />
          <span className="ml-2 font-semibold text-white">Training Form</span>
        </Link>

        <span className="ml-4 text-base font-normal text-white">or</span>
        <button className="justify center ml-4 inline-flex items-center rounded-lg border border-white p-2">
          <span className="ml-2 font-semibold text-white">
            +62-21-2506697 / training@insight.co.id
          </span>
        </button>
      </div>
    </section>
  );
};

export default ContactUsTraining;
