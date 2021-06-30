import { addCookie, deleteCoockie, checkCookie } from "../../helpers/session";

export const COOKIE_SET = "COOKIE_SET";
export const COOKIE_DELETE = "COOKIE_DELETE";

export const cookeieCheck = () => (dispatch) => {
  dispatch({
    type: COOKIE_SET,
    isCookie: checkCookie(),
  });
};

export const cookieSet = () => async (dispatch) => {
  addCookie();
  dispatch({
    type: COOKIE_SET,
    isCookie: true,
  });
};

export const cookieDel = () => async (dispatch) => {
  deleteCoockie();
  dispatch({
    type: COOKIE_DELETE,
    isCookie: false,
  });
};
