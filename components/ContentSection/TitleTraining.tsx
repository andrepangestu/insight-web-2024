import React from "react";

interface TitleTrainingProps {
  title: string;
  description: string;
}

const TitleTraining: React.FC<TitleTrainingProps> = (props) => {
  return (
    <div className="container my-16 text-center">
      <span className="text-[26px] font-semibold text-primaryText">
        {props.title}
      </span>

      <span className="mt-8 inline-block text-sm font-medium text-primaryText">
        {props.description}
      </span>
    </div>
  );
};

export default TitleTraining;
