import React, { Component, FormEvent } from 'react'
import { connect } from 'react-redux'

import './ExpensesForm.css'
import { spend } from '../../actions/money'
import IExpense from '../../lib/IExpense'
import * as tags from '../../lib/tags'
import { Form, WideField, SubmitButton } from '../forms'

export interface IExpensesFormProps {
  spend?: (expense: IExpense) => void,
}

@(connect(null, { spend }) as any)
export default class ExpensesForm extends Component<IExpensesFormProps, Partial<IExpense>> {
  private handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const expense = this.state

    this.setState(null)

    this.props.spend!({
      createdAt: new Date(),
      ...expense,
    } as Required<IExpense>)
  }

  public render() {
    return (
      <Form className="expenses-form" onSubmit={e => this.handleSubmit(e)}>
        <WideField
          label="Título:"
          type="text"
          required
          onChange={e => {
            this.setState({ title: e.target.value })
          }}
        />

        <WideField
          label="Valor:"
          type="number"
          step=".01"
          required
          onChange={e => {
            this.setState({ value: parseInt(e.target.value, 10) })
          }}
        />

        <WideField
          label="Responsável:"
          type="text"
          required
          onChange={e => {
            this.setState({ responsible: e.target.value })
          }}
        />

        <WideField
          label="Beneficiado:"
          type="text"
          onChange={e => {
            this.setState({ inBenefitOf: e.target.value })
          }}
        />

        <WideField
          label="Criação:"
          type="datetime-local"
          onChange={e => {
            const date = new Date(e.target.value)
            const createdAt = !isNaN(date.getTime()) ? date : undefined

            this.setState({ createdAt })
          }}
        />

        <WideField
          label="Tags:"
          type="text"
          placeholder="Ex: tag1, tag2, tag3"
          onChange={e => {
            this.setState({ tags: tags.parse(e.target.value) })
          }}
        />

        <SubmitButton>Gastar</SubmitButton>
      </Form>
    )
  }
}
