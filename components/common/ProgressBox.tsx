import React from "react";

interface ProgressBoxProps {
  value: string;
  changeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProgressBox: React.FC<ProgressBoxProps> = (props) => {
  const { value, changeFn } = props;
  return (
    <>
      <input
        type={"range"}
        value={value}
        onChange={changeFn}
        min={0}
        max={100}
        step={2}
        id={"player-volume"}
        className={"h-3 bg-red-600 appearance-none overflow-hidden rd-3"}
      />
    </>
  );
};

export default ProgressBox;
