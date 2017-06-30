import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

const middleware = [promise(), thunk, logger()]
const store = createStore(reducer, composeWithDevTools(
   applyMiddleware(...middleware)
 ))

export default store
