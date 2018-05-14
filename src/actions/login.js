import { setLoading, setFailed } from "./processor";
import axios from 'axios'
import { server } from '../env/server'

export const login = (username, password) => {
  return async dispatch => {
    dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
    try{
      const response = await axios.post(`${server}/api/am/authentication`)
      const data = await response.data
      console.log(data)
      dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
    }catch(e){
      dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', 'Login Gagal'))
      dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
    }
  }
}