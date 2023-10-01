import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private static instance: AxiosInstance;

  private constructor() {}

  // prettier-ignore
  public static getInstance(): AxiosInstance {
    if (!AxiosClient.instance) {
      let url;
      switch (process.env.NODE_ENV) {
        case "LOCAL":
          url = import.meta.env.VITE_SERVER_URL_LOCAL;
          break;
        case "DEV":
          url = import.meta.env.VITE_SERVER_URL_DEV;
          break;
        case "PROD":
          url = import.meta.env.VITE_SERVER_URL_PROD;
          break;
      }
      
      AxiosClient.instance = axios.create({
        baseURL: url,
        withCredentials: true,
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
