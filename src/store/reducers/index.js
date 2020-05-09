// Imports: Dependencies
import {combineReducers} from 'redux'
// Imports: Reducers
import authReducer from './auth'

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
})
// Exports
export default rootReducer
