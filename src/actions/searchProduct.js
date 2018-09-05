import { setLoading, setFailed, setSuccess } from "./processor";
import axios from "axios";
import { server } from "../env/server";

import { RECEIVED_SEARCH_PRODUCT } from "../constants/processor";

//Function For Searching Product
export const fetchSearchProduct = (tokenId, merek, model, tipe, warna, tahun) => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_GET_SEARCH_PRODUCT"));
    try {
      const response = await axios.post(`${server}/api/am/get/command`, {
        tokenId: tokenId,
        uriCode: "LOT_SEARCH",
        param: {
          draw: 1,
          columns: [],
          order: [
            {
              column: 0,
              dir: "asc"
            }
          ],
          start: 0,
          search: {
            value: null,
            regex: false
          },
          extra: {
            SearchType: "SEARCHBYUNITSPEC",
            UnitTypeCode: "CAR",
            SpecFiltersJson: '{"MEREK":["'+merek+'"],"MODEL":["'+model+'"],"TIPE":["'+tipe+'"],"WARNA":["'+warna+'"],"TAHUN":["'+tahun+'"]}'
          }
        }
      });
      const data = await response.data;
      await dispatch(receivedSearchProduct(data.data));
      await dispatch(
        setSuccess(
          true,
          "SUCCESS_GET_SEARCH_PRODUCT",
          "berhasil mendapatkan search product"
        )
      );
      await dispatch(setLoading(false, "LOADING_GET_SEARCH_PRODUCT"));
    } catch (e) {
      await dispatch(
        setFailed(
          true,
          "FAILED_GET_SEARCH_PRODUCT",
          "gagal mendapatkan search product"
        )
      );
      await dispatch(setLoading(false, "LOADING_GET_SEARCH_PRODUCT"));
    }
  };
};

//Function For send Search Result to reducer
const receivedSearchProduct = data => {
  return {
    type: RECEIVED_SEARCH_PRODUCT,
    payload: data
  };
};
