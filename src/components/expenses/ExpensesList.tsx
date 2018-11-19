import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ExpenseList.css'
import IRootState from '../../lib/IRootState'
import IExpense from '../../lib/IExpense'
import Expense from './Expense'
import { fetchExpenses } from '../../actions/money'

const mapStateToProps = (state: IRootState) => ({
  expenses: state.money.expenses,
})

export interface IExpensesListProps {
  expenses?: IExpense[],
  fetchExpenses?: () => Expense[],
}

@(connect(mapStateToProps, { fetchExpenses }) as any)
export default class ExpensesList extends Component<IExpensesListProps> {
  public componentDidMount() {
    this.props.fetchExpenses!()
  }

  public render() {
    const { expenses } = this.props

    if (!expenses || !expenses.length) {
      return <p>No expenses yet.</p>
    }

    return (
      <ul className="expense-list">
        { this.props.expenses!.map((expense, i) => (
            <li key={i}><Expense {...{expense}} /></li>
        )) }
      </ul>
    )
  }
}
