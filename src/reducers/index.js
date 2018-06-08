import { combineReducers } from 'redux'
import { success, loading, failed } from './processor'

import { schedulecar } from './getSchedule'
import { receivedbrand } from './getBrand'
import { sessionPersistance } from './login'

const rootReducers = combineReducers({
  success,
  loading,
  failed,
  schedulecar,
  receivedbrand,
  sessionPersistance
})

export default rootReducers