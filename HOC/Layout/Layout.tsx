import { LayoutProps } from './Layout.props'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import styles from './Layout.module.scss'
import cn from 'classnames'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <>{children}</>
      </div>
      <Footer />
    </>
  )
}
