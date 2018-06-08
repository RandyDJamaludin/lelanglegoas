import { setLoading, setFailed, setSuccess } from "./processor";
import axios from 'axios'
import { server } from '../env/server'

import { RECEIVED_BRAND } from '../constants/processor'

export const fetchBrand = (tokenId) => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_GET_BRAND'))
    try{
      const response = await axios.post(`${server}/api/am/get/command`, 
      {
        "tokenId" : tokenId,
        "uriCode": "UNIT_FORM_LOOKUP",
        "param": {
            "lastDate": ""
        }
      }
      )
      const data = await response.data
      console.log('KEVIN', data.list.MER.map(merk => ({
          ...merk,
          models: data.list.MOD.filter(model => model.parentId === merk.id).map(model => ({
              ...model,
              tipes: data.list.TIP.filter(tipe => tipe.parentId === model.id)
          }))
      })))
      await dispatch(receivedBrand(data.list.MER.map(merk => ({
        ...merk,
        models: data.list.MOD.filter(model => model.parentId === merk.id).map(model => ({
            ...model,
            tipes: data.list.TIP.filter(tipe => tipe.parentId === model.id)
        }))
    }))))
      await dispatch(setSuccess(true, 'SUCCESS_GET_BRAND', 'berhasil mendapatkan jadwal car'))
      await dispatch(setLoading(false, 'LOADING_GET_BRAND'))
    }catch(e){
      console.log("fetch brand",e)
      await dispatch(setFailed(true, 'FAILED_GET_BRAND', 'gagal mendapatkan jadwal car'))
      await dispatch(setLoading(false, 'LOADING_GET_BRAND'))
    }
  }
}

const receivedBrand = data => {
	return{
		type: RECEIVED_BRAND,
		payload: data
	}
}