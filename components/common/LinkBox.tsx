import React from "react";

interface LinkBoxProps {
  children: React.ReactNode;
  active?: {
    value: boolean;
    type: "activeLeft" | "activeBottom";
  };
  clickFunction?: () => void;
}

const LinkBox: React.FC<LinkBoxProps> = (props) => {
  const { children, active, clickFunction } = props;
  return (
    <div
      className={`relative rd cursor-pointer ${
        active?.value ? active.type : ""
      }`}
      onClick={() => clickFunction?.()}
    >
      {children}
    </div>
  );
};

export default LinkBox;
