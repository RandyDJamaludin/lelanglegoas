import { combineReducers } from 'redux'
import { success, loading, failed } from './processor'

const rootReducers = combineReducers({
  success,
  loading,
  failed
})

export default rootReducers