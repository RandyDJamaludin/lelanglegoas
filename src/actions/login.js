import { setLoading, setFailed, setSuccess } from "./processor";
import axios from 'axios'
import { server } from '../env/server'

import { SAVE_SESSION_PERSISTANCE  } from '../constants/processor'

export const login = (username, password) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
    try{
      const response = await axios.post(`${server}/api/am/authentication`, 
        {username, password}
      )
      const data = await response.data
      // console.log(data)
      await dispatch(login2(data.tokenId, data.listOffice[0].officeCode, data.listRole[0].RoleCode ))
      await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN', 'Login sukses'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
    }catch(e){
      await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', 'Login Gagal'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
    }
  }
}

const login2 = (token, officeCode, RoleCode) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN2'))
    try{
      const response = await axios.post(`${server}/api/am/loginByOffice`, 
      {
        tokenId: token,
        roleCode: RoleCode,
        officeCode: officeCode
      }
      )
      const data = await response.data
      console.log(data)
      await dispatch(saveSession( data ))
			await dispatch(saveSessionPersistance( data ))
      await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN2', 'Login sukses'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN2'))
    }catch(e){
      await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN2', 'Login Gagal'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN2'))
    }
  }
}

const saveSession = data => {
	return () => {
    localStorage.setItem('session', JSON.stringify(data))
	}
}

export const saveSessionPersistance = data => {
	return{
		type: SAVE_SESSION_PERSISTANCE,
		payload: data
	}
}