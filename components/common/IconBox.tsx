import React from "react";

interface IconBoxProps {
  icon: CM.Icon | string;
  clickable?: boolean;
  bgHighlight?: boolean;
  iconShape?: "rounded" | "square";
  iconWidth?: number;
  iconHeight?: number;
  iconSize?: "xl" | "2xl" | "3xl";
}

const IconBox: React.FC<IconBoxProps> = (props) => {
  const {
    icon,
    clickable = true,
    bgHighlight = true,
    iconShape = "square",
    iconWidth = 10,
    iconHeight = 10,
    iconSize = "2xl",
  } = props;
  return (
    <div
      className={`grid pic ${
        iconShape === "square" ? "rd" : "rd-36"
      } w-${String(iconWidth)} h-${String(iconHeight)} text-${iconSize} ${
        clickable ? "cursor-pointer" : ""
      } ${bgHighlight ? "bgHighlight" : ""}`}
    >
      <div
        className={`${typeof icon === "string" ? icon : icon.iconContent}`}
      ></div>
    </div>
  );
};

export default React.memo(IconBox);
