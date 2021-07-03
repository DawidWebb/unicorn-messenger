import { ADD_MESSAGE, GET_MESSAGES } from "../actions";

export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return (state = action.payload);

    case ADD_MESSAGE:
      return [...state, action.payload];

    default:
      // console.warn(`No have action type ${action.type}`);
      return state;
  }
};
