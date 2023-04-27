import ProgressBox from "@/components/common/ProgressBox";
import React from "react";

interface CMPlayerProps {
  // metaData
  songCurrentTime: number;
  songDuration: number;
  // song
  songLoadedFn: (e: React.ChangeEvent<HTMLAudioElement>) => void;
  songTimeUpdateFn: (e: React.ChangeEvent<HTMLAudioElement>) => void;
  songEndedFn: (e: React.ChangeEvent<HTMLAudioElement>) => void;
  // progress
  progressClickFn: (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => void;
  progressDownFn: (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => void;
  progressUpFn: (e: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void;
  // player
  PlayerSongInfo: React.ReactNode;
  PlayerOperations: React.ReactNode;
  PlayerRegulators: React.ReactNode;
}

const CMPlayer = React.forwardRef<HTMLAudioElement, CMPlayerProps>(
  function CMPlayer(props, ref) {
    const {
      songCurrentTime,
      songDuration,
      songLoadedFn,
      songTimeUpdateFn,
      songEndedFn,
      progressClickFn,
      progressDownFn,
      progressUpFn,
      PlayerOperations,
      PlayerRegulators,
      PlayerSongInfo,
    } = props;
    return (
      <div
        id={"player-container"}
        className={"relative w-full h-full flex bg-#1f1f1f rd-2 px-6 ofh"}
      >
        <ProgressBox
          value={Math.floor(songCurrentTime)}
          max={Math.floor(songDuration)}
          progressClickFn={progressClickFn}
          progressDownFn={progressDownFn}
          progressUpFn={progressUpFn}
        />
        <div id={"player-left"} className={"flex-1 text-sm"}>
          {PlayerSongInfo}
        </div>
        <div id={"player-middle"} className={"flex-1"}>
          {PlayerOperations}
        </div>
        <div id={"player-right"} className={"flex-1"}>
          {PlayerRegulators}
        </div>
        <audio
          ref={ref}
          onLoadedMetadata={songLoadedFn}
          onTimeUpdate={songTimeUpdateFn}
          onEnded={songEndedFn}
        />
      </div>
    );
  }
);

export default React.memo(CMPlayer);
