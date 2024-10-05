import React, { useContext, useEffect, useState } from "react";
import MyContext from "./MyContext";
import "./Main.css";

function ChildComponent() {
  const { sharedValue, filteredData } = useContext(MyContext);

  //   useEffect(() => {

  //   });

  return (
    <div className="test">
      {/* <p>{sharedValue}</p> */}
      <ul>
        {filteredData.map((item) => {
          <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ChildComponent;
