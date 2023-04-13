import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import { MENULINKS } from "@/common/constants/links/menuLinks";
import { useCMStorage } from "@/hooks/useCMStorage";
import { CMStateProvider } from "./context";
import { getSong } from "@/utils/getSong";

import IconBox from "@/components/common/IconBox";

import CMMain from "./CMMain";
import CMFooter from "./CMFooter";
import CMPlayer from "./CMFooter/CMPlayer";
import CMMainMenuBar from "./CMMain/CMMainMenubar";
import CMMainContainer from "./CMMain/CMMainContainer";
import CMContent from "./CMMain/CMMainContainer/CMContent";
import CMTopbar from "./CMMain/CMMainContainer/CMTopbar";
import CMTopbarAnchors from "./CMMain/CMMainContainer/CMTopbar/CMTopbarAnchors";
import CMTopbarSearch from "./CMMain/CMMainContainer/CMTopbar/CMTopbarSearch";
import CMTopbarUser from "./CMMain/CMMainContainer/CMTopbar/CMTopbarUser";
import CMTopbarOptions from "./CMMain/CMMainContainer/CMTopbar/CMTopbarOptions";
import CMMenuFollows from "./CMMain/CMMainMenubar/CMMenuFollows";
import CMMenuLinks from "./CMMain/CMMainMenubar/CMMenuLinks";
import CMMenuOptions from "./CMMain/CMMainMenubar/CMMenuOptions";
import CMPlayerSongInfo from "@/components/layouts/CMLayout/CMFooter/CMPlayer/CMPlayerSongInfo";
import CMPlayerOperations from "@/components/layouts/CMLayout/CMFooter/CMPlayer/CMPlayerOperations";
import CMPlayerRegulators from "@/components/layouts/CMLayout/CMFooter/CMPlayer/CMPlayerRegulators";
import ClickBox from "@/components/common/ClickBox";

const inter = Inter({ subsets: ["latin"] });

function CMMainLayout(page: React.ReactElement) {
  // hooks
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [songLoaded, setSongLoaded] = React.useState(false);
  const [playerStatus, setPlayerStatus] =
    React.useState<CM.PlayerStatus>("paused");
  const [playerMode, setPlayerMode] = React.useState<CM.PlayerMode>("repeat");
  const [volume, setVolume] = React.useState("60");
  const [songInfo, setSongInfo] = React.useState<CM.SongInfo>({
    songTitle: "Open Arms",
    songId: "2004563446",
    songCoverId: "109951168121859537",
    singer: "SZA/Travis Scott",
    duration: 239000,
  });
  const [currentTime, setCurrentTime] = React.useState(0);
  // custom hooks
  const [CMState, setCMState] = useCMStorage();
  // effects
  React.useEffect(() => {
    const loaded = handleLoadSong(songInfo.songId);
    setSongLoaded(loaded);
  }, [songInfo.songId]);
  // other handle
  // handlers
  const handleLoadSong = (songId: string) => {
    if (audioRef.current) {
      audioRef.current.src = getSong(songId);
      return true;
    }
    return false;
  };
  const handleSongLoaded = (e: React.ChangeEvent<HTMLAudioElement>) => {
    if (audioRef.current?.src) {
      console.log("Song is loaded");
    }
  };
  const handleSongEnded = (e: React.ChangeEvent<HTMLAudioElement>) => {
    setPlayerStatus("paused");
  };
  const handleTimeUpdate = (e: React.ChangeEvent<HTMLAudioElement>) => {
    setCurrentTime(e.target.currentTime);
  };
  const handlePlayOrPause = (key: "play" | "pause") => {
    if (key === "pause") {
      audioRef.current?.pause();
      setPlayerStatus("paused");
    } else {
      audioRef.current?.play();
      setPlayerStatus("playing");
    }
  };
  const handlePlayNext = () => {
    console.log("handlePlayNext");
  };
  const handlePlayPrev = () => {
    console.log("handlePlayPrev");
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value);
  };

  return (
    <div id="home" className={inter.className}>
      <div className={"w-full h-full grid pic"}>
        <div className={"w-80% h-85%"}>
          <div
            id={"view-box"}
            className={
              "flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden"
            }
          >
            <CMStateProvider
              fallbackState={CMState}
              storageDispatch={setCMState}
            >
              <CMMain
                MainMenuBar={
                  <CMMainMenuBar
                    MenuOptions={<CMMenuOptions />}
                    MenuLinks={<CMMenuLinks menuLinks={MENULINKS} />}
                    MenuFollows={<CMMenuFollows />}
                  />
                }
                MainContainer={
                  <CMMainContainer
                    Topbar={
                      <CMTopbar
                        TopbarAnchors={<CMTopbarAnchors />}
                        TopbarSearch={<CMTopbarSearch />}
                        TopbarUser={<CMTopbarUser />}
                        TopbarOptions={<CMTopbarOptions />}
                      />
                    }
                    Content={<CMContent>{page}</CMContent>}
                  />
                }
              />
              <CMFooter>
                <CMPlayer
                  ref={audioRef}
                  songLoadedFn={handleSongLoaded}
                  timeUpdateFn={handleTimeUpdate}
                  songEndedFn={handleSongEnded}
                  PlayerSongInfo={
                    <CMPlayerSongInfo
                      songInfo={songInfo}
                      songCurrentTime={currentTime}
                    />
                  }
                  PlayerOperations={
                    <CMPlayerOperations
                      playerMode={playerMode}
                      playerStatus={playerStatus}
                      playOrPause={handlePlayOrPause}
                      playNext={handlePlayNext}
                      playPrev={handlePlayPrev}
                    />
                  }
                  PlayerRegulators={
                    <CMPlayerRegulators
                      volume={volume}
                      changeFn={handleVolumeChange}
                    />
                  }
                />
              </CMFooter>
            </CMStateProvider>
          </div>
        </div>
      </div>
      <div className={"fixed top-4 right-4"}>
        <ClickBox>
          <Link href="https://github.com/ffxixslh/cloud-music">
            <IconBox
              icon={"i-ri-github-fill"}
              iconShape={"rounded"}
              iconSize={"3xl"}
            />
          </Link>
        </ClickBox>
      </div>
    </div>
  );
}

export default CMMainLayout;
