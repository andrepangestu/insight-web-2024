import React from "react";
import SingleFeature from "../Features/SingleFeature";
import productOverviewData from "./productOverviewData";
import SectionTitle from "../Common/SectionTitle";

const ProductOverview = () => {
  return (
    <section id="features" className="bg-cultured py-12">
      <div className="container">
        <SectionTitle
          title="Product Overview"
          paragraph="Empower your business priorities with our full-service suite of cutting-edge technology solutions."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {productOverviewData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
