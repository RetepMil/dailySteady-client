import Log from "./log.interface";

export default interface UserInfo {
  email: string;
  name: string;
  logs: Array<Log> | null;
}
