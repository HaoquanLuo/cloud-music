import React from "react";
import { ICONS } from "@/common/constants/icons";
import ClickBox from "@/components/common/ClickBox";
import IconBox from "@/components/common/IconBox";

interface CMPlayerOperationsProps {
  playerMode: CM.PlayerMode;
  playerStatus: CM.PlayerStatus;
  playOrPause: (key: "play" | "pause") => void;
  playNext: () => void;
  playPrev: () => void;
}

const CMPlayerOperations: React.FC<CMPlayerOperationsProps> = (props) => {
  const { playerMode, playerStatus, playOrPause, playNext, playPrev } = props;
  // other handle
  const control = playerStatus === "playing" ? "pause" : "play";
  // other handlers
  const handleModeChange = (key: CM.PlayerMode) => () => {
    console.log("click mode");
  };
  const handleOperationChange = (key: CM.PlayerOperations) => () => {
    switch (key) {
      case "skipBack":
        playPrev();
        break;

      case "skipForward":
        playNext();
        break;

      case "play":
      case "pause":
        playOrPause(key);
        break;

      default:
        break;
    }
  };
  return (
    <div id={"player-operator"} className={"full flex jc ic gap-3 text-2xl"}>
      <div id={"play-operator-mode"}>
        {["order", "random", "repeat", "repeatOne"].map((item, idx) => {
          if (item === playerMode) {
            return (
              <ClickBox key={item} clickFn={handleModeChange(item)}>
                <IconBox icon={ICONS["player"][item]} />
              </ClickBox>
            );
          }
        })}
      </div>
      <div id={"play-operator-operations"} className={"flex gap-2"}>
        <ClickBox clickFn={handleOperationChange("skipBack")}>
          <IconBox icon={ICONS["player"]["skipBack"]} />
        </ClickBox>
        <ClickBox clickFn={handleOperationChange(control)}>
          <IconBox icon={ICONS["player"][control]} />
        </ClickBox>
        <ClickBox clickFn={handleOperationChange("skipForward")}>
          <IconBox icon={ICONS["player"]["skipForward"]} />
        </ClickBox>
      </div>
    </div>
  );
};

export default React.memo(CMPlayerOperations);
