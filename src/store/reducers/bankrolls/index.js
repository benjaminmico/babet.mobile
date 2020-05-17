import {createReducer} from '../reducerFactory'
import {setBankrollsList} from './setBankrollsList'

// Default State
const defaultState = null

function initializeReducer() {
  return {
    ...defaultState,
  }
}

const strategies = {
  /* set bankrolls list */
  SET_BANKROLLS_LIST: setBankrollsList,

  /* commons */
  __default__: state => state,
  /* reinit */
  __reinit__: initializeReducer,
}

// Exports
export default createReducer(strategies, defaultState)
