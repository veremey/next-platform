import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import Menu from '../Menu/Menu'

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={styles.sidebar} {...props}>
      <Menu />
    </div>
  )
}
