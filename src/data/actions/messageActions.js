import request from "../../helpers/request";
import { addSpinner, removeSpinner, timeoutShowTask } from "../actions";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";

export const getMessages = () => async (dispatch) => {
  const { data, status } = await request.get("/messages");

  if (status === 200) {
    dispatch({
      type: GET_MESSAGES,
      payload: data,
    });
  } else {
    dispatch(timeoutShowTask(data.message));
  }
};
export const addMessage = (dataObj) => async (dispatch) => {
  dispatch(addSpinner());

  const { data, status } = await request.post("/messages", dataObj);
  if (status === 201) {
    dispatch({
      type: ADD_MESSAGE,
      payload: data,
    });
    dispatch(removeSpinner());
  } else {
    dispatch(removeSpinner());
    dispatch(timeoutShowTask(data.message));
  }
};
export const clearBase = () => async (dispatch) => {
  const { data, status } = await request.get("/messages");
  if (status === 200) {
    data.forEach((item) => request.delete(`/messages/${item._id}`));
  }
};
