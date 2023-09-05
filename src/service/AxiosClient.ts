import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private static instance: AxiosInstance;

  private constructor() {}

  // prettier-ignore
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
    
    const accessToken = localStorage.getItem("accessToken") !== null
    if (accessToken !== undefined && accessToken !== null) {
      AxiosClient.instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    return AxiosClient.instance;
  }
}

export default AxiosClient.getInstance();
