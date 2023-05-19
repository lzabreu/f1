import { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const style = 'flex items-center bg-slate-100 px-4'

  return (
    <div className="flex flex-col w-full h-screen">
      <div className={style}>
        <Header />
      </div>
      <div className={`${style} my-auto flex-col overflow-scroll h-full`}>
        {children}
      </div>
      <div className={style}>
        <Footer />
      </div>
    </div>
  )
}
