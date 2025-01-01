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
      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4">
        {Array.isArray(props.keyFeaturesData) &&
          props.keyFeaturesData.map((feature, index) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
