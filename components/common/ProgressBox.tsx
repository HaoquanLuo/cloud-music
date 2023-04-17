import React from "react";

interface ProgressBoxProps {
  value: number;
  max: number;
  progressClickFn: (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => void;
  progressDownFn: (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => void;
  progressUpFn: (e: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void;
}

const ProgressBox: React.FC<ProgressBoxProps> = (props) => {
  const { value, max, progressClickFn, progressDownFn, progressUpFn } = props;
  return (
    <div className={"absolute top-0 left-0 right-0 w-full h-1 mx-a my-0 rd-1"}>
      <progress
        className={"v-top full cursor-pointer text-red-600"}
        value={value}
        max={max}
        onMouseDown={progressDownFn}
        onMouseUp={progressUpFn}
        onClick={progressClickFn}
      />
    </div>
  );
};

export default React.memo(ProgressBox);
