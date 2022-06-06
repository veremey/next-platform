import { PtagProps } from './Ptag.props'
import cn from 'classnames'

import styles from './Ptag.module.scss'

export const Ptag = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.ptag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
