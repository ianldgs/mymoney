import { Dispatch, ActionCreator, Action, AnyAction } from 'redux'
import { ThunkDispatch, ThunkAction } from 'redux-thunk'
import { push } from 'connected-react-router'

export const open = () => (dispatch: Dispatch) => {
  return dispatch({
    type: 'menu_open',
  })
}

export const close = () => (dispatch: Dispatch) => {
  return dispatch({
    type: 'menu_close',
  })
}

export const navigateTo: ActionCreator<
  ThunkAction<Action, any, any, AnyAction>
> = (link: string) => (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  dispatch(push(link))

  return dispatch(close())
}
