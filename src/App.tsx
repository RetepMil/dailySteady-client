import { useState } from "react";
import NewRow from "./component/NewRow";
import RowFactory from "./component/RowFactory";
import Menu from "./component/Menu";

function App() {
  return (
    <div className="p-5">
      <Menu />
      <RowFactory />
      <NewRow />
    </div>
  );
}

export default App;
