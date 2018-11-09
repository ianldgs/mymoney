import React, { SFC, HTMLAttributes } from 'react'
import './FloatingMenuButton.css'

const FloatingMenuButton: SFC<HTMLAttributes<HTMLElement>> = props => (
  <div className="floating-top">
    <button {...props} type="button" className="menu-button" onClick={props.onClick} />
  </div>
)

export default FloatingMenuButton
