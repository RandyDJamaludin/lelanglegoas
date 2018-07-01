import { setLoading, setFailed, setSuccess } from "./processor";
import axios from 'axios'
import { server } from '../env/server'

import { SAVE_SESSION_PERSISTANCE, RECEIVED_CEK_TOKEN  } from '../constants/processor'

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

export const login2 = (token, officeCode, RoleCode) => {
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
      await dispatch(saveSession( {...data, officeCode, RoleCode} ))
			await dispatch(saveSessionPersistance( data ))
      await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN2', 'Login sukses'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN2'))
    }catch(e){
      await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN2', 'Login Gagal'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN2'))
    }
  }
}

export const cekToken = (token, officeCode, RoleCode) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_PROCESS_CEKTOKEN'))
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
      if (data == "Akun telah logged in"){
        await dispatch(resultToken( true ))
      }else{
        await dispatch(resultToken( false ))
      }
      await dispatch(setSuccess(true, 'SUCCESS_PROCESS_CEKTOKEN', 'Login sukses'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_CEKTOKEN'))
    }catch(e){
      console.log(e)
      await dispatch(setFailed(true, 'FAILED_PROCESS_CEKTOKEN', 'Login Gagal'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_CEKTOKEN'))
    }
  }
}

export const resultToken = data => {
	return{
		type: RECEIVED_CEK_TOKEN,
		payload: data
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