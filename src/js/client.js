import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import store from './store'

require('./../styles/main.scss')

const history = syncHistoryWithStore(browserHistory, store)
const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>         
      </Route>
    </Router>
  </Provider>,
  app
)
