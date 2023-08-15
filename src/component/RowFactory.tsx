import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";

const offset = 1000 * 60 * 60 * 9;
const backend_url = "http://localhost:9000";
const userId = "1";
const date = new Date(new Date().getTime() + offset).toISOString().slice(0, 10);

function RowFactory() {
  const [logs, setLogs] = useState();

  useEffect(() => {
    console.log(`${backend_url}/record?userId=${userId}&date=${date}`);
    axios
      .get(`${backend_url}/record?userId=${userId}&date=${date}`)
      .then((res) => setLogs(res.data))
      .catch((res) => console.error(res));
  }, []);

  return (
    <>
      {logs?.map(() => (
        <p>1</p>
      ))}
      <Row time={date} content={"CONTENT"} />
    </>
  );
}

export default RowFactory;
