import { Dispatch } from 'redux'

import IExpense from '../lib/IExpense'
import IRevenue from '../lib/IRevenue'

export const spend = (expense: IExpense) => async (dispatch: Dispatch) => {
  dispatch({
    type: 'spend',
    payload: expense,
  })
}

export const receive = (revenue: IRevenue) => async (dispatch: Dispatch) => {
  dispatch({
    type: 'receive',
    payload: revenue,
  })
}
