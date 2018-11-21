import React, { Component, SFC } from 'react'

import './RevenuesPage.css'
import RevenuesForm from '../components/revenue/RevenuesForm'
import RevenuesList from '../components/revenue/RevenuesList'

export default class RevenuesPage extends Component {
  public render() {
    return (
      <section>
        <h1>Receitas:</h1>
        <RevenuesForm />
        <RevenuesList />
      </section>
    )
  }
}
