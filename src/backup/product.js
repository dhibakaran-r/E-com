import React, { useState } from "react";
import "../Style.css";
import "./Products.css";
import img1 from "../../images/canon.webp";
import img2 from "../../images/philips1.webp";
import img3 from "../../images/bags.webp";
import img4 from "../../images/watches.webp";
import img5 from "../../images/shoes.webp";
import img6 from "../../images/tshirt.webp";
import img7 from "../../images/decration.webp";
import img8 from "../../images/earpad.webp";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Dealscard from "./Dealscard";

const Products = () => {
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

  const pdatas = [
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
  ];
  const [Pdatas, setPdatas] = useState(pdatas);
  return <Dealscard Pdatas={Pdatas} />;
};

export default Products;

// import React, { useState } from "react";
// import "../Style.css";
// import "./Products.css";
// import Dealscard from "./Dealscard";

// const Products = ({ topdealDatas, todaydealDatas }) => {
//   // const Topdeals = { topdealDatas };
//   // const Todaydeals = { todaydealDatas };
//   const pdatas = [
//     {
//       title: "Top Deals",
//       plan: topdealDatas,
//       id: "top",
//       color: "black",
//     },
//     {
//       title: "Today Offers",
//       plan: todaydealDatas,
//       id: "today",
//       color: "green",
//     },
//   ];
//   const [Pdatas] = useState(pdatas);
//   return <Dealscard Pdatas={Pdatas} />;
// };

// export default Products;
