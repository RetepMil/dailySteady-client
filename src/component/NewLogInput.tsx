import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../App";
import LogService from "../service/logService";
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
    if (userInfo === undefined || userInfo === null) return;

    const { email } = userInfo;
    if (email === null) return;
    console.log(userInfo);

    await LogService.saveLog(email, content);
    refreshLogs(UtilService.getTodayDate());
    setContent("");
  }

  return (
    <div className="fixed bottom-0 w-full h-20 p-4 backdrop-blur-sm bg-app-bg-color/50 focus:bg-app-bg-color">
      <div className="w-full p-2 h-12 rounded-md bg-log-bg-color flex">
        <div className="h-full w-1/8 text-menu-theme-color inline-flex items-center pl-2 pr-2 border-r-menu-theme-color border-r-2">
          <span>+</span>
        </div>
        <div className="h-full w-7/8 inline-flex items-center pl-2 pr-2">
          <form onSubmit={onSubmit}>
            <input
              onChange={onInputChange}
              type="text"
              value={content}
              placeholder="로그 추가"
              className="bg-log-bg-color w-full placeholder-menu-theme-color text-slate-50 focus:placeholder-transparent"
            />
            <button type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLogInput;
