import {
  RECEIVED_PRODUCT_RECOMEND,
  RECEIVED_PRODUCT_ALL,
  RECEIVED_PRODUCT_BY_EVENT,
  RECEIVED_PRODUCT_DETAIL,
  RECEIVED_IMAGES_PRODUCT,
  RECEIVED_SEARCH_PRODUCT
} from "../constants/processor";

//reducer for Recomended Product
export const receivedproductrecomend = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_RECOMEND:
      return action.payload;
    default:
      return state;
  }
};

//reducer for all Product
export const receivedproductall = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_ALL:
      return action.payload;
    default:
      return state;
  }
};

//reducer for Product by Jadwal
export const receivedproductbyevent = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_BY_EVENT:
      return action.payload;
    default:
      return state;
  }
};

//reducer for Detail Product
export const receivedproductdetail = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

//reducer for Search Product
export const receivedsearchproduct = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_SEARCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

//reducer for Images Product
export const receivedimagesproduct = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_IMAGES_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};