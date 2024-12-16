import Image from "next/image";
import React from "react";

const Copyright = () => {
  return (
    <section className="px-24 py-10">
      <div className="flex items-center justify-between">
        <div>
          <span className="mr-1 text-sm font-normal text-primaryText">
            Copyright 2024 © All Rights Reserved by
          </span>
          <span className="text-sm font-semibold text-primaryText">
            Insight Consulting
          </span>
        </div>
        <div>
          <Image
            src="/images/logo/logo.svg"
            alt="logo"
            width={160}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Copyright;
