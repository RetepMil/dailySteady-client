export default interface UserInfo {
  email: string | null;
  name: string | null;
}

export interface UserLoginResponse {
  email: string;
  name: string;
}
