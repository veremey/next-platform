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

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext)

  const buildFirstLevelMenu = () => {
    return (
      <>
        {firstLevelMenu.map((FLMItem) => (
          <div key={FLMItem.route}>
            <a href={`/${FLMItem.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: FLMItem.id === firstCategory,
                })}
              >
                {FLMItem.icon}
                <span>{FLMItem.name}</span>
              </div>
            </a>
            {FLMItem.id === firstCategory && buildSecondMenuLevelItem(FLMItem)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondMenuLevelItem = (FLMItem: FirstLevelMenuItem) => {
    return (
      <>
        {menu.map((SMLItem) => (
          <div key={SMLItem._id.secondCategory}>
            <div className={styles.secondLevel}>{SMLItem._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: SMLItem.isOpened,
              })} // test TODO
            >
              {buildThirdLevelMenu(SMLItem.pages, FLMItem.route)}
            </div>
          </div>
        ))}
      </>
    )
  }

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return (
      <>
        {pages.map((page) => (
          <a
            key={page._id}
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: true, // TODO
            })}
          >
            {page.category}
          </a>
        ))}
      </>
    )
  }

  return (
    <ul>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </ul>
  )
}

export default Menu
