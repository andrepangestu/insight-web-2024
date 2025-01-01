import React, { useState, useRef } from "react";
import "./Collapsible.css";

interface CollapsibleProps {
  title: JSX.Element | string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  isOpen,
  setIsOpen,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button className="collapsible__toggle" onClick={toggleCollapsible}>
        {title}
      </button>
      <div
        className="collapsible__content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
