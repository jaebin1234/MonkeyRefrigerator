import { Cookies } from "react-cookie";
import { getToken } from "../../api/UserApi";
const cookies = new Cookies();
const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

//로그인 시도, 성공 시 토큰 발급
export const LOGIN_VALI = "LOGIN_VALI";
export const LOGIN_VALI_SUCCESS = "LOGIN_VALI_SUCCESS";
export const LOGIN_VALI_ERROR = "LOGIN_VALI_ERROR";

export const loginVali = (email, pw) => async (dispatch) => {
  dispatch({ type: LOGIN_VALI });
  const data = { email: email, pw: pw };
  try {
    const user = await getToken(data);
    if (user !== undefined) {
      setCookie(email, user, { path: "/", secure: true, sameSite: "none" });
    }
  } catch (e) {}
};
