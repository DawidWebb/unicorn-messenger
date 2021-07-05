import { combineReducers } from "redux";

import { cookieReducer } from "./cookieReducer";
import { loginReducer } from "./loginReducer";
import { messageReducer } from "./messageReducer";
import { spinnerReducer } from "./spinnerReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  cookie: cookieReducer,
  login: loginReducer,
  messages: messageReducer,
  spinner: spinnerReducer,
  task: taskReducer,
});
