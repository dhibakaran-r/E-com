import React from "react";
import "./css/App.css";
import Navigation from "./Components/Navigation/Navigation";
import ProductCards from "./Components/Main/ProductCards";

function Home({ setSearch }) {
  return (
    <>
      <Navigation setSearch={setSearch} />
      <ProductCards />
    </>
  );
}

export default Home;
