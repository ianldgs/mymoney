import React, { SFC, InputHTMLAttributes } from 'react'

import './forms.css'

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
