import { useEffect, useState } from "react";
import { ILog } from "../shared/interfaces/log.interface";

function Row({ recordId, createdAt, content }: ILog) {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setDate(new Date(createdAt.replace("T", " ")));
  }, [createdAt]);

  return (
    <div
      id={recordId}
      className="w-full mb-2 p-2 h-12 rounded-md bg-log-bg-color flex"
    >
      <div className="h-full w-1/8 text-menu-theme-color inline-flex items-center pl-2 pr-2 border-r-menu-theme-color border-r-2">
        <span>{date ? date.toString().slice(16, 25) : ""}</span>
      </div>
      <div className="h-full w-7/8 text-slate-50 inline-flex items-center pl-2 pr-2">
        {content}
      </div>
    </div>
  );
}

export default Row;
