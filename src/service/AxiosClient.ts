import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosClient.instance) {
      AxiosClient.instance = axios.create({
        baseURL: import.meta.env.VITE_SERVER_URL,
        headers: {
          "Content-Type": "application/json",
          "Content-Encoding": "UTF-8",
        },
      });
    }
    return AxiosClient.instance;
  }
}

export default AxiosClient.getInstance();
