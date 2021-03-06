import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import Menu from '../Menu/Menu'
import cn from 'classnames'

import Logo from '../logo.svg'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Search</div>
      <Menu />
    </div>
  )
}
