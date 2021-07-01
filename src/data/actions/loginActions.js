import request from "../../helpers/request";
import {
  addSpinner,
  removeSpinner,
  timeoutShowTask,
  cookieSet,
} from "../actions";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const addLogin = (dataObj) => async (dispatch) => {
  dispatch(addSpinner());

  const { data, status } = await request.post("/users", dataObj);
  if (status === 200) {
    dispatch({
      type: LOG_IN,
      payload: data.user.login,
    });
    dispatch(cookieSet(data.user.login));
    dispatch(removeSpinner());
  } else if (status === 404) {
    dispatch(removeSpinner());
    dispatch(timeoutShowTask(data.message));
  } else {
    dispatch(removeSpinner());
    dispatch(timeoutShowTask(data.message));
  }
};

export const addLogout = () => ({
  type: LOG_OUT,
});
