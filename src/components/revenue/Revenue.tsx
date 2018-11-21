import React, { Component } from 'react'

import './Revenue.css'
import { values } from '../../config'
import IRevenue from '../../lib/IRevenue'

export interface IRevenueProps {
  revenue: IRevenue,
}

export default class Revenue extends Component<IRevenueProps> {
  private get color(): string {
    let color

    if (this.props.revenue.value! < values.low) {
      color = 'low'
    } else if (this.props.revenue.value! < values.medium) {
      color = 'medium'
    } else {
      color = 'high'
    }

    return color
  }

  public render() {
    const { revenue } = this.props

    return (
      <div className={`revenue ${this.color}`}>
        <h2>{revenue.title}</h2>
        <p>R$ {revenue.value.toFixed(2)}</p>
        <div>{revenue.responsible} ← {revenue.origin}</div>
        <div>
          { revenue.tags.map((tag, i) => (
            <span key={i}>
              <a href={`/revenues/${tag}`}>{tag}</a>{'; '}
            </span>
          )) }
        </div>
        <div>{revenue.createdAt.toLocaleString()}</div>
      </div>
    )
  }
}
