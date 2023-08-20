import Log from "../shared/interfaces/log.interface";
import Row from "./Log";

type RowFactoryProps = {
  logs: Array<Log> | undefined;
};

function RowFactory({ logs }: RowFactoryProps) {
  return (
    <>
      {logs?.map((log: Log) => {
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
