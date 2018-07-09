import { setLoading, setFailed, setSuccess } from "./processor";
import axios from "axios";
import { server } from "../env/server";

import { RECEIVED_SEARCH_PRODUCT } from "../constants/processor";

export const fetchMerek = (tokenId, merek) => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_GET_SEARCH_PRODUCT"));
    try {
      const response = await axios.post(`${server}/api/am/get/command`, {
        "tokenId": tokenId,
        "uriCode": "LOT_SEARCH",
        "param": {
          "draw": 1,
          "columns": [],
          "start": 0,
          "length": -1,
          "search": {},
          "extra": {
            "SearchType": "SEARCHBYUNITSPEC",
            "UnitTypeCode": "CAR",
            "SpecFiltersJson": '{"MEREK":["'+merek+'"]}'
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

export const fetchModel = (tokenId, merek, model) => {
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
            SpecFiltersJson: '{"MEREK":["'+merek+'"],"MODEL":["'+model+'"]}'
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

export const fetchTipe = (tokenId, merek, model, tipe) => {
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
            SpecFiltersJson: '{"MEREK":["'+merek+'"],"MODEL":["'+model+'"],"TIPE":["'+tipe+'"]}'
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

const receivedSearchProduct = data => {
  return {
    type: RECEIVED_SEARCH_PRODUCT,
    payload: data
  };
};
