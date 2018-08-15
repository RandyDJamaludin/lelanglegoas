import { setLoading, setFailed, setSuccess } from "./processor";
import axios from "axios";
import { server } from "../env/server";

import {
  RECEIVED_PRODUCT_RECOMEND,
  RECEIVED_PRODUCT_ALL,
  RECEIVED_PRODUCT_BY_EVENT,
  RECEIVED_PRODUCT_DETAIL,
  RECEIVED_IMAGES_PRODUCT,
  RECEIVED_IMAGE_EVERY_PRODUCT
} from "../constants/processor";
let temporary_product_recomend =[]

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

const receivedProductRecomend = data => {
  temporary_product_recomend.push(...data)
  console.log(temporary_product_recomend)
  return {
    type: RECEIVED_PRODUCT_RECOMEND,
    payload: temporary_product_recomend
  };
};

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

const receivedProductAll = data => {
  return {
    type: RECEIVED_PRODUCT_ALL,
    payload: data
  };
};

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

const receivedProductByEvent = data => {
  return {
    type: RECEIVED_PRODUCT_BY_EVENT,
    payload: data
  };
};

let imageArray = [];

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
        receivedImage(data.auctionLotUnits[0].physicalImages[2].imageUri)
      );
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

const receivedProductDetail = data => {
  return {
    type: RECEIVED_PRODUCT_DETAIL,
    payload: data
  };
};

const receivedImages = data => {
  return {
    type: RECEIVED_IMAGES_PRODUCT,
    payload: data
  };
};

const receivedImage = data => {
  imageArray.push(data);
  
  return {
    type: RECEIVED_IMAGE_EVERY_PRODUCT,
    payload: imageArray
  };
};
