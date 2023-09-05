import { HttpStatusCode } from "axios";
import moment from "moment";
import Log from "../shared/interfaces/log.interface";
import axiosInstance from "./AxiosClient";

export default class LogService {
  // prettier-ignore
  static async getLogs(email: string, date: string): Promise<Array<Log>> {
    const response = await axiosInstance.get(`/record?email=${email}&date=${date}`);
    const { data: { code, data }} = response
    if (code !== HttpStatusCode.Ok) throw new Error("서버 통신 실패")
    return data;
  }

  static async saveLog(email: string, content: string) {
    const time = moment().format("YYYY-MM-DDTHH:mm:ss");
    return await axiosInstance.post("/record", {
      email,
      time,
      content,
    });
  }
}
