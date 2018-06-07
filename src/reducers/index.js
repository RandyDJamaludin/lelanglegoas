import { combineReducers } from 'redux'
import { success, loading, failed } from './processor'

import { schedulecar } from './getSchedule'

const rootReducers = combineReducers({
  success,
  loading,
  failed,
  schedulecar
})

export default rootReducers