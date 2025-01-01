"use client";

import React, { useState } from "react";

const InquiryForm = () => {
  const [emailData, setEmailData] = useState({
    companyName: "",
    name: "",
    phone: "",
    companyEmail: "",
    industry: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Error sending email: " + result.error);
      }
    } catch (error) {
      alert("Error sending email: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <input
          type="company-name"
          name="company-name"
          placeholder="Company Name"
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
          onChange={handleChange}
        />
        <input
          type="name"
          name="name"
          placeholder="Your Name"
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone"
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        />
        <input
          type="company-email"
          name="company-email"
          placeholder="Company Email"
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        />

        <select
          name=""
          defaultValue=""
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        >
          <option value="" disabled hidden>
            Industry
          </option>
          <option value="Aerospace Industry">Aerospace Industry</option>
          <option value="Transport Industry">Transport Industry</option>
          <option value="Information Technology Industry">
            Information Technology Industry
          </option>
          <option value="Telecommunication industry">
            Telecommunication industry
          </option>
          <option value="Agriculture industry">Agriculture industry</option>
          <option value="Construction Industry">Construction Industry</option>
          <option value="Education Industry">Education Industry</option>
          <option value="Pharmaceutical Industry">
            Pharmaceutical Industry
          </option>
          <option value="Food & Beverage Industry">
            Food & Beverage Industry
          </option>
          <option value="Health Care Industry">Health Care Industry</option>
          <option value="Hospitality Industry">Hospitality Industry</option>
          <option value="News Media & Entertainment Industry">
            News Media & Entertainment Industry
          </option>
          <option value="Energy Industry">Energy Industry</option>
          <option value="Manufacturing Industry">Manufacturing Industry</option>
          <option value="Oil & Gas, Mining Industry">
            Oil & Gas, Mining Industry
          </option>
          <option value="Electronics Industry">Electronics Industry</option>
        </select>

        <select
          name=""
          defaultValue=""
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        >
          <option value="" disabled selected hidden>
            Subject
          </option>
          <option value="Insight Consulting Solutions Info">
            Insight Consulting Solutions Info
          </option>
          <option value="Insight Consulting Services Info">
            Insight Consulting Services Info
          </option>
          <option value="Insight Consulting Product Info & Demo">
            Insight Consulting Product Info & Demo
          </option>
          <option value="Insight Consulting Training Info">
            Insight Consulting Training Info
          </option>
        </select>

        <textarea
          rows={5}
          placeholder="Add additional info"
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <input
            type="input-captcha"
            name="input-captcha"
            placeholder="Input Captcha"
            className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
          />
          <div className="flex h-[52px] items-center justify-center bg-seaServant text-white">
            CAPTCHA
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primaryRed py-3 text-base font-semibold text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
