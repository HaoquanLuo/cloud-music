import React from "react";
import { ICONS } from "@/common/constants/icons";
import IconBox from "@/components/common/IconBox";
import SliderBox from "@/components/common/SliderBox";

interface CMPlayerRegulatorsProps {
  volume: string;
  changeVolumeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CMPlayerRegulators: React.FC<CMPlayerRegulatorsProps> = (props) => {
  const { volume, changeVolumeFn } = props;

  return (
    <div id={"player-regulator"} className={"full flex jn ic gap-2 text-2xl"}>
      {["device", "playlist", "equalizer", "volume"].map((item, idx) => {
        return (
          <IconBox
            key={item}
            icon={ICONS["player"][item]}
            iconShape={idx === 3 ? "rounded" : "square"}
          />
        );
      })}
      <SliderBox value={volume} changeFn={changeVolumeFn} />
    </div>
  );
};

export default React.memo(CMPlayerRegulators);
