"use client";

import React from "react";
import SingleFeature from "../Features/SingleFeature";
import productOverviewData from "./productOverviewData";
import SectionTitle from "../Common/SectionTitle";
import useDeviceType from "@/hook/use-device-type";

const ProductOverview = () => {
  const { isMobile } = useDeviceType();

  return (
    <>
      <section id="features" className="bg-cultured py-6 md:py-12">
        <div className="container">
          <SectionTitle
            title="Product Overview"
            paragraph="Empower your business priorities with our full-service suite of cutting-edge technology solutions."
            center
            mb={isMobile ? "30px" : "100px"}
          />

          <div className="flex grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3">
            {productOverviewData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOverview;
