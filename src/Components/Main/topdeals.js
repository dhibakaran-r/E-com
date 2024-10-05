import React from "react";
import React, { useState } from "react";
import "../../css/Style.css";
import "./Products.css";
import img1 from "../../images/canon.webp";
import img2 from "../../images/philips1.webp";
import img3 from "../../images/bags.webp";
import img4 from "../../images/watches.webp";
import Products from "./Products";

const topdealDatas = [
  {
    category: "drimmer",
    deals: "Top Selling Drimmers",
    pic: img2,
    price: "From RS : 499",
  },

  {
    category: "camera",
    deals: "Top Mirrorless Cameras",
    pic: img1,
    price: "From RS : 60,000",
  },

  {
    category: "watche",
    deals: "Best Deals On Sonata Watches",
    pic: img4,
    price: "From RS : 599",
  },

  {
    category: "bags",
    deals: "Laptop and College Bags",
    pic: img3,
    price: "From RS : 449",
  },
];

export default function todaydeals() {
  return (
    <>
      <Products topdealDatas={topdealDatas} />
    </>
  );
}
