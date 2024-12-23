"use client";

import { sendEmail } from "@/utils/send-email";
import { FC } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="border-gray-300 text-gray-700 focus:border-purple-500 w-full rounded-md border bg-white px-6 py-3 text-base font-medium outline-none focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="border-gray-300 text-gray-700 focus:border-purple-500 w-full rounded-md border bg-white px-6 py-3 text-base font-medium outline-none focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="border-gray-300 text-gray-700 focus:border-purple-500 w-full resize-none rounded-md border bg-white px-6 py-3 text-base font-medium outline-none focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
