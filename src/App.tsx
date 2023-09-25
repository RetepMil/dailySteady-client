import { createContext, useCallback, useEffect, useState } from "react";
import AuthModal from "./component/AuthModal";
import RowFactory from "./component/LogFactory";
import Menu from "./component/Menu";
import NewLogInput from "./component/NewLogInput";
import LogService from "./service/logService";
import UserInfo from "./shared/interfaces/User.interfaces";
import Log from "./shared/interfaces/log.interface";
import AuthService from "./service/authService";

export const AuthContext = createContext<UserInfo | null>(null);

function App() {
  const [logs, setLogs] = useState<Array<Log>>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const refreshLogs = useCallback(async () => {
    if (userInfo === null) return;

    const { email } = userInfo!;
    if (email === undefined || email === null) return;

    const localTimeOffset_KR = 1000 * 60 * 60 * 9;
    const date = new Date(new Date().getTime() + localTimeOffset_KR)
      .toISOString()
      .slice(0, 10);
    const logs = await LogService.getLogs(email, date);
    setLogs(logs);
  }, [userInfo]);

  useEffect(() => {
    AuthService.tokenSignin();
    if (userInfo !== null) refreshLogs();
  }, [userInfo, refreshLogs]);

  return (
    <AuthContext.Provider value={userInfo}>
      <div className="bg-app-bg-color flex flex-col">
        <Menu />
        <RowFactory logs={logs} />
      </div>
      {userInfo !== null ? undefined : <AuthModal setUserInfo={setUserInfo} />}
      {userInfo === null ? undefined : (
        <NewLogInput refreshLogs={refreshLogs} />
      )}
    </AuthContext.Provider>
  );
}

export default App;
