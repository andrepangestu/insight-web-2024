import { ArrowRightRedIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

interface LearnMoreButtonProps {
  link?: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = (props) => {
  return (
    <Link href={props?.link || ""}>
      <button className="flex items-center justify-center">
        <span className="mr-2 font-medium text-primaryRed">Learn more</span>
        <ArrowRightRedIcon />
      </button>
    </Link>
  );
};

export default LearnMoreButton;
