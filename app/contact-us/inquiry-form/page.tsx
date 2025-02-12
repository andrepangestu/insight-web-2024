"use client";

import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import InquiryForm from "@/components/InquiryForm";
import Contact from "@/components/InquiryForm/Contact";
import useDeviceType from "@/hook/use-device-type";
import React from "react";

const InquiryFormPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  let bannerSrc;
  switch (true) {
    case isMobile:
      bannerSrc =
        "https://assets.insight.co.id/images/contact-us/contact-us-mobile-banner.svg";
      break;
    case isTablet:
      bannerSrc =
        "https://assets.insight.co.id/images/contact-us/contact-us-tablet-banner.svg";
      break;
    default:
      bannerSrc =
        "https://assets.insight.co.id/images/contact-us/contact-us-banner.svg";
  }

  return (
    <>
      <ScrollUp />
      <Banner src={bannerSrc} alt="Banner Document Collaboration" />

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
        <div className="mx-auto w-full md:w-6/12">
          <InquiryForm />
        </div>
      </div>
    </>
  );
};

export default InquiryFormPage;
