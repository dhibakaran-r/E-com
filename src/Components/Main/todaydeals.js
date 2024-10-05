import React from "react";
import React, { useState } from "react";
import "../../css/Style.css";
import "./Products.css";
import img1 from "../../images/shoes.webp";
import img2 from "../../images/tshirt.webp";
import img3 from "../../images/decration.webp";
import img4 from "../../images/earpad.webp";
import Products from "./Products";

const todaydealDatas = [
  {
    category: "shoes",
    deals: "Men's Sports Shoes",
    pic: img1,
    price: "Min 70% Off",
  },

  {
    category: "tshirt",
    deals: "Men's T-Shirts",
    pic: img2,
    price: "Special Offers Today",
  },

  {
    category: "wall",
    deals: "Wall Decor Items",
    pic: img3,
    price: "Upto 80% Off",
  },

  {
    category: "earbuds",
    deals: "Headphones and Earbuds",
    pic: img4,
    price: "Min 50% Off",
  },
];

export default function topdeals() {
  return (
    <>
      <Products todaydealDatas={todaydealDatas} />
    </>
  );
}
