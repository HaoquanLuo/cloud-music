import React from "react";

interface clickBoxProps {
  children: React.ReactNode;
  active?: {
    value: boolean;
    type: "activeLeft" | "activeBottom";
  };
  clickFn?: () => void;
}

const ClickBox: React.FC<clickBoxProps> = (props) => {
  const { children, active, clickFn } = props;
  return (
    <div
      className={`relative rd cursor-pointer ${
        active?.value ? active.type : ""
      }`}
      onClick={() => clickFn?.()}
    >
      {children}
    </div>
  );
};

export default React.memo(ClickBox);
