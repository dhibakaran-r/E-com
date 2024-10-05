import React from "react";
import "./css/App.css";
import error from "./images/404/404-2.jpg";
import { useNavigate } from "react-router-dom";
export default function () {
  const back = useNavigate();
  return (
    <div className="error404">
      <img src={error} alt="404" className="img404" />
      <div className="back-btn">
        <button
          onClick={() => {
            back("/");
          }}
          className="btn"
        >
          Back To Home Page
        </button>
      </div>
    </div>
  );
}
