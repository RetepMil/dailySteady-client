import { useState } from "react";
import Modal from "../Modal";
import UserInfo from "../shared/interfaces/userContext.interface";
import AuthService from "../service/authService";

type AuthModalProps = {
  setUserInfo: (userInfo: UserInfo) => null;
};

function AuthModal({ setUserInfo }: AuthModalProps) {
  const [visible, setVisible] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUpMode = () => setShowSignUp(!showSignUp);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (showSignUp) {
      // 회원가입 Form인 경우
      const { email, password, username } = event.target;
      AuthService.signup(email, password, username);
    } else {
      //로그인 Form인 경우
      const { email, password } = event.target;
      AuthService.signup(email, password);
    }
  };

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <h1 className="text-lg font-bold mb-4">환영합니다!</h1>
      <form onSubmit={onSubmit} className="flex flex-row mb-2">
        <div className="w-3/4 pr-1">
          <input
            type="email"
            name="email"
            className="w-full pl-1 mb-1"
            placeholder="이메일"
          />
          <input
            type="password"
            name="password"
            autoComplete="on"
            className={`w-full pl-1 ${showSignUp ? "mb-1" : ""}`}
            placeholder="비밀번호"
          />
          {showSignUp ? (
            <input
              type="text"
              name="username"
              className="w-full pl-1"
              placeholder="닉네임"
            />
          ) : null}
        </div>
        <div className="w-1/4 p-1 bg-menu-theme-color">
          <button className="w-full h-full text-slate-50">
            {showSignUp ? "회원가입" : "로그인"}
          </button>
        </div>
      </form>
      {showSignUp ? (
        <span>
          <span
            onClick={toggleSignUpMode}
            className="text-blue-500 cursor-pointer"
          >
            로그인
          </span>
          으로 돌아가기
        </span>
      ) : (
        <span>
          아직 계정이 없으신가요?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleSignUpMode}
          >
            여기
          </span>
          를 눌러서 회원가입을 진행해주세요
        </span>
      )}
    </Modal>
  );
}

export default AuthModal;
