import { ArrowRightRedIcon } from "@/public/icons";
import React from "react";

interface LearnMoreButtonProps {
  link?: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = (props) => {
  return (
    <button className="flex items-center justify-center">
      <span className="mr-2 font-medium text-primaryRed">Learn more</span>
      <ArrowRightRedIcon />
    </button>
  );
};

export default LearnMoreButton;
