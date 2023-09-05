import Log from "../shared/interfaces/log.interface";
import Row from "./Log";
import "./LogFactory.css";

type RowFactoryProps = {
  logs: Array<Log> | undefined;
};

function RowFactory({ logs }: RowFactoryProps) {
  return (
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
  );
}

export default RowFactory;
