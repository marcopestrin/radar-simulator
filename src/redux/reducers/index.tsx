import { combineReducers } from "redux";
import aircrafts from "./aircraft";
import routes from "./route";
import airports from "./airport";
import currentSituation from "./now";

const reducers = combineReducers({
  aircrafts,
  routes,
  airports,
  currentSituation
});

export default reducers;
