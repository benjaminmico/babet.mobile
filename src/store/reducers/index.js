// Imports: Dependencies
import {combineReducers} from 'redux'
// Imports: Reducers
import auth from './auth'
import bankrolls from './bankrolls'

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth,
  bankrolls,
})
// Exports
export default rootReducer
