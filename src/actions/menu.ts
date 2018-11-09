import { Dispatch } from 'redux'

export const open = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'menu_open',
  })
}

export const close = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'menu_close',
  })
}
