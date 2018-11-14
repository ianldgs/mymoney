import React, { SFC, AnchorHTMLAttributes } from 'react'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { Link, LinkProps } from 'react-router-dom'

import { close, navigateTo } from '../../actions/menu'

import './MenuItems.css'

export interface IMenuItemProps {
  href: string,
  navigateTo?: (link: string) => Action
}

export type MenuItemType = SFC<IMenuItemProps&AnchorHTMLAttributes<HTMLAnchorElement>>

const DisconnectedMenuItem: MenuItemType = props => {
  const { navigateTo: _, ...rest } = props

  return <a {...rest} onClick={e => { e.preventDefault(); props.navigateTo!(props.href) }} />
}

export const MenuItem = connect<void>(null, { navigateTo })(DisconnectedMenuItem)

export interface IMenuItemsProps {
  close?: () => void,
}

const MenuItems: SFC<IMenuItemsProps> = () => (
  <nav className="menu-items">
    <MenuItem href="/expenses">Gastos</MenuItem>
    <MenuItem href="/revenues">Receitas</MenuItem>
  </nav>
)

export default MenuItems
