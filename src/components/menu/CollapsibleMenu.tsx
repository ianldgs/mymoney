import React, { Component } from 'react'
import { connect } from 'react-redux'

import './CollapsibleMenu.css'
import { open, close } from '../../actions/menu'
import FloatingMenuButton from './FloatingMenuButton'
import MenuItems from './MenuItems'

interface IProps {
  opened?: boolean,
  open?: () => void,
  close?: () => void,
}

const mapStateToProps = (state: any) => ({
  opened: state.app.menu,
})

@(connect(mapStateToProps, { open, close }) as any)
export default class CollapsibleMenu extends Component<IProps> {
  public render() {
    return (
      <div className="collapsible-menu">
        {
          !this.props.opened
          && <FloatingMenuButton onClick={ () => this.props.open!() }>Menu</FloatingMenuButton>
        }
        {
          this.props.opened
          && <MenuItems />
        }
      </div>
    )
  }
}
