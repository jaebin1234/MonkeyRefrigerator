import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const getToken = async (data) => {
  const resultLogin = await axios
    .post(`${baseUrl}login`, data)
    .then((promiseData) => promiseData.data)
    .then((resolve) => resolve.result)
    .catch();
  return resultLogin;
};

//signupFrom API - 회원가입
export const insertSignupForm = (data) => {
  const result = axios.post(baseUrl + "signupInsert", data);
  return result;
};

//user information API - 프로필 조회
export const selectUserInformation = async (token) => {
  console.log(token);
  const result = axios
    .get(baseUrl + "profile", {
      headers: {
        accessToken: token,
      },
    })
    .then((res) => res.data)
    .catch();
  // console.log(result);
  return result;
};

//user password change API - 사용자 비밀번호 변경
export const updatePassword = async (data) => {
  console.log(data);
  const result = axios
    .post(baseUrl + "pwChange", {
      body: {
        userId: data.userId,
        password: data.password,
      },
    })
    .then((res) => res.data)
    .catch();
  return result;
};
