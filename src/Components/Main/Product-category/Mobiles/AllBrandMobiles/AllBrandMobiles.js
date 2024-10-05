import React, { useState } from "react";
// import "../../../../../Style.css";
import "./AllBrandMobiles.css";
import img1 from "../../../../../images/mobiles/apple1.webp";
import img2 from "../../../../../images/mobiles/samsung1.webp";
import img3 from "../../../../../images/mobiles/realme1.webp";
import img4 from "../../../../../images/mobiles/poco1.webp";
import img5 from "../../../../../images/mobiles/redmi1.webp";
import img6 from "../../../../../images/mobiles/vivo1.webp";
import img7 from "../../../../../images/mobiles/oppo1.webp";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AllBrandCard from "./AllBrandCard";

const AllBrandMobiles = () => {
  const SD = [
    {
      category: "drimmer",
      deals: "Top Selling Drimmers",
      pic: img1,
      price: "From RS : 499",
    },

    {
      category: "camera",
      deals: "Top Mirrorless Cameras",
      pic: img2,
      price: "From RS : 60,000",
    },

    {
      category: "watche",
      deals: "Best Deals On Sonata Watches",
      pic: img3,
      price: "From RS : 599",
    },

    {
      category: "bags",
      deals: "Laptop and College Bags",
      pic: img4,
      price: "From RS 449",
    },

    {
      category: "camera",
      deals: "Top Mirrorless Cameras",
      pic: img5,
      price: "From RS : 60,000",
    },

    {
      category: "watche",
      deals: "Best Deals On Sonata Watches",
      pic: img6,
      price: "From RS : 599",
    },

    {
      category: "bags",
      deals: "Laptop and College Bags",
      pic: img7,
      price: "From RS 449",
    },
  ];
  // const [SD] = useState(SmartphoneDatas);
  return <AllBrandCard SD={SD} />;
};

export default AllBrandMobiles;
