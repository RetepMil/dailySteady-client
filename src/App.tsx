import { createContext, useEffect, useState } from "react";
import AuthModal from "./component/AuthModal";
import RowFactory from "./component/LogFactory";
import Menu from "./component/Menu";
import NewLogInput from "./component/NewLogInput";
import LogService from "./service/logService";
import UserInfo from "./shared/interfaces/User.interfaces";
import Log from "./shared/interfaces/log.interface";

export const AuthContext = createContext<UserInfo | null>(null);

function App() {
  const [logs, setLogs] = useState<Array<Log>>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (userInfo !== null) refreshLogs();
  }, [userInfo]);

  async function refreshLogs() {
    const { email } = userInfo!;
    if (email === null) return;

    const localTimeOffset_KR = 1000 * 60 * 60 * 9;
    const date = new Date(new Date().getTime() + localTimeOffset_KR)
      .toISOString()
      .slice(0, 10);
    const logs = await LogService.getLogs(email, date);
    setLogs(logs);
  }

  return (
    <AuthContext.Provider value={userInfo}>
      <div className="bg-app-bg-color flex flex-col">
        <Menu />
        <RowFactory logs={logs} />
      </div>
      {userInfo !== null ? undefined : <AuthModal setUserInfo={setUserInfo} />}
      <NewLogInput refreshLogs={refreshLogs} />
    </AuthContext.Provider>
  );
}

export default App;
