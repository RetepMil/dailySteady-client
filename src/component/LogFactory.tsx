import Log from "../shared/interfaces/log.interface";
import Row from "./Log";

type RowFactoryProps = {
  logs: Array<Log> | undefined;
};

function RowFactory({ logs }: RowFactoryProps) {
  return (
    <div className="p-4">
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
      <div className="h-24 w-full bg-color-white"></div>
    </div>
  );
}

export default RowFactory;
