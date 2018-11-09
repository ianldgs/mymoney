import React, { SFC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { connect } from 'react-redux'

import './MenuItems.css'

export const MenuItem: SFC<LinkProps> = props => (
  <Link { ...props }></Link>
)

interface IProps {
  close?: () => void,
}

const MenuItems: SFC<IProps> = props => (
  <nav className="menu-items">
    <MenuItem to="/expenses" onClick={() => props.close!()}>Gastos</MenuItem>
    <MenuItem to="/revenue" onClick={() => props.close!()}>Receitas</MenuItem>
  </nav>
)

export default connect(null, { close })(MenuItems)
