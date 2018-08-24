import { combineReducers } from "redux";
import { success, loading, failed } from "./processor";

import { schedulecar, schedulebyid } from "./getSchedule";
import { receivedbrand } from "./getBrand";
import { receivedadmfee } from "./getAdmFee";
import { sessionPersistance,  } from "./login";
import {
  receivedproductrecomend,
  receivedproductall,
  receivedproductbyevent,
  receivedproductdetail,
  receivedimagesproduct,
  receivedsearchproduct
} from "./getProduct";

const rootReducers = combineReducers({
  success,
  loading,
  failed,
  schedulecar,
  schedulebyid,
  receivedbrand,
  receivedadmfee,
  sessionPersistance,
  receivedproductrecomend,
  receivedproductall,
  receivedproductbyevent,
  receivedproductdetail,
  receivedsearchproduct,
  receivedimagesproduct
});

export default rootReducers;
