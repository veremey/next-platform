import React, { useContext } from 'react'
import { AppContext } from '../../context/app.context'

import { MenuProps } from './Menu.props'

const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext)
  return (
    <ul>
      {menu.map((m) => (
        <li key={m._id}>{m._id.secondCategory}</li>
      ))}
    </ul>
  )
}

export default Menu
