import {createReducer} from '../reducerFactory'
import {setBankrollsList} from './setBankrollsList'
import {setCurrentBankroll} from './setCurrentBankroll'
import {createBankroll} from './createBankroll'
import {editBankroll} from './editBankroll'
import {deleteBankroll} from './deleteBankroll'

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
  /* create bankroll */
  CREATE_BANKROLL: createBankroll,
  /* edit bankroll */
  EDIT_BANKROLL: editBankroll,
  /* delete bankroll */
  DELETE_BANKROLL: deleteBankroll,

  /* commons */
  __default__: state => state,
  /* reinit */
  __reinit__: initializeReducer,
}

// Exports
export default createReducer(strategies, defaultState)
