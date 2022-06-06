import { ButtonProps } from './Button.props'
import cn from 'classnames'
import IconArrow from './images/arrow.svg'

import styles from './Button.module.scss'

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <IconArrow
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        />
      )}
    </button>
  )
}
