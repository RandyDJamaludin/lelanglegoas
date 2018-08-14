import { setLoading, setFailed, setSuccess } from "./processor";
import axios from "axios";
import { server } from "../env/server";

import { RECEIVED_ADM_FEE } from "../constants/processor";

//Function For Fetching Administration Fee
export const fetchAdmFee = tokenId => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_GET_ADM_FEE"));
    try {
      const response = await axios.post(`${server}/api/am/get/command`, {
        tokenId: tokenId,
        uriCode: "GET_ADM_FEE",
        param: {
          tokenId: tokenId
        }
      });
      const data = await response.data;
      await dispatch(receivedAdmFee(data));
      await dispatch(
        setSuccess(true, "SUCCESS_GET_ADM_FEE", "berhasil mendapatkan adm fee")
      );
      await dispatch(setLoading(false, "LOADING_GET_ADM_FEE"));
    } catch (e) {
      await dispatch(
        setFailed(true, "FAILED_GET_ADM_FEE", "gagal mendapatkan adm fee")
      );
      await dispatch(setLoading(false, "LOADING_GET_ADM_FEE"));
    }
  };
};

const receivedAdmFee = data => {
  return {
    type: RECEIVED_ADM_FEE,
    payload: data
  };
};
