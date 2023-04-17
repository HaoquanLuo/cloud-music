import { getSong } from "@/utils/getSong";
import React from "react";

export const usePlayer = (songInfo: CM.SongInfo) => {
  // hooks
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [isSeeking, setIsSeeking] = React.useState<boolean>(false);
  // effects
  React.useEffect(() => {
    handleLoadSong(songInfo.songId);
  }, [songInfo.songId]);
  // other handles
  // handlers
  const handleLoadSong = (songId: string) => {
    if (audioRef.current) {
      audioRef.current.src = getSong(songId);
    }
  };
  const handleTimeUpdate = (e: React.ChangeEvent<HTMLAudioElement>) => {
    if (!isSeeking) {
      setCurrentTime(e.target.currentTime);
    }
  };
  const handleProgressClick = (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => {
    if (audioRef.current && !isSeeking) {
      const progressWidth = e.currentTarget.offsetWidth;
      const clickOffsetX = e.nativeEvent.offsetX;
      const newCurrentTime =
        (songInfo.songDuration * clickOffsetX) / progressWidth;
      audioRef.current.currentTime = newCurrentTime;
    }
  };
  const handleProgressDown = (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => {
    setIsSeeking(true);
  };
  const handleProgressUp = (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>
  ) => {
    if (audioRef.current && isSeeking) {
      setIsSeeking(false);
      const progressWidth = e.currentTarget.offsetWidth;
      const clickOffsetX = e.nativeEvent.offsetX;
      const newCurrentTime =
        (songInfo.songDuration * clickOffsetX) / progressWidth;
      audioRef.current.currentTime = newCurrentTime;
    }
  };

  return {
    audioRef,
    currentTime,
    handleProgressClick,
    handleProgressDown,
    handleProgressUp,
    handleTimeUpdate,
  };
};
