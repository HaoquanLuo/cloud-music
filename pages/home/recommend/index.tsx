import BoardBox from "@/components/common/BoardBox";
import CardVerticalBox from "@/components/common/CardVerticalBox";
import ClickBox from "@/components/common/ClickBox";
import { layouts } from "@/components/layouts";
import { CMPage } from "@/components/layouts/types";

interface RecommendProps {}

const Recommend: CMPage = (props: RecommendProps) => {
  const playlist = {
    playlistCover: "playlistCover",
    playlistTitle: "playlistTitle",
    playlistInfo:
      "playlistInfo playlistInfo playlistInfo playlistInfo playlistInfo playlistInfo ",
  };
  return (
    <div id="recommend">
      <BoardBox title={"boardTitle"}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ClickBox key={i}>
            <CardVerticalBox playlist={playlist} />
          </ClickBox>
        ))}
      </BoardBox>
    </div>
  );
};

export default Recommend;

Recommend.Layout = layouts["Home"];
