import React from "react";

function Row({ time, content }) {
  return (
    <div className="w-full h-14 bg-slate-400">
      {time} {content}
    </div>
  );
}

export default Row;
