import { HashTagProps } from './HashTag.props'
import cn from 'classnames'

import styles from './HashTag.module.scss'

export const HashTag = ({
  size = 'm',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: HashTagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.hashTag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.grey]: color === 'grey',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
