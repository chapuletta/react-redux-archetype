import axios from 'axios';
import * as types from '../constants/ActionTypes'

export function fetchData() {
  return function(dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({type: types.FETCH_DATA_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_DATA_REJECTED, payload: err})
      })
  }
}
