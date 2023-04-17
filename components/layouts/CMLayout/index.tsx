// packages
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
// assets
import { MENULINKS } from "@/common/constants/links/menuLinks";
// utils
// api
import { fakeMusic } from "@/pages/api/fakeMusic";
// hooks
import { useCMStorage } from "@/hooks/useCMStorage";
import { usePlayer } from "@/hooks/usePlayer";
// context
import { CMStateProvider } from "./context";
// presentational components
import IconBox from "@/components/common/IconBox";
import ClickBox from "@/components/common/ClickBox";
// layouts
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

const inter = Inter({ subsets: ["latin"] });

function CMMainLayout(page: React.ReactElement) {
  // hooks
  const [playerStatus, setPlayerStatus] =
    React.useState<CM.PlayerStatus>("paused");
  const [playerMode, setPlayerMode] = React.useState<CM.PlayerMode>("repeat");
  const [volume, setVolume] = React.useState("60");
  const [songInfo, setSongInfo] = React.useState<CM.SongInfo>({
    songTitle: "unknown",
    songId: "",
    songCoverId: "",
    songSinger: "unknown",
    songDuration: 0,
  });
  // custom hooks
  const [CMState, setCMState] = useCMStorage();
  const {
    audioRef,
    currentTime,
    handleProgressClick,
    handleProgressDown,
    handleProgressUp,
    handleTimeUpdate,
  } = usePlayer(songInfo);
  // other handle
  const volumePercentage = Number(volume) / 100;
  // effects
  React.useEffect(() => {
    (async () => {
      const open_arms = await fakeMusic();
      setSongInfo(open_arms);
    })();
  }, []);
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumePercentage;
    }
  }, [audioRef, volumePercentage]);
  // handlers
  const handleSongLoaded = React.useCallback(
    (e: React.ChangeEvent<HTMLAudioElement>) => {
      setSongInfo({
        ...songInfo,
        songDuration: e.target.duration,
      });
    },
    [songInfo]
  );
  const handleSongEnded = React.useCallback(
    (e: React.ChangeEvent<HTMLAudioElement>) => {
      setPlayerStatus("paused");
    },
    []
  );
  const handlePlayOrPause = React.useCallback(
    (key: "play" | "pause") => {
      if (key === "pause") {
        audioRef.current?.pause();
        setPlayerStatus("paused");
      } else {
        audioRef.current?.play();
        setPlayerStatus("playing");
      }
    },
    [audioRef]
  );
  const handlePlayNext = React.useCallback(() => {
    console.log("handlePlayNext");
  }, []);
  const handlePlayPrev = React.useCallback(() => {
    console.log("handlePlayPrev");
  }, []);
  const handleVolumeChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(e.target.value);
    },
    []
  );

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
                  songCurrentTime={currentTime}
                  songDuration={songInfo.songDuration}
                  songLoadedFn={handleSongLoaded}
                  songTimeUpdateFn={handleTimeUpdate}
                  songEndedFn={handleSongEnded}
                  progressClickFn={handleProgressClick}
                  progressDownFn={handleProgressDown}
                  progressUpFn={handleProgressUp}
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
                      changeVolumeFn={handleVolumeChange}
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
