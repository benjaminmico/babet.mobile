import {createReducer} from '../reducerFactory'
import {setStats} from './stats'

// Default State
const defaultState = {
  averageOdd: null,
  averageStake: null,
  balanceSheet: null,
  shape: null,
}

function initializeReducer() {
  return {
    ...defaultState,
  }
}

const strategies = {
  /* tickets */
  SET_STATS: setStats,
  /* commons */
  __default__: state => state,
  /* reinit */
  __reinit__: initializeReducer,
}

// Exports
export default createReducer(strategies, defaultState)
