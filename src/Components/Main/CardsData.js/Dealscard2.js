import React, { useState, useEffect } from "react";
import "../../../css/Style.css";
// import "../Products.css";
// import "./Products2.css";
import img1 from "../../../images/gymmet.webp";
import img2 from "../../../images/workout.webp";
import img3 from "../../../images/cricset.webp";
import img4 from "../../../images/carrom.webp";
import img5 from "../../../images/wt.webp";
import img6 from "../../../images/lip.webp";
import img7 from "../../../images/jwell.webp";
import img8 from "../../../images/wfw.webp";
import img9 from "../../../images/lap.webp";
import img10 from "../../../images/headset.webp";
import img11 from "../../../images/pktlight.webp";
import img12 from "../../../images/smrtwarch.webp";
import ProductShowcase2 from "../ProductShowcase/ProductShowcase2";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Dealscard2 = () => {
  const [dealcardData, setDealcardData] = useState([]);
  const dealDatas1 = [
    {
      category: "gymkits",
      deals: "Fitness Kit",
      pic: img1,
      price: "Upto 80% Off",
    },

    {
      category: "gymkits",
      deals: "Fitness Bench",
      pic: img2,
      price: "Upto 80% Off",
    },

    {
      category: "sportskits",
      deals: "Cricket Kits",
      pic: img3,
      price: "Min 40% Off",
    },

    {
      category: "sportskits",
      deals: "Carrom",
      pic: img4,
      price: "Upto 70% Off",
    },
  ];

  const dealDatas2 = [
    {
      category: "trimmer",
      deals: "Facial Trimmer",
      pic: img5,
      price: "Min 70% Off",
    },

    {
      category: "lipstick",
      deals: "Lips",
      pic: img6,
      price: "Min 50% Off",
    },

    {
      category: "jewells",
      deals: "Jewellery",
      pic: img7,
      price: "Min 60% Off",
    },

    {
      category: "womenfootwears",
      deals: "Women Footwears",
      pic: img8,
      price: "Upto 40% Off",
    },
  ];

  const dealDatas3 = [
    {
      category: "laptop",
      deals: "Gaming Laptops",
      pic: img9,
      price: "Min 50% Off",
    },

    {
      category: "headset",
      deals: "Headset",
      pic: img10,
      price: "Min 50% Off",
    },

    {
      category: "light",
      deals: "Utility Lighting",
      pic: img11,
      price: "Min 50% Off",
    },

    {
      category: "smartband",
      deals: "Smart Bands",
      pic: img12,
      price: "Min 40% Off",
    },
  ];

  const dealcardDatas = [
    {
      title: "Sports & Fitness Equipments",
      plan: dealDatas1,
      id: "sportfit",
      color: "green",
    },
    {
      title: "Women's Kits",
      plan: dealDatas2,
      id: "womens",
      color: "green",
    },
    {
      title: "Top Electronics & Appliances",
      plan: dealDatas3,
      id: "elec",
      color: "green",
    },
  ];

  useEffect(() => {
    return setDealcardData(dealcardDatas);
  }, []);

  return <ProductShowcase2 ShowcaseData={dealcardData} />;
};

export default Dealscard2;
