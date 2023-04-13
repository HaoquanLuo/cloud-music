import React from "react";

interface CMPlayerProps {
  songLoadedFn: (e: React.ChangeEvent<HTMLAudioElement>) => void;
  timeUpdateFn: (e: React.ChangeEvent<HTMLAudioElement>) => void;
  songEndedFn: (e: React.ChangeEvent<HTMLAudioElement>) => void;
  PlayerSongInfo: React.ReactNode;
  PlayerOperations: React.ReactNode;
  PlayerRegulators: React.ReactNode;
}

const CMPlayer = React.forwardRef<HTMLAudioElement, CMPlayerProps>(
  function CMPlayer(props, ref) {
    const {
      songLoadedFn,
      timeUpdateFn,
      songEndedFn,
      PlayerOperations,
      PlayerRegulators,
      PlayerSongInfo,
    } = props;
    return (
      <div id={"player-container"} className={"w-full h-full flex"}>
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
          onLoadedData={songLoadedFn}
          onTimeUpdate={timeUpdateFn}
          onEnded={songEndedFn}
        />
      </div>
    );
  }
);

export default CMPlayer;
