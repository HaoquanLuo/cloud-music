import React from "react";

interface SliderBoxProps {
  value: string;
  changeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  max?: number;
  min?: number;
}

const SliderBox: React.FC<SliderBoxProps> = (props) => {
  const { value, changeFn, step = 10, max = 100, min = 0 } = props;
  return (
    <div className={"slider-box"}>
      <input
        type={"range"}
        value={value}
        onChange={changeFn}
        min={min}
        max={max}
        step={step}
        id={"player-volume"}
        className={"h-3 bg-red-600 appearance-none overflow-hidden rd-3"}
      />
    </div>
  );
};

export default React.memo(SliderBox);
