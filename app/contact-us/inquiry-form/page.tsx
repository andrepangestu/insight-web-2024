import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import InquiryForm from "@/components/InquiryForm";
import Contact from "@/components/InquiryForm/Contact";
import React from "react";

const InquiryFormPage = () => {
  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/contact-us/contact-us-banner.svg"
        alt="Banner Document Collaboration"
      />

      <div className="container text-center">
        <span className="mb-4 block text-[16px] font-semibold text-primaryText">
          Inquiry Form
        </span>

        <span className="block text-[26px] font-semibold text-primaryText">
          To learn more about our solutions and products or book a demo, simply
          fill out this form and our sales representative will contact you
          shortly.
        </span>
      </div>

      <div className="container my-16">
        <div className="px-96">
          <InquiryForm />
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
};

export default InquiryFormPage;
