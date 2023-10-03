import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../App";
import LogService from "../service/LogService";
import UtilService from "../service/DateUtils";

type NewLogInputProps = {
  refreshLogs: (date: string) => void;
};

function NewLogInput({ refreshLogs }: NewLogInputProps) {
  const [content, setContent] = useState<string>("");
  const userInfo = useContext(AuthContext);

  function onInputChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void {
    setContent(value);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (userInfo === null) return;

    const { email } = userInfo;
    if (email === null || email === "") return;

    LogService.saveLog(email, content)
      .then(() => {
        refreshLogs(UtilService.getTodayDate());
        setContent("");
      })
      .catch((err) => {
        console.error(err);
        alert("로그 추가에 실패했습니다.\n" + err?.message);
      });
  }

  return (
    <div className="fixed bottom-0 w-full h-20 p-4 backdrop-blur-sm bg-app-bg-color/50 focus:bg-app-bg-color">
      <div className="w-full p-2 h-12 rounded-md bg-log-bg-color flex">
        <div className="h-full w-1/8 text-menu-theme-color inline-flex items-center pl-2 pr-2 border-r-menu-theme-color border-r-2">
          <span>+</span>
        </div>
        <div
          className="h-full inline-flex items-center pl-2 pr-2"
          style={{ width: "inherit" }}
        >
          <form
            onSubmit={onSubmit}
            className="h-full w-full flex align-middle justify-center"
          >
            <input
              onChange={onInputChange}
              type="text"
              value={content}
              placeholder="로그 추가"
              className="bg-log-bg-color w-full placeholder-menu-theme-color text-slate-50 focus:placeholder-transparent focus:outline-none"
            />
            <button type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLogInput;
