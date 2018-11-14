import React, { Component } from 'react'
import { connect } from 'react-redux'

import './CollapsibleMenu.css'
import { open, close } from '../../actions/menu'
import MenuButton from './MenuButton'
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
      <div className="collapsible-menu floating-top">
        {
          !this.props.opened
          && <MenuButton onClick={ () => this.props.open!() }>Menu</MenuButton>
        }
        {
          this.props.opened
          && <MenuItems />
        }
      </div>
    )
  }
}
