import { addCookie, deleteCoockie, checkCookie } from "../../helpers/session";
export const COOKIE_SET = "COOKIE_SET";
export const COOKIE_DELETE = "COOKIE_DELETE";

export const cookeieCheck = () => (dispatch) => {
  const cookie = checkCookie();
  if (cookie) {
    console.log("check", cookie);
    dispatch({
      type: COOKIE_SET,
      payload: cookie,
    });
  }
};

export const cookieSet = (loginData) => async (dispatch) => {
  addCookie(loginData);
  dispatch({
    type: COOKIE_SET,
    payload: loginData,
  });
};

export const cookieDel = () => async (dispatch) => {
  deleteCoockie();
  dispatch({
    type: COOKIE_DELETE,
  });
};
