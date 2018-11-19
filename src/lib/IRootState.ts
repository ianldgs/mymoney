import { RouterState } from 'connected-react-router'

import IAppState from './IAppState'
import IMoneyState from './IMoneyState'

export default interface IRootState {
  router: RouterState,
  app: IAppState,
  money: IMoneyState,
}
