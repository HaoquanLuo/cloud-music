import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import { MENULINKS } from "@/common/constants/links/menuLinks";
import { useCMStorage } from "@/hooks/useCMStorage";
import { CMStateProvider } from "./context";

import IconBox from "@/components/common/IconBox";
import LinkBox from "@/components/common/LinkBox";

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
  const [CMState, setCMState] = useCMStorage();
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
                  PlayerSongInfo={<CMPlayerSongInfo />}
                  PlayerOperations={<CMPlayerOperations />}
                  PlayerRegulators={<CMPlayerRegulators />}
                />
              </CMFooter>
            </CMStateProvider>
          </div>
        </div>
      </div>
      <div className={"fixed top-4 right-4"}>
        <LinkBox>
          <Link href="https://github.com/ffxixslh/cloud-music">
            <IconBox
              icon={"i-ri-github-fill"}
              iconShape={"rounded"}
              iconSize={"3xl"}
            />
          </Link>
        </LinkBox>
      </div>
    </div>
  );
}

export default CMMainLayout;
