import React, { SFC, InputHTMLAttributes, FormHTMLAttributes, ButtonHTMLAttributes } from 'react'

import './forms.css'

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: SFC<IFormProps> = props => {
  const { className, ...rest } = props

  return (
    <form className={`form ${className}`} {...rest} />
  )
}

export interface IWideFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
}

export const WideField: SFC<IWideFieldProps> = props => {
  const { label, ...rest } = props

  return (
    <label className="wide-field">
      <span>{ label }</span>
      <input {...rest} />
    </label>
  )
}

export interface ISubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SubmitButton: SFC<ISubmitButtonProps> = props => {
  const { className, ...rest } = props

  return (
    <button className={`btn-submit ${className}`} {...rest} type="submit" />
  )
}
