import { LayoutProps } from './Layout.props'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './Layout.module.scss'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  )
}
