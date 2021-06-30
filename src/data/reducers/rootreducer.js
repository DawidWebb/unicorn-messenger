import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { spinnerReducer } from "./spinnerReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  spinner: spinnerReducer,
  task: taskReducer,
});
