import { CardProps } from './Card.props'
import cn from 'classnames'

import styles from './Card.module.scss'

export const Card = ({ color, children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
