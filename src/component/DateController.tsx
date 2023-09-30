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
  const buttonTextStyle = {
    display: "inline-flex",
    "align-items": "center",
  };

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
    <div className="h-8 flex flex-row justify-center align-middle text-menu-theme-color">
      <div className="w-1/5 flex flex-row justify-around align-middle font-black text-xl">
        <button
          className="cursor-pointer"
          onClick={moveToPreviousDay}
          style={buttonTextStyle}
        >
          {"<"}
        </button>
        <span className="text-base" style={buttonTextStyle}>
          {date}
        </span>
        <button
          className={`cursor-pointer ${
            date === DateUtils.getTodayDate() ? "text-app-bg-color" : ""
          }`}
          onClick={date !== DateUtils.getTodayDate() ? moveToNextDay : null}
          style={buttonTextStyle}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
