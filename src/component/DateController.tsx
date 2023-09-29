import { Dispatch, SetStateAction } from "react";

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
    console.log("PREV");
  };
  const moveToNextDay = () => {
    console.log("NEXT");
  };
  return (
    <div className="flex flex-row justify-center align-middle text-menu-theme-color">
      <div className="w-1/5 flex flex-row justify-around align-middle font-black">
        <button className="cursor-pointer" onClick={moveToPreviousDay}>
          {"<"}
        </button>
        <span>{date}</span>
        <button className="cursor-pointer" onClick={moveToNextDay}>
          {">"}
        </button>
      </div>
    </div>
  );
}
