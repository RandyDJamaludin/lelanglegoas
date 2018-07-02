import { combineReducers } from "redux";
import { success, loading, failed } from "./processor";

import { schedulecar } from "./getSchedule";
import { receivedbrand } from "./getBrand";
import { sessionPersistance, resultCekToken } from "./login";
import {
  receivedproductrecomend,
  receivedproductbyevent,
  receivedproductdetail
} from "./getProduct";

const rootReducers = combineReducers({
  success,
  loading,
  failed,
  schedulecar,
  receivedbrand,
  sessionPersistance,
  resultCekToken,
  receivedproductrecomend,
  receivedproductbyevent,
  receivedproductdetail
});

export default rootReducers;
