import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from classnames

export const Htag = ({appearance, children} :ButtonProps):JSX.Element => {
  return (
    switch (tag) {
      case 'h1': 
        return <button className={styles.button}>{children}</button>
      case 'h2': 
        return <h2 className={styles.h2}>{children}</h2>
      case 'h3': 
        return <h3 className={styles.h3}>{children}</h3>
      default:
        return <></>
    }
  )
}
  