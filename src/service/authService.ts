import axios from "axios";

export default class AuthService {
  static axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
  });

  static async signup(email: string, username: string, password: string) {
    return await this.axiosInstance.post(`/signup`, {
      email,
      username,
      password,
    });
  }

  static async signin(email: string, password: string) {
    return await this.axiosInstance.post(`/signin`, {
      email,
      password,
    });
  }
}
