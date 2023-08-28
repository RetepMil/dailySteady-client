import axios from "axios";
import { json } from "stream/consumers";

export default class AuthService {
  static axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
      "Content-Type": "application/json",
      "Content-Encoding": "UTF-8",
    },
  });

  static async signup(email: string, password: string, username: string) {
    const data = JSON.stringify({
      email,
      username,
      password,
    });
    return this.axiosInstance.post(`/signup`, data);
  }

  static async signin(email: string, password: string) {
    const data = JSON.stringify({
      email,
      password,
    });
    return this.axiosInstance.post(`/signin`, data);
  }
}
