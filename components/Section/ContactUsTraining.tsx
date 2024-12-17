import { MessageIcon } from "@/public/icons";
import React from "react";

const ContactUsTraining = () => {
  return (
    <section className="bg-spaceCadet py-4">
      <div className="w-full flex-row items-center justify-center text-center">
        <span className="text-base font-normal text-white">
          Contact us for details information about Training
        </span>

        <button className="justify center ml-4 inline-flex items-center rounded-lg border border-white p-2">
          <MessageIcon />
          <span className="ml-2 font-semibold text-white">Training Form</span>
        </button>

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
