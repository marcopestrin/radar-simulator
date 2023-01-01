import { combineReducers } from "redux";
import aircrafts from "./aircraft";
import routes from "./route";
import airports from "./airport";

const reducers = combineReducers({
  aircrafts,
  routes,
  airports
});

export default reducers;
