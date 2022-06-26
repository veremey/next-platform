import React, { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import cn from 'classnames'
import { MenuProps } from './Menu.props'

import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'

import styles from './Menu.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

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
              <div className={styles.secondLevel} onClick={() => openSecondLevel(SMLItem._id.secondCategory)}>
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
