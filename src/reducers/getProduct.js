import {
  RECEIVED_PRODUCT_RECOMEND,
  RECEIVED_PRODUCT_ALL,
  RECEIVED_PRODUCT_BY_EVENT,
  RECEIVED_PRODUCT_DETAIL,
  RECEIVED_IMAGES_PRODUCT,
  RECEIVED_IMAGE_EVERY_PRODUCT,
  RECEIVED_SEARCH_PRODUCT
} from "../constants/processor";

export const receivedproductrecomend = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_RECOMEND:
      return action.payload;
    default:
      return state;
  }
};

export const receivedproductall = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_ALL:
      return action.payload;
    default:
      return state;
  }
};

export const receivedproductbyevent = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_BY_EVENT:
      return action.payload;
    default:
      return state;
  }
};

export const receivedproductdetail = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export const receivedsearchproduct = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_SEARCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export const receivedimagesproduct = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_IMAGES_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export const receivedimageeveryproduct = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_IMAGE_EVERY_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
