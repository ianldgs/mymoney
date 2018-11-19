import { AnyAction } from 'redux'

import IMoneyState from '../lib/IMoneyState'

const initialState: IMoneyState = {
  balance: 0,
  expenses: [],
  revenues: [],
}

export default (state: IMoneyState|undefined, action: AnyAction): IMoneyState => {
  if (!state) {
    return initialState
  }

  switch (action.type) {
    case 'spend':
      return {
        ...state,
        ...{
          expenses: [action.payload, ...state.expenses],
        },
      }
    case 'receive':
      return {
        ...state,
        ...{
          revenues: [action.payload, ...state.revenues],
        },
      }
    case 'get_expenses':
      return {
        ...state,
        ...{
          expenses: action.payload,
        },
      }
    case 'get_revenues':
      return {
        ...state,
        ...{
          revenues: action.payload,
        },
      }
    default:
      return state
  }
}
