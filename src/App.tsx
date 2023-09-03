import { createContext } from "react";
import NewLogInput from "./component/NewLogInput";
import RowFactory from "./component/LogFactory";
import Menu from "./component/Menu";
import LogService from "./service/logService";
import { useEffect, useState } from "react";
import Log from "./shared/interfaces/log.interface";
import AuthModal from "./component/AuthModal";
import UserInfo from "./shared/interfaces/User.interfaces";

const AuthContext = createContext<UserInfo | null>(null);

function App() {
  const [logs, setLogs] = useState<Array<Log>>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (userInfo !== null) refreshLogs();
  }, [userInfo]);

  function refreshLogs() {
    const { email } = userInfo!;
    const localTimeOffset_KR = 1000 * 60 * 60 * 9;
    const date = new Date(new Date().getTime() + localTimeOffset_KR)
      .toISOString()
      .slice(0, 10);
    LogService.getLogs(email, date).then((logs) => setLogs(logs.data));
  }

  return (
    <AuthContext.Provider value={userInfo}>
      <div className="p-4 bg-app-bg-color">
        <Menu />
        {userInfo !== null ? null : <AuthModal setUserInfo={setUserInfo} />}
        <RowFactory logs={logs} />
        <NewLogInput refreshLogs={refreshLogs} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
