import { setLoading, setFailed, setSuccess } from "./processor";
import axios from "axios";
import { server } from "../env/server";

import {
  RECEIVED_PRODUCT_RECOMEND,
  RECEIVED_PRODUCT_ALL,
  RECEIVED_PRODUCT_BY_EVENT,
  RECEIVED_PRODUCT_DETAIL,
  RECEIVED_IMAGES_PRODUCT
} from "../constants/processor";
let temporary_product_recomend =[]

//Function For Fetching Product Recomended (Grade A)
export const fetchProductRecomended = tokenId => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_FETCH_RECOMEND"));
    try {
      const response = await axios.post(`${server}/api/am/get/command`, {
        tokenId: tokenId,
        uriCode: "LOT_SEARCH",
        param: {
          draw: 1,
          columns: [
            {
              data: "UnitGrade",
              name: null,
              searchable: true,
              orderable: true,
              search: {
                value: "A",
                regex: false
              }
            }
          ],
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
            SpecFiltersJson: "{}"
          }
        }
      });
      const data = await response.data;
      await dispatch(receivedProductRecomend(data.data));
      await dispatch(
        setSuccess(
          true,
          "SUCCESS_FETCH_RECOMEND",
          "berhasil mendapatkan product recomend"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_RECOMEND"));
    } catch (e) {
      await dispatch(
        setFailed(
          true,
          "FAILED_FETCH_RECOMEND",
          "gagal mendapatkan product recomend"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_RECOMEND"));
    }
  };
};

//Function For Fetching Product Recomended (Grade B)
export const fetchProductGradeB = tokenId => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_FETCH_RECOMEND"));
    try {
      const response = await axios.post(`${server}/api/am/get/command`, {
        tokenId: tokenId,
        uriCode: "LOT_SEARCH",
        param: {
          draw: 1,
          columns: [
            {
              data: "UnitGrade",
              name: null,
              searchable: true,
              orderable: true,
              search: {
                value: "B",
                regex: false
              }
            }
          ],
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
            SpecFiltersJson: "{}"
          }
        }
      });
      const data = await response.data;
      await dispatch(receivedProductRecomend(data.data));
      await dispatch(
        setSuccess(
          true,
          "SUCCESS_FETCH_RECOMEND",
          "berhasil mendapatkan product recomend"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_RECOMEND"));
    } catch (e) {
      await dispatch(
        setFailed(
          true,
          "FAILED_FETCH_RECOMEND",
          "gagal mendapatkan product recomend"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_RECOMEND"));
    }
  };
};

//Function For Combining Grade A & B, and then send it to reducer
const receivedProductRecomend = data => {
  temporary_product_recomend.push(...data)
  return {
    type: RECEIVED_PRODUCT_RECOMEND,
    payload: temporary_product_recomend
  };
};

//Function For Fetching All Product
export const fetchProductAll = tokenId => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_FETCH_ALL"));
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
            SpecFiltersJson: "{}"
          }
        }
      });
      const data = await response.data;
      await dispatch(receivedProductAll(data.data));
      await dispatch(
        setSuccess(
          true,
          "SUCCESS_FETCH_ALL",
          "berhasil mendapatkan product recomend"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_ALL"));
    } catch (e) {
      await dispatch(
        setFailed(
          true,
          "FAILED_FETCH_ALL",
          "gagal mendapatkan product recomend"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_ALL"));
    }
  };
};

//Function For send All Product to reducer
const receivedProductAll = data => {
  return {
    type: RECEIVED_PRODUCT_ALL,
    payload: data
  };
};

//Function For Fetching Product by Jadwal
export const fetchProductByEvent = (tokenId, eventId) => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_FETCH_BY_EVENT"));
    try {
      const response = await axios.post(`${server}/api/am/get/command`, {
        tokenId: tokenId,
        uriCode: "LOT_SEARCH",
        param: {
          draw: 1,
          columns: [
            {
              data: "AuctionLot.AuctionEvent.AuctionEventId",
              name: null,
              searchable: true,
              orderable: true,
              search: {
                value: `${eventId}`,
                regex: false
              }
            },
            {
              data: "AuctionLot.AuctionLotNumber",
              name: null,
              searchable: true,
              orderable: true,
              search: {
                value: null,
                regex: false
              }
            }
          ],
          order: [
            {
              column: 1,
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
            SpecFiltersJson: "{}"
          }
        }
      });
      const data = await response.data;
      await dispatch(receivedProductByEvent(data.data));
      await dispatch(
        setSuccess(
          true,
          "SUCCESS_FETCH_BY_EVENT",
          "berhasil mendapatkan product by event"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_BY_EVENT"));
    } catch (e) {
      await dispatch(
        setFailed(
          true,
          "FAILED_FETCH_BY_EVENT",
          "gagal mendapatkan product by event"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_BY_EVENT"));
    }
  };
};

//Function For send Product by Jadwal to reducer
const receivedProductByEvent = data => {
  return {
    type: RECEIVED_PRODUCT_BY_EVENT,
    payload: data
  };
};

//Function For Fetching Detail Product by Jadwal
export const fetchProductDetail = (tokenId, lotId) => {
  return async dispatch => {
    await dispatch(setLoading(true, "LOADING_FETCH_DETAIL_PRODUCT"));
    try {
      const response = await axios.post(
        `${server}/api/am/get/auctionlotbundle`,
        {
          tokenId: tokenId,
          param: {
            auctionLotId: lotId
          }
        }
      );
      const data = await response.data;
      await dispatch(receivedProductDetail({...data}));
      await dispatch(receivedImages(data.auctionLotUnits[0].physicalImages));
      await dispatch(
        setSuccess(
          true,
          "SUCCESS_FETCH_DETAIL_PRODUCT",
          "berhasil mendapatkan product detail"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_DETAIL_PRODUCT"));
    } catch (e) {
      await dispatch(
        setFailed(
          true,
          "FAILED_FETCH_DETAIL_PRODUCT",
          "gagal mendapatkan product detail"
        )
      );
      await dispatch(setLoading(false, "LOADING_FETCH_DETAIL_PRODUCT"));
    }
  };
};

//Function For send Detail Product to reducer
const receivedProductDetail = data => {
  return {
    type: RECEIVED_PRODUCT_DETAIL,
    payload: data
  };
};

//Function For send just Product Image to reducer
const receivedImages = data => {
  return {
    type: RECEIVED_IMAGES_PRODUCT,
    payload: data
  };
};