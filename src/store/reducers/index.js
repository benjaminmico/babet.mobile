// Imports: Dependencies
import {combineReducers} from 'redux'
// Imports: Reducers
import auth from './auth'
import bankrolls from './bankrolls'
import tickets from './tickets'

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth,
  bankrolls,
  tickets,
})
// Exports
export default rootReducer
