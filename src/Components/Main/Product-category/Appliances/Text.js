import React, { useEffect, useState } from "react";
import Usecontext from "../../../Usecontext";
import "./Appliances.css";
import Event from "./Event";

export default function Text() {
  const [text, setText] = useState("hii");
  // const val = [
  //   {
  //     name: "naruto",
  //   },
  //   {
  //     name: "itachi",
  //   },
  // ];
  // useEffect(()=>{
  //   return setText=val;
  // })
  return (
    <>
      <input
        type="text"
        className="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Usecontext.Provider value={{ text, setText }}>
        <Event />
      </Usecontext.Provider>
    </>
  );
}
