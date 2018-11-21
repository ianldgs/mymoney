import { Dispatch } from 'redux'

import jsonStorage from '../lib/json-storage'
import IExpense from '../lib/IExpense'
import IRevenue from '../lib/IRevenue'

export const spend = (expense: IExpense) => async (dispatch: Dispatch) => {
  jsonStorage.local.push('expenses', expense)

  dispatch({
    type: 'spend',
    payload: expense,
  })
}

export const fetchExpenses = () => async (dispatch: Dispatch) => {
  const expenses: IExpense[] = jsonStorage.local.get('expenses') || []

  const payload = expenses.map(expense => ({
    ...expense,
    createdAt: new Date(expense.createdAt),
  }))

  dispatch({
    type: 'get_expenses',
    payload,
  })
}

export const receive = (revenue: IRevenue) => async (dispatch: Dispatch) => {
  jsonStorage.local.push('revenues', revenue)

  dispatch({
    type: 'receive',
    payload: revenue,
  })
}

export const fetchRevenues = () => async (dispatch: Dispatch) => {
  const revenues: IRevenue[] = jsonStorage.local.get('revenues') || []

  const payload = revenues.map(revenue => ({
    ...revenue,
    createdAt: new Date(revenue.createdAt),
  }))

  dispatch({
    type: 'get_revenues',
    payload,
  })
}
