// Imports: Dependencies
import {combineReducers} from 'redux'
// Imports: Reducers
import auth from './auth'

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth,
})
// Exports
export default rootReducer
