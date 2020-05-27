import {createReducer} from '../reducerFactory'
import {setTicketsList} from './tickets'

// Default State
const defaultState = {
  items: [],
  count: null,
  totalPages: null,
  currentPage: null,
}

function initializeReducer() {
  return {
    ...defaultState,
  }
}

const strategies = {
  /* tickets */
  SET_TICKETS_LIST: setTicketsList,
  /* commons */
  __default__: state => state,
  /* reinit */
  __reinit__: initializeReducer,
}

// Exports
export default createReducer(strategies, defaultState)
