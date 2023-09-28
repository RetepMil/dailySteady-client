import { createContext, useCallback, useEffect, useState } from "react";
import AuthModal from "./component/AuthModal";
import RowFactory from "./component/LogFactory";
import Menu from "./component/Menu";
import NewLogInput from "./component/NewLogInput";
import UserInfo from "./shared/interfaces/User.interfaces";
import Log from "./shared/interfaces/log.interface";
import LogService from "./service/logService";
import AuthService from "./service/authService";
import DateUtils from "./service/DateUtils";

export const AuthContext = createContext<UserInfo | null>(null);

function App() {
  const [logs, setLogs] = useState<Array<Log>>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const refreshLogs = useCallback(
    async (date: string) => {
      if (userInfo === null) return;

      const { email } = userInfo!;
      if (email === null) return;

      const logs = await LogService.getLogs(email, date);
      setLogs(logs);
    },
    [userInfo]
  );

  useEffect(() => {
    if (userInfo !== null) refreshLogs(DateUtils.getTodayDate());
    else AuthService.tokenSignin();
  }, [userInfo, refreshLogs]);

  return (
    <AuthContext.Provider value={userInfo}>
      <div className="bg-app-bg-color flex flex-col">
        <Menu />
        <RowFactory logs={logs} refreshLogs={refreshLogs} />
      </div>
      {userInfo !== null ? undefined : <AuthModal setUserInfo={setUserInfo} />}
      {userInfo === null ? undefined : (
        <NewLogInput refreshLogs={refreshLogs} />
      )}
    </AuthContext.Provider>
  );
}

export default App;
