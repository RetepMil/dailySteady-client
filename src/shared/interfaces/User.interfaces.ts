import Log from "./log.interface";

export default interface UserInfo {
  email: string | null;
  name: string | null;
  logs: Array<Log> | null;
}

export interface UserLoginResponse {
  email: string;
  name: string;
}
