import { AnyAction } from 'redux'

import IAppState from '../lib/IAppState'

const initialState: IAppState = {
  menu: false,
}

export default (state: IAppState|undefined, action: AnyAction): IAppState => {
  if (!state) {
    return initialState
  }

  switch (action.type) {
    case 'menu_open':
      return {
        ...state,
        menu: true,
      }
    case 'menu_close':
      return {
        ...state,
        menu: false,
      }
    default:
      return state
  }
}
