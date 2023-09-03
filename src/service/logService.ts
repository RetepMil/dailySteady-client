import axios from "axios";
import moment from "moment";

export default class LogService {
  static axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
  });

  static async getLogs(email: string, date: string) {
    return await this.axiosInstance.get(`/record?userId=${email}&date=${date}`);
  }

  static async saveLog(userId: string, content: string) {
    const time = moment().format("YYYY-MM-DDTHH:mm:ss");
    return await this.axiosInstance.post("/record", {
      userId,
      time,
      content,
    });
  }
}
