import { SET_SUCCESS, SET_LOADING, SET_FAILED } from '../constants/processor'


export const setSuccess = (condition, process_on) => {
  return {
    type: SET_SUCCESS,
    condition,
    process_on
  }
}

export const setLoading = (condition, process_on) => {
  return {
    type: SET_LOADING,
    condition,
    process_on
  }
}

export const setFailed = (condition, process_on, message) => {
  return {
    type: SET_FAILED,
    condition,
    process_on,
    message
  }
}