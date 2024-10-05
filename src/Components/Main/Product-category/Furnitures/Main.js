import React, { useState } from "react";
import MyContext from "./MyContext";
import ChildComponent from "./ChildComponent";
import "./Main.css";

function Main() {
  // const [sharedValue, setSharedValue] = useState("");
  // const [filteredData, setFilteredData] = useState([]);
  // const list = [
  //   { name: "arun" },
  //   { name: "bala" },
  //   { name: "deva" },
  //   { name: "guru" },
  // ];
  // const getVal = (e) => {
  //   const value = e.target.value;
  //   const filtered = list.filter((item) =>
  //     item.name.toLowerCase().includes(sharedValue.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  //   setSharedValue(value);
  // };
  // return (
  //   <>
  //     <input
  //       type="text"
  //       className="text"
  //       value={sharedValue}
  //       onChange={getVal}
  //     />
  //     <div className="test">
  //       {/* <p>{sharedValue}</p> */}
  //       <ul>
  //         {filteredData.map((item) => {
  //           <li>{item.name}</li>;
  //         })}
  //       </ul>
  //     </div>
  //     {/* <MyContext.Provider value={{ sharedValue, filteredData }}>
  //       <ChildComponent />
  //     </MyContext.Provider> */}
  //   </>
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Sample data
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter the array based on the input value
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="test">
      <input
        type="text"
        value=""
        onChange={handleInputChange}
        placeholder="Filter by name"
      />
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Main;
