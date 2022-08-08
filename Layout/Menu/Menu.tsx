import React, { useContext } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'

import styles from './Menu.module.scss'
import { firstLevelMenu } from '../../helpers/helpers'

const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext)
  const router = useRouter()

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m
        })
      )
  }

  const buildFirstLevelMenu = () => {
    return (
      <>
        {firstLevelMenu.map((FLMItem) => (
          <div key={FLMItem.route}>
            <Link href={`/${FLMItem.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: FLMItem.id === firstCategory,
                  })}
                >
                  {FLMItem.icon}
                  <span>{FLMItem.name}</span>
                </div>
              </a>
            </Link>
            {FLMItem.id === firstCategory && buildSecondMenuLevelItem(FLMItem)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondMenuLevelItem = (FLMItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((SMLItem) => {
          if (SMLItem.pages.map((p) => p.alias).includes(router.asPath.split('.')[2])) {
            SMLItem.isOpened = true
          }
          return (
            <div key={SMLItem._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(SMLItem._id.secondCategory)}
              >
                {SMLItem._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: SMLItem.isOpened,
                })}
              >
                {buildThirdLevelMenu(SMLItem.pages, FLMItem.route)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link key={page._id} href={`/${route}/${page.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
          })}
        >
          {page.category}
        </a>
      </Link>
    ))
  }

  return <ul className={styles.menu}>{buildFirstLevelMenu()}</ul>
}

export default Menu
