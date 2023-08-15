import NewLogInput from "./component/NewLogInput";
import RowFactory from "./component/LogFactory";
import Menu from "./component/Menu";
import LogService from "./service/logService";
import { useEffect, useState } from "react";
import { ILog } from "./shared/interfaces/logs.interface";

function App() {
  const [logs, setLogs] = useState<Array<ILog>>();

  useEffect(() => {
    refreshLogs();
    console.log(import.meta.env);
  }, []);

  function refreshLogs() {
    const userId = "1";
    const offset = 1000 * 60 * 60 * 9;
    const date = new Date(new Date().getTime() + offset)
      .toISOString()
      .slice(0, 10);
    LogService.getLogs(userId, date).then((logs) => setLogs(logs.data));
  }

  return (
    <>
      <div className="p-4 bg-app-bg-color">
        <Menu />
        <RowFactory logs={logs} />
        <NewLogInput refreshLogs={refreshLogs} />
      </div>
    </>
  );
}

export default App;
