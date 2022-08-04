import { useState, KeyboardEvent } from 'react'
import Router from 'next/router'
import { SearchProps } from './Search.props'
import cn from 'classnames'

import styles from './Search.module.scss'
import GlassIcon from './images/glass.svg'
import { Button } from '../Button/Button'

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')

  const goToSearch = () => {
    Router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    })
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <input placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  )
}
