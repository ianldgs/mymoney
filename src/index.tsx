import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { ConnectedRouter as Router } from 'connected-react-router'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore, { history } from './store'

const AppWithRouter = withRouter(App as any)

ReactDOM.render(
  (
    <Provider store={configureStore()}>
      <Router history={history}>
        <AppWithRouter />
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
