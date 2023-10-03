import { useEffect, useState } from "react";
import DateUtils from "../service/DateUtils";

type RowProps = {
  recordId: string;
  memberEmail: string;
  content: string;
  createdAt: string;
  nextLogAt: string | undefined;
};

function Row({ recordId, content, createdAt, nextLogAt }: RowProps) {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setDate(new Date(createdAt?.replace("T", " ")));
  }, [createdAt]);

  const generateTimeDiff = () => {
    if (nextLogAt === undefined) return;
    const { hours, minutes, seconds } = DateUtils.calculateDiff(
      nextLogAt,
      createdAt
    );
    return `~ ${hours != 0 ? hours + "시간 " : ""}${
      minutes != 0 ? minutes + "분 " : ""
    }${seconds}초`;
  };

  return (
    <div
      id={recordId}
      className="w-full mb-2 p-2 h-12 rounded-md bg-log-bg-color inline-flex items-center"
    >
      <div className="h-full w-1/8 text-menu-theme-color inline-flex items-center pl-2 pr-2 border-r-menu-theme-color border-r-2">
        <span>{date ? date.toString().slice(16, 25) : ""}</span>
      </div>
      <div className="h-full w-6/8 text-slate-50 inline-flex items-center pl-2 pr-2">
        {content}
      </div>
      <div
        className={`h-3/4 w-1/8 rounded-2xl text-slate-300 flex justify-center align-middle pl-2 pr-2 opacity-75`}
      >
        {generateTimeDiff()}
      </div>
    </div>
  );
}

export default Row;
