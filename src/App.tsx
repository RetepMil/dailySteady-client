import { createContext, useCallback, useEffect, useState } from "react";
import AuthModal from "./component/AuthModal";
import RowFactory from "./component/LogFactory";
import Menu from "./component/Menu";
import NewLogInput from "./component/NewLogInput";
import UserInfo from "./shared/interfaces/User.interfaces";
import Log from "./shared/interfaces/log.interface";
import LogService from "./service/LogService";
import AuthService from "./service/AuthService";
import DateUtils from "./service/DateUtils";
import TodoTab from "./component/TodoTab";

export const AuthContext = createContext<UserInfo | null>(null);

function App() {
  const [logs, setLogs] = useState<Array<Log> | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [tabOn, setTabOn] = useState<boolean>(false);

  const toggleTodoTab = () => setTabOn(!tabOn);

  const refreshLogs = useCallback(
    async (date: string) => {
      if (userInfo === null) return;

      const { email } = userInfo!;
      if (email === null || email === "") return;

      LogService.getLogs(email, date)
        .then(setLogs)
        .catch((err) => {
          console.error(err);
          alert("로그 정보를 가져오지 못했습니다.\n" + err?.message);
        });
    },
    [userInfo]
  );

  useEffect(() => {
    if (userInfo !== null) refreshLogs(DateUtils.getTodayDate());
    else AuthService.signin("", null).then(setUserInfo).catch(console.error);
  }, [userInfo, refreshLogs]);

  // prettier-ignore
  return (
    <AuthContext.Provider value={userInfo}>
      <div className="flex flex-row">
        <TodoTab tabOn={tabOn} />
        <div className="bg-app-bg-color w-full">
          <div className="flex flex-col">
            <Menu toggleTodoTab={toggleTodoTab} />
            <RowFactory logs={logs} refreshLogs={refreshLogs} />
          </div>
          {
            userInfo === null 
              ? (<AuthModal setUserInfo={setUserInfo} />)
              : (<NewLogInput logs={logs} setLogs={setLogs} refreshLogs={refreshLogs}/>)
          }
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
