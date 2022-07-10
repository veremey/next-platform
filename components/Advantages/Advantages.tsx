import { AdvantagesProps } from './Advantages.props'
import cn from 'classnames'

import CheckIcon from './images/check.svg'
import styles from './AdvantagesProps.module.scss'

export const Advantages = ({ advantages, ...props }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantages}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))}
    </>
  )
}
