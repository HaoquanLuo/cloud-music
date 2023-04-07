interface BoardBoxProps {}

const BoardBox: React.FC<BoardBoxProps> = () => {
  return (
    <div id={'body-board'} className={'w-full h-fit flex flex-col gap-2'}>
      <div id={'board-title'} className={'text-4xl font-500'}>
        board title
      </div>
      <div id={'board-content'} className={'flex gap-3'}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={
              'list-big bg-light bg-op-10 w-30 h-44 py-2 px-1 flex flex-col gap-y-1 jc ic rd '
            }
          >
            <i className={'list-cover w-24 h-24 rd ring-1 ring-light'}></i>
            <div className={'list-title w-full font-bold text-sm text-left'}>
              playlist-title
            </div>
            <div className={'list-info w-full text-xs text-left'}>
              playlist-info playlist-info
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardBox
