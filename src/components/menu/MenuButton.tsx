import React, { SFC, HTMLAttributes } from 'react'
import './MenuButton.css'

const MenuButton: SFC<HTMLAttributes<HTMLElement>> = props => (
  <button {...props} type="button" className="menu-button" onClick={props.onClick} />
)

export default MenuButton
