import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import data from './DataReducer'

export default combineReducers({
  data,
  routing: routerReducer
})
