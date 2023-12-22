import { useState } from "react";
import Log from "../shared/interfaces/log.interface";
import DateController from "./DateController";
import Row from "./Log";
import "./LogFactory.css";
import DateUtils from "../service/DateUtils";

type RowFactoryProps = {
  logs: Array<Log> | null;
  refreshLogs: (date: string) => void;
};

function RowFactory({ logs, refreshLogs }: RowFactoryProps) {
  const [date, setDate] = useState(DateUtils.getTodayDate());

  const generateRows = (logs: Log[] | undefined) => {
    return logs?.map((log: Log, index: number) => {
      const { createdAt, memberEmail, content, recordId } = log;
      return (
        <Row
          key={recordId}
          memberEmail={memberEmail}
          recordId={recordId}
          content={content}
          createdAt={createdAt}
          nextLogAt={
            index < logs.length - 1 ? logs[index + 1].createdAt : undefined
          }
        />
      );
    });
  };

  return (
    <>
      <DateController date={date} setDate={setDate} refreshLogs={refreshLogs} />
      <div className="logFactoryDiv">
        {logs ? generateRows(logs) : undefined}
        <div className="h-20 w-full bg-color-white"></div>
      </div>
    </>
  );
}

export default RowFactory;
