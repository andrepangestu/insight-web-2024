"use client";

import { sendEmail } from "@/utils/send-email";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { industriesData, subjectsData } from "./data";
import { Bounce, toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

export type FormData = {
  companyName: string;
  name: string;
  phone: string;
  companyEmail: string;
  industry: string;
  subject: string;
  message: string;
};

const InquiryForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpired = () => {
    setCaptchaToken(null);
    toast.error("Captcha expired. Please complete the captcha again.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  async function onSubmit(data: FormData) {
    if (!captchaToken) {
      // Handle error (e.g., show an error message)
      toast.error("Please complete the captcha.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    try {
      await sendEmail(data);
      // Handle success (e.g., show a success message)
      reset(); // Reset the form
      setCaptchaToken(null); // Reset the captcha token
      recaptchaRef.current?.reset(); // Reset the reCAPTCHA
      setLoading(false);
    } catch (error) {
      await setLoading(false);
      // Handle error (e.g., show an error message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-md">
      <ToastContainer />
      <div className="mb-6">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className={`w-full border px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none ${
            formState.errors.companyName
              ? "border-primaryRed"
              : "border-lightSilver"
          } focus:border-primary focus-visible:shadow-none`}
          {...register("companyName", { required: "Company Name is required" })}
        />
        {formState.errors.companyName && (
          <p className="ml-1 mt-1 text-left text-sm text-primaryRed">
            {formState.errors.companyName.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`w-full border px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none ${
            formState.errors.name ? "border-primaryRed" : "border-lightSilver"
          } focus:border-primary focus-visible:shadow-none`}
          {...register("name", { required: "Name is required" })}
        />
        {formState.errors.name && (
          <p className="ml-1 mt-1 text-left text-sm text-primaryRed">
            {formState.errors.name.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className={`w-full border px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none ${
            formState.errors.phone ? "border-primaryRed" : "border-lightSilver"
          } focus:border-primary focus-visible:shadow-none`}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone number must be numeric",
            },
          })}
        />
        {formState.errors.phone && (
          <p className="ml-1 mt-1 text-left text-sm text-primaryRed">
            {formState.errors.phone.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email"
          className={`w-full border px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none ${
            formState.errors.companyEmail
              ? "border-primaryRed"
              : "border-lightSilver"
          } focus:border-primary focus-visible:shadow-none`}
          {...register("companyEmail", {
            required: "Company Email is required",
          })}
        />
        {formState.errors.companyEmail && (
          <p className="ml-1 mt-1 text-left text-sm text-primaryRed">
            {formState.errors.companyEmail.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <div className="relative">
          <select
            id="industry"
            {...register("industry", { required: "Industry is required" })}
            defaultValue=""
            className={`w-full appearance-none border px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none ${
              formState.errors.industry
                ? "border-primaryRed"
                : "border-lightSilver"
            } focus:border-primary focus-visible:shadow-none ${
              !formState.dirtyFields.industry ? "text-primaryTextGrey" : ""
            }`}
          >
            <option value="" disabled hidden>
              Industry
            </option>
            {industriesData.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          <div className="text-gray-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className={`h-4 w-4 fill-current ${
                formState.errors.industry ? "text-primaryRed" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {formState.errors.industry && (
          <p className="ml-1 mt-1 text-left text-sm text-primaryRed">
            {formState.errors.industry.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <div className="relative">
          <select
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            defaultValue=""
            className={`w-full appearance-none border px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none ${
              formState.errors.subject
                ? "border-primaryRed"
                : "border-lightSilver"
            } focus:border-primary focus-visible:shadow-none ${
              !formState.dirtyFields.subject ? "text-primaryTextGrey" : ""
            }`}
          >
            <option value="" disabled hidden>
              Subject
            </option>
            {subjectsData.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className={`h-4 w-4 fill-current ${
                formState.errors.subject ? "text-primaryRed" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {formState.errors.subject && (
          <p className="ml-1 mt-1 text-left text-sm text-primaryRed">
            {formState.errors.subject.message}
          </p>
        )}
      </div>

      {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <input
          type="text"
          name="input-captcha"
          placeholder="Input Captcha"
          className="mb-6 w-full border border-lightSilver px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one outline-none focus:border-primary focus-visible:shadow-none"
        />
        <div className="flex h-[52px] items-center justify-center bg-seaServant text-white">
          CAPTCHA
        </div>
      </div> */}

      <textarea
        rows={5}
        placeholder="Add additional info"
        className={`mb-6 w-full border border-lightSilver px-6 py-3 text-base text-black placeholder-primaryTextGrey shadow-one
        outline-none focus:border-primary focus-visible:shadow-none`}
        {...register("message")}
      />

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LdeW9kqAAAAAD95rA-bhI_4J5LwcyFl6RW9Eg_m"
          onChange={onCaptchaChange}
          onExpired={onCaptchaExpired}
        />
      </div>

      <div>
        <button
          type="submit"
          className={`w-full rounded-lg bg-primaryRed py-3 text-base font-semibold text-white transition-colors
        duration-300`}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="mr-2 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
