import { ChangeEvent, FormEvent, useState } from "react";
import LogService from "../service/logService";

function NewLogInput({ refreshLogs }) {
  const [content, setContent] = useState<string>("");

  function onInputChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void {
    setContent(value);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await LogService.saveLog("1", content);
    refreshLogs();
    setContent("");
  }

  return (
    // <div className="fixed bottom-0 w-full h-24 p-4 backdrop-blur-sm bg-app-bg-color/90 focus:bg-app-bg-color">
    <div className="bg-app-bg-color mb-4">
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
