import React from "react";
import { ICONS } from "@/common/constants/icons";
import IconBox from "@/components/common/IconBox";
import ProgressBox from "@/components/common/ProgressBox";

interface CMPlayerRegulatorsProps {
  volume: string;
  changeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CMPlayerRegulators: React.FC<CMPlayerRegulatorsProps> = (props) => {
  const { volume, changeFn } = props;

  return (
    <div id={"player-regulator"} className={"full flex jc ic gap-2 text-2xl"}>
      {["device", "playlist", "equalizer", "volume"].map((item, idx) => {
        return (
          <IconBox
            key={item}
            icon={ICONS["player"][item]}
            iconShape={idx === 3 ? "rounded" : "square"}
          />
        );
      })}
      <ProgressBox value={volume} changeFn={changeFn} />
    </div>
  );
};

export default CMPlayerRegulators;
