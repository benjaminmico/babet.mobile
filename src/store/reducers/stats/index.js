import {createReducer} from '../reducerFactory'
import {updateStats, setStats} from './stats'

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
  /* stats */
  SET_STATS: setStats,
  UPDATE_STATS: updateStats,
  /* commons */
  __default__: state => state,
  /* reinit */
  __reinit__: initializeReducer,
}

// Exports
export default createReducer(strategies, defaultState)
