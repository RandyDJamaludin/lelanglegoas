import { setLoading, setFailed, setSuccess } from "./processor";
import axios from 'axios'
import { server } from '../env/server'

export const login = (username, password) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
    try{
      const response = await axios.post(`${server}/api/am/authentication`, 
        {username, password}
      )
      const data = await response.data
      console.log(data)
      await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN', 'Login sukses'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
    }catch(e){
      await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', 'Login Gagal'))
      await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
    }
  }
}