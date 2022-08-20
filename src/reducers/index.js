import { combineReducers } from "redux";
import todos from "./todo_reducer";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
