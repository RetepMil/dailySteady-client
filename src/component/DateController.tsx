import { Dispatch, SetStateAction } from "react";
import DateUtils from "../service/DateUtils";

type DateControllerProps = {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  refreshLogs: (date: string) => void;
};

export default function DateController({
  date,
  setDate,
  refreshLogs,
}: DateControllerProps) {
  const moveToPreviousDay = () => {
    const prevDate = DateUtils.dateOffsetByDay(date, -1);
    setDate(prevDate);
    refreshLogs(prevDate);
  };

  const moveToNextDay = () => {
    const nextDate = DateUtils.dateOffsetByDay(date, 1);
    setDate(nextDate);
    refreshLogs(nextDate);
  };

  return (
    <div className="h-6 flex flex-row justify-center align-middle text-menu-theme-color">
      <div className="w-1/5 flex flex-row justify-around align-middle font-black">
        <button className="cursor-pointer" onClick={moveToPreviousDay}>
          {"<"}
        </button>
        <span>{date}</span>
        <button
          className={`cursor-pointer ${
            date === DateUtils.getTodayDate() ? "text-app-bg-color" : ""
          }`}
          onClick={date !== DateUtils.getTodayDate() ? moveToNextDay : null}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
