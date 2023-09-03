import { HttpStatusCode } from "axios";
import { UserLoginResponse } from "../shared/interfaces/User.interfaces";
import axiosInstance from "./AxiosClient";

export default class AuthService {
  static async signup(email: string, password: string, username: string) {
    const data = JSON.stringify({
      email,
      username,
      password,
    });
    const response = await axiosInstance.post(`/signup`, data);
    if (!response) throw new Error("서버와의 통신에서 에러가 발생했습니다");
    const {
      data: { code },
    } = response;
    if (code != HttpStatusCode.Created) throw new Error("회원가입 실패");
  }

  // prettier-ignore
  static async signin(email: string, password: string): Promise<UserLoginResponse> {
    const body = JSON.stringify({
      email,
      password,
    });

    const response = await axiosInstance.post(`/signin`, body);
    if (!response) {
      throw new Error("알 수 없는 에러가 발생했습니다")
    }

    const { data: { name, grantType, accessToken } } = response;
    axiosInstance.defaults.headers.common["Authorization"] = `${grantType} ${accessToken}`;
    
    const userInfo: UserLoginResponse = { email, name };
    return userInfo;
  }
}
