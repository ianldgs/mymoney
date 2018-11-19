import React, { Component } from 'react'

import './Expense.css'
import { values } from '../../config'
import IExpense from '../../lib/IExpense'

export interface IExpenseProps {
  expense: IExpense,
}

export default class Expense extends Component<IExpenseProps> {
  private get color(): string {
    let color

    if (this.props.expense.value! < values.low) {
      color = 'low'
    } else if (this.props.expense.value! < values.medium) {
      color = 'medium'
    } else {
      color = 'high'
    }

    return color
  }

  public render() {
    const { expense } = this.props

    return (
      <div className={`expense ${this.color}`}>
        <h2>{expense.title}</h2>
        <p>R$ {expense.value.toFixed(2)}</p>

        { expense.inBenefitOf
          ? <div>{expense.responsible} → {expense.inBenefitOf}</div>
          : <div>{expense.responsible}</div> }
        <div>
          { expense.tags.map((tag, i) => (
            <span key={i}>
              <a href={`/expenses/${tag}`}>{tag}</a>{'; '}
            </span>
          )) }
        </div>
        <div>{expense.createdAt.toLocaleString()}</div>
      </div>
    )
  }
}
