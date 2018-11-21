import React, { Component, FormEvent } from 'react'
import { connect } from 'react-redux'

import './RevenuesForm.css'
import { receive } from '../../actions/money'
import IRevenue from '../../lib/IRevenue'
import * as tags from '../../lib/tags'
import { Form, WideField, SubmitButton } from '../forms'

export interface IRevenuesFormProps {
  receive?: (revenue: IRevenue) => void,
}

@(connect(null, { receive }) as any)
export default class RevenuesForm extends Component<IRevenuesFormProps, Partial<IRevenue>> {
  private handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const revenue = this.state

    this.setState(null)

    this.props.receive!({
      createdAt: new Date(),
      ...revenue,
    } as Required<IRevenue>)
  }

  public render() {
    return (
      <Form className="revenues-form" onSubmit={e => this.handleSubmit(e)}>
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
          label="Origem:"
          type="text"
          onChange={e => {
            this.setState({ origin: e.target.value })
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

        <SubmitButton>Receber</SubmitButton>
      </Form>
    )
  }
}
