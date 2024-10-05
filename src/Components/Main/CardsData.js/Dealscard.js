import React, { useState, useEffect } from "react";
import "../../../css/Style.css";
import img1 from "../../../images/canon.webp";
import img2 from "../../../images/philips1.webp";
import img3 from "../../../images/bags.webp";
import img4 from "../../../images/watches.webp";
import img5 from "../../../images/shoes.webp";
import img6 from "../../../images/tshirt.webp";
import img7 from "../../../images/decration.webp";
import img8 from "../../../images/earpad.webp";
import img9 from "../../../images/intstw.webp";
import img10 from "../../../images/wm.webp";
import img11 from "../../../images/sonytv2.webp";
import img12 from "../../../images/water.webp";
import ProductShowcase1 from "../ProductShowcase/ProductShowcase1";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Dealscard = () => {
  const [dealcardData, setDealcardData] = useState([]);
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
      price: "From RS 449",
    },
  ];

  const todaydealDatas = [
    {
      category: "shoes",
      deals: "Men's Sports Shoes",
      pic: img5,
      price: "Min 70% Off",
    },

    {
      category: "tshirt",
      deals: "Men's T-Shirts",
      pic: img6,
      price: "Special Offers Today",
    },

    {
      category: "wall",
      deals: "Wall Decor Items",
      pic: img7,
      price: "Upto 80% Off",
    },

    {
      category: "earbuds",
      deals: "Headphones and Earbuds",
      pic: img8,
      price: "Min 50% Off",
    },
  ];

  const applincedealDatas = [
    {
      category: "induction",
      deals: "Induction Cooktops",
      pic: img9,
      price: "From RS 2,599",
    },

    {
      category: "washingmachine",
      deals: "Front Load Washing",
      pic: img10,
      price: "Buy Now",
    },

    {
      category: "tv",
      deals: "Sony TV 43 inch",
      pic: img11,
      price: "From RS 37,990",
    },

    {
      category: "waterpurifier",
      deals: "Water Purifiers",
      pic: img12,
      price: "From 4,999",
    },
  ];

  const dealcardDatas = [
    {
      title: "Top Deals",
      plan: topdealDatas,
      id: "top",
      color: "black",
    },
    {
      title: "Today Offers",
      plan: todaydealDatas,
      id: "today",
      color: "green",
    },
    {
      title: "Top Deals On tv & appliances",
      plan: applincedealDatas,
      id: "applince",
      color: "black",
    },
  ];
  useEffect(() => {
    return setDealcardData(dealcardDatas);
  }, []);

  return <ProductShowcase1 ShowcaseData={dealcardData} />;
};

export default Dealscard;
