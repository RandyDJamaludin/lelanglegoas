import {
  RECEIVED_PRODUCT_RECOMEND,
  RECEIVED_PRODUCT_BY_EVENT,
  RECEIVED_PRODUCT_DETAIL
} from "../constants/processor";

export const receivedproductrecomend = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_PRODUCT_RECOMEND:
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
