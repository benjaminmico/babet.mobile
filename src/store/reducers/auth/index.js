import {createReducer} from '../reducerFactory'

import {login} from './login'

// Default State
const defaultState = {
  loggedIn: true,
}

const strategies = {
  /* login */
  LOGIN: login,
  /* commons */
  __default__: state => state,
}

// Exports
export default createReducer(strategies, defaultState)
