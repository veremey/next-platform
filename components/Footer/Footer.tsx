import { FooterProps } from './Footer.props'
import { Ptag } from '../Ptag/Ptag'
import { format } from 'date-fns'
import cn from 'classnames'

import styles from './Footer.module.scss'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Ptag size="m" className={styles.copy}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </Ptag>
      <a href="#" target="_blank" className={styles.desc}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={styles.desc}>
        Политика конфиденциальности
      </a>
    </footer>
  )
}
