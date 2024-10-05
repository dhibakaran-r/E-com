import { useContext } from "react";
import React from "react";
import "./Appliances.css";
import Usecontext from "../../../Usecontext";
export default function Event(props) {
  const btn = (e) => {
    e.stopPropagation();
    alert("btn");
    console.log(e);
    setText("click");
  };
  const { text, setText } = useContext(Usecontext);
  return (
    <>
      <button onClick={btn} className="event-btn">
        click
      </button>
      <div>
        {text}
        {/* {props.msg} */}
      </div>
      {/* {props.k.map((e) => {
        <div>{e.name}</div>;
      })} */}
    </>
  );
}
