import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'

import configureStore, { history } from './store'

import './App.css'
import logo from './logo.svg'
import ExpensesPage from './pages/ExpensesPage'
import RevenuesPage from './pages/RevenuesPage'
import CollapsibleMenu from './components/menu/CollapsibleMenu';

export default class App extends Component {
  public render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header> */}

          <Router history={history}>
            <div>
              <CollapsibleMenu />

              <Switch>
                <Redirect exact from="/" to="/expenses" />
                <Route exact path="/expenses" component={ExpensesPage} />
                <Route exact path="/revenues" component={RevenuesPage} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}
