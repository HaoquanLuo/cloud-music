import React from "react";
import Image from "next/image";

import { ICONS } from "@/common/constants/icons";

import { formatMS } from "@/utils/timeFormat";
import { getPic } from "@/utils/getPic";

import IconBox from "@/components/common/IconBox";

interface CMPlayerSongInfoProps {
  songCurrentTime: number;
  songInfo: CM.SongInfo;
}

const CMPlayerSongInfo: React.FC<CMPlayerSongInfoProps> = (props) => {
  const { songCurrentTime, songInfo } = props;
  const picUrl =
    (songInfo.songTitle !== "unknown" && getPic(songInfo.songCoverId)) || "";
  return (
    <div id={"player-song"} className={"full flex gap-4 ic"}>
      <Image
        src={picUrl}
        alt={songInfo.songTitle}
        id="song-cover"
        width={64}
        height={64}
        className={"w-16 h-16 rd"}
      />
      <div id={"song-info"} className={"w-24 flex flex-col gap-1"}>
        <div id={"song-info-title"} className={"text-base"}>
          {songInfo.songTitle}
        </div>
        <div id={"song-info-singer"} className={"truncate"}>
          {songInfo.songSinger}
        </div>
      </div>
      <div id={"song-detail"} className={"w-24 flex flex-col gap-1"}>
        <div id={"song-detail-addition"} className={"flex jb ic"}>
          <div id={"song-like"} className={`text-xl text-red-600 m-0 `}>
            <IconBox
              icon={
                true ? ICONS["player"]["heartFill"] : ICONS["player"]["heart"]
              }
              iconShape={"rounded"}
              iconSize={"xl"}
              iconWidth={8}
              iconHeight={8}
            />
          </div>
          <div id={"song-format"} className={"px-1"}>
            FLAC
          </div>
        </div>
        <div id={"song-detail-length"} className={"flex je"}>
          <div id={"song-current-time"} className={"w-10 text-left"}>
            {formatMS(songCurrentTime, false)}
          </div>
          <div>/</div>
          <div id={"song-duration"} className={"w-10 text-right"}>
            {formatMS(songInfo.songDuration, false)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CMPlayerSongInfo);
