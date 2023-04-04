interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div w-full h-screen grid place-items-center>
      <div font-bold text="blue xl">
        hello
      </div>
      <div>world</div>
    </div>
  )
}

export default Main
