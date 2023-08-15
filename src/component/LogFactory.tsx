import { ILog } from "../shared/interfaces/logs.interface";
import Row from "./Log";

function RowFactory({ logs }) {
  return (
    <>
      {logs?.map((log: ILog) => {
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
      })}
    </>
  );
}

export default RowFactory;
