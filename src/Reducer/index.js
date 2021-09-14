import { combineReducers } from "redux";
import GameReducer from "./gameReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: GameReducer,
  detail: detailReducer,
});
export default rootReducer;
