import React, { Component } from 'react'
import { connect } from 'react-redux'

import './RevenuesList.css'
import IRootState from '../../lib/IRootState'
import IRevenue from '../../lib/IRevenue'
import Revenue from './Revenue'
import { fetchRevenues } from '../../actions/money'

const mapStateToProps = (state: IRootState) => ({
  revenues: state.money.revenues,
})

export interface IRevenuesListProps {
  revenues?: IRevenue[],
  fetchRevenues?: () => Revenue[],
}

@(connect(mapStateToProps, { fetchRevenues }) as any)
export default class RevenuesList extends Component<IRevenuesListProps> {
  public componentDidMount() {
    this.props.fetchRevenues!()
  }

  public render() {
    const { revenues } = this.props

    if (!revenues || !revenues.length) {
      return <p>No revenues yet.</p>
    }

    return (
      <ul className="revenues-list">
        { this.props.revenues!.map((revenue, i) => (
            <li key={i}><Revenue {...{revenue}} /></li>
        )) }
      </ul>
    )
  }
}
