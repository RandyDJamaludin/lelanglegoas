import { combineReducers } from "redux";
import { success, loading, failed } from "./processor";

import { schedulecar } from "./getSchedule";
import { receivedbrand } from "./getBrand";
import { receivedadmfee } from "./getAdmFee";
import { sessionPersistance, resultCekToken } from "./login";
import {
  receivedproductrecomend,
  receivedproductall,
  receivedproductbyevent,
  receivedproductdetail,
  receivedimagesproduct,
  receivedimageeveryproduct,
  receivedsearchproduct
} from "./getProduct";

const rootReducers = combineReducers({
  success,
  loading,
  failed,
  schedulecar,
  receivedbrand,
  receivedadmfee,
  sessionPersistance,
  resultCekToken,
  receivedproductrecomend,
  receivedproductall,
  receivedproductbyevent,
  receivedproductdetail,
  receivedsearchproduct,
  receivedimagesproduct,
  receivedimageeveryproduct
});

export default rootReducers;
