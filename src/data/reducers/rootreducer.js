import { combineReducers } from "redux";

import { cookieReducer } from "./cookieReducer";
import { loginReducer } from "./loginReducer";
import { spinnerReducer } from "./spinnerReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  cookie: cookieReducer,
  login: loginReducer,
  spinner: spinnerReducer,
  task: taskReducer,
});
