import { useState } from "react";
import Log from "../shared/interfaces/log.interface";
import DateController from "./DateController";
import Row from "./Log";
import "./LogFactory.css";
import DateUtils from "../service/DateUtils";

type RowFactoryProps = {
  logs: Array<Log> | undefined;
  refreshLogs: (date: string) => void;
};

function RowFactory({ logs, refreshLogs }: RowFactoryProps) {
  const [date, setDate] = useState(DateUtils.getTodayDate());
  return (
    <>
      <DateController date={date} setDate={setDate} refreshLogs={refreshLogs} />
      <div className="logFactoryDiv">
        {logs?.length !== 0
          ? logs?.map((log: Log) => {
              const { createdAt, userId, content, recordId } = log;
              return (
                <Row
                  key={recordId}
                  recordId={recordId}
                  userId={userId}
                  createdAt={createdAt}
                  content={content}
                />
              );
            })
          : undefined}
        <div className="h-20 w-full bg-color-white"></div>
      </div>
    </>
  );
}

export default RowFactory;
