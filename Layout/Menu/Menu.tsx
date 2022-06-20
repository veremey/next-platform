import React, { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { MenuProps } from './Menu.props'

import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'

const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext)
  return (
    <ul>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </ul>
  )
}

export default Menu
