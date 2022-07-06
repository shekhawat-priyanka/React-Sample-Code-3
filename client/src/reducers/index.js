import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import errors from "./errors";
import inquiry from "./admin/inquiry";

export default combineReducers({
  auth,
  alert,
  errors,
  inquiry,
});
