import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import app from './app'
import money from './money'

export default (history: History) => combineReducers({
  router: connectRouter(history),
  app,
  money,
})
