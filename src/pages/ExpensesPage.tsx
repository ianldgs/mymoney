import React, { Component, SFC } from 'react'

import './ExpensesPage.css'
import ExpensesForm from '../components/expenses/ExpensesForm'
import ExpensesList from '../components/expenses/ExpensesList'

export default class ExpensesPage extends Component {
  public render() {
    return (
      <section>
        <h1>Gastos:</h1>
        <ExpensesForm />
        <ExpensesList />
      </section>
    )
  }
}
