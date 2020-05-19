import {createReducer} from '../reducerFactory'
import {setBankrollsList} from './setBankrollsList'
import {setCurrentBankroll} from './setCurrentBankroll'

// Default State
const defaultState = {
  currentBankroll: null,
  items: [],
}

function initializeReducer() {
  return {
    ...defaultState,
  }
}

const strategies = {
  /* set bankrolls list */
  SET_BANKROLLS_LIST: setBankrollsList,
  /* set current bankroll */
  SET_CURRENT_BANKROLL: setCurrentBankroll,

  /* commons */
  __default__: state => state,
  /* reinit */
  __reinit__: initializeReducer,
}

// Exports
export default createReducer(strategies, defaultState)
