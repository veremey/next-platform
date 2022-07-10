import { Htag } from '../Htag/Htag'
import { TopPageComponentProps } from './TopPageComponent.props'
import { Ptag } from './../Ptag/Ptag'
import { Card } from '../Card/Card'
import { Ptag } from '../Ptag/Ptag'

import styles from './TopPageComponent.module.css'
import { Advantages } from './../Advantages/Advantages'

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Ptag color="grey" size={'m'}>
            {products.length}
          </Ptag>
        )}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      <div className={styles.hhtitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Ptag color="кув" size={'m'}>
          some.ua
        </Ptag>
      </div>
      <div className={styles.hh}>
        <Card className={styles.hhCount}>
          <div className={styles.hhStatTitle}>Всего вакансий</div>
          <div className={styles.hhStatCount}>{page.hh.count}</div>
        </Card>
      </div>
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <Ptag size="m">{page.seoText}</Ptag>}
      <Htag tag="h2">Полученные навыки</Htag>
      {page.tags.map((t) => (
        <Ptag key={t} size="m" color="primary">
          {t}
        </Ptag>
      ))}
    </div>
  )
}
