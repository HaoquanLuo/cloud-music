import CMPlayer from './CMFooter/CMPlayer'
import CMMain from './CMMain'

interface CMLayoutProps {}

const CMLayout: React.FC<CMLayoutProps> = () => {
  return (
    <div
      id={'view-box'}
      className={
        'flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden'
      }
    >
      <CMMain />
      <CMPlayer />
    </div>
  )
}

export default CMLayout
