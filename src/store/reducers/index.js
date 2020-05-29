// Imports: Dependencies
import {combineReducers} from 'redux'
// Imports: Reducers
import auth from './auth'
import bankrolls from './bankrolls'
import tickets from './tickets'
import stats from './stats'

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth,
  bankrolls,
  tickets,
  stats,
})
// Exports
export default rootReducer
