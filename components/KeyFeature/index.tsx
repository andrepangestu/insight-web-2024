import { Feature } from "@/types/feature";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";
import React from "react";

import "./styles.css";

interface KeyFeatureProps {
  title: string;
  paragraph: string;
  keyFeaturesData: Feature[];
}
const KeyFeatures: React.FC<KeyFeatureProps> = (props) => {
  return (
    <section id="features" className="vertical-gradient py-8 md:py-12">
      <SectionTitle title={props.title} paragraph={props.paragraph} center />
      <div className="container grid grid-cols-1 place-items-center justify-items-center gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
        {Array.isArray(props.keyFeaturesData) &&
          props.keyFeaturesData.map((feature) => (
            <div className="mx-auto w-3/6 md:w-full">
              <SingleFeature key={feature.id} feature={feature} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
