interface CardVerticalBoxProps {
  playlist: CM.Playlist;
}
const CardVerticalBox: React.FC<CardVerticalBoxProps> = (props) => {
  const { playlist } = props;
  return (
    <div
      className={
        "list-big bg-light bg-op-10 w-30 h-42 p-1.75 flex flex-col gap-y-1.5 jb ic rd bgHighlight"
      }
    >
      <div className={"list-cover w-25 h-25 "}>
        <div className={"full rd ring-1 ring-light"}>
          {playlist.playlistCover}
        </div>
      </div>
      <div className={"list-info w-full flex flex-col items-start gap-y-1"}>
        <div
          className={
            "list-title w-full font-bold text-size-3 text-left truncate"
          }
        >
          {playlist.playlistTitle}
        </div>
        <p
          className={
            "list-info w-full h-7.5 text-size-2.5 text-left text-fade line-clamp-2"
          }
        >
          {playlist.playlistInfo}
        </p>
      </div>
    </div>
  );
};

export default CardVerticalBox;
