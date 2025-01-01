import React from "react";
import { LeftArrowGrayIcon, RightArrowGrayIcon } from "@/public/icons";

interface CustomButtonProps {
  onClick?: () => void;
  direction: "left" | "right";
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button custom-button--${direction}`}
    >
      {direction === "left" ? <LeftArrowGrayIcon /> : <RightArrowGrayIcon />}
    </button>
  );
};

export default CustomButton;
