interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={`w-full h-screen grid place-items-center`}>
      <div className={`text-orange text-3xl`}>world</div>
    </div>
  )
}

export default Main
