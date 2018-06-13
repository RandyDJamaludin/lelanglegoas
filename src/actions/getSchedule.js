import { setLoading, setFailed, setSuccess } from "./processor";
import axios from 'axios'
import { server } from '../env/server'

import { RECEIVED_SCHEDULE_CAR, RECEIVED_SCHEDULE_MOT  } from '../constants/processor'

export const fetchScheduleCar = (tokenId) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_GET_SCHEDULE_CAR'))
    try{
      const response = await axios.post(`${server}/api/am/get/command`, 
      {
        "tokenId" : tokenId,
        "uriCode" : "EVENT_SEARCH",
        "param" : {
          "draw": 1,
          "columns": [],
          "start": 0,
          "length": 0,
          "search": {},
          "extra": {
          "SearchType": "SearchPublishEvent",
          "SpecFiltersJson": "{'UnitTypeCode':['CAR']}"
          }
        }
      }
      )
      const data = await response.data
      console.log("get schedule car",data)
      await dispatch(receivedScheduleCar(data.data))
      await dispatch(setSuccess(true, 'SUCCESS_GET_SCHEDULE_CAR', 'berhasil mendapatkan jadwal car'))
      await dispatch(setLoading(false, 'LOADING_GET_SCHEDULE_CAR'))
    }catch(e){
      console.log("fetchSchedule", e)
      await dispatch(setFailed(true, 'FAILED_GET_SCHEDULE_CAR', 'gagal mendapatkan jadwal car'))
      await dispatch(setLoading(false, 'LOADING_GET_SCHEDULE_CAR'))
    }
  }
}

const receivedScheduleCar = data => {
	return{
		type: RECEIVED_SCHEDULE_CAR,
		payload: data
	}
}

export const fetchScheduleMot = (tokenId) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_GET_SCHEDULE_MOT'))
    try{
      const response = await axios.post(`${server}/api/am/get/command`, 
      {
        "tokenId" : tokenId,
        "uriCode" : "EVENT_SEARCH",
        "param" : {
          "draw": 1,
          "columns": [],
          "start": 0,
          "length": 0,
          "search": {},
          "extra": {
          "SearchType": "SearchPublishEvent",
          "SpecFiltersJson": "{'UnitTypeCode':['MOT']}"
          }
        }
      }
      )
      const data = await response.data
      console.log("get schedule mot",data)
      await dispatch(receivedScheduleMot(data.data))
      await dispatch(setSuccess(true, 'SUCCESS_GET_SCHEDULE_MOT', 'berhasil mendapatkan jadwal mot'))
      await dispatch(setLoading(false, 'LOADING_GET_SCHEDULE_MOT'))
    }catch(e){
      console.log("fetchSchedule", e)
      await dispatch(setFailed(true, 'FAILED_GET_SCHEDULE_MOT', 'gagal mendapatkan jadwal mot'))
      await dispatch(setLoading(false, 'LOADING_GET_SCHEDULE_MOT'))
    }
  }
}

const receivedScheduleMot = data => {
	return{
		type: RECEIVED_SCHEDULE_MOT,
		payload: data
	}
}