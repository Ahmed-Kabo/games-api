import { combineReducers } from "redux";
import GameReducer from "./gameReducer";

const rootReducer = combineReducers({
  games: GameReducer,
});
export default rootReducer;
