import { combineReducers } from "redux";
import aircraft from "./aircraft";
import route from "./route";
import airport from "./airport";

const reducers = combineReducers({
  aircraft,
  route,
  airport
});

export default reducers;
