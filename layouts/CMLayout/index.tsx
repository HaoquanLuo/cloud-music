import { ReactNode, createContext } from 'react'
import CMPlayer from './CMFooter/CMPlayer'
import CMMain from './CMMain'

interface CMLayoutProps {
  children: ReactNode
}

export const LayoutContext = createContext<ReactNode>(<></>)

const CMLayout: React.FC<CMLayoutProps> = ({ children }) => {
  return (
    <div
      id={'view-box'}
      className={
        'flex flex-col bg-#101010 text-light w-full h-full rd-lg overflow-hidden'
      }
    >
      {
        <LayoutContext.Provider value={children}>
          <CMMain />
        </LayoutContext.Provider>
      }
      <CMPlayer />
    </div>
  )
}

export default CMLayout
