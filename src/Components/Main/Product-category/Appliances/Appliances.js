import Navigation from "../../../Navigation/Navigation";
import Event from "./Event";
import "./Appliances.css";
import Text from "./Text";
const Appliances = () => {
  const div = (e) => {
    // e.stopPropagation();
    alert("div");
  };
  const msg = "Hellow";
  return (
    <>
      <Navigation />
      <div onClick={div} className="event">
        <Event />
        <Text />
      </div>
    </>
  );
};

export default Appliances;

// import React, { useState } from 'react';
// import MyContext from './MyContext';
// import ChildComponent from './ChildComponent';

// function App() {
//   const [sharedValue, setSharedValue] = useState("Hello from Context!");

//   return (
//     <MyContext.Provider value={{ sharedValue, setSharedValue }}>
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// }

// export default App;

// import React, { useContext } from 'react';
// import MyContext from './MyContext';

// function ChildComponent() {
//   const { sharedValue, setSharedValue } = useContext(MyContext);

//   return (
//     <div>
//       <p>{sharedValue}</p>
//       {/* Example of updating the shared value */}
//       <button onClick={() => setSharedValue("Updated Value!")}>
//         Update Value
//       </button>
//     </div>
//   );
// }

// export default ChildComponent;
