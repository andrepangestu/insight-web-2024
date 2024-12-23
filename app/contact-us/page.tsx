"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import ScrollUp from "@/components/Common/ScrollUp";
import InquiryForm from "@/components/InquiryForm";
import { LetterBoxIcon } from "@/public/icons";

const ContactUsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/placeholder")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <ScrollUp />
      <Banner
        src="/images/contact-us/contact-us-banner.svg"
        alt="Banner Document Collaboration"
      />

      <div className="container text-center">
        <span className="mb-4 block text-[16px] font-semibold text-primaryText">
          Contact Us
        </span>

        <span className="block text-[26px] font-semibold text-primaryText">
          Need to Get in Touch? <br />
          We’d Love to Hear From You.
        </span>
      </div>

      <div className="container mt-16 flex flex-col items-center justify-center">
        <LetterBoxIcon />

        <span className="my-8 block text-[18px] font-medium text-primaryText">
          PT Insight Consulting
        </span>

        <div className="mb-8 text-center">
          <span className="block text-[16px] font-medium text-primaryText">
            Sona Topas Tower, Level 16
          </span>
          <span className="block text-[16px] font-medium text-primaryText">
            Jl Jend. Sudirman Kav. 26
          </span>
          <span className="block text-[16px] font-medium text-primaryText">
            Jakarta 12920, Indonesia.
          </span>
          <span className="block text-[16px] font-medium text-primaryText">
            Phone: (62) 21 250-6696
          </span>
          <span className="block text-[16px] font-medium text-primaryText">
            Fax: (62) 21 250-6697
          </span>
          <span className="block text-[16px] font-medium text-primaryText">
            www.insight.co.id
          </span>
        </div>

        <hr className="my-8 w-full border-b border-lightSilver" />
      </div>

      <div className="container mb-12 text-center">
        <span className="mb-4 block text-[18px] font-medium text-primaryText">
          Inquiry Form
        </span>

        <div className="px-96">
          <InquiryForm />
        </div>
      </div>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.533177239038!2d106.820759!3d-6.213075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd81bdfb489fb33d1!2sGedung%20Sona%20Topas%20Tower!5e0!3m2!1sen!2sid!4v1593788781220!5m2!1sen!2sid"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </>
  );
};

export default ContactUsPage;
