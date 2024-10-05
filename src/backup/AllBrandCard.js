import React, { useState } from "react";
// // import "../../../../../Style.css";
import "./AllBrandMobiles.css";
import img1 from "../../../../../images/mobiles/apple1.webp";
import img2 from "../../../../../images/mobiles/samsung1.webp";
import img3 from "../../../../../images/mobiles/realme1.webp";
import img4 from "../../../../../images/mobiles/poco1.webp";
import img5 from "../../../../../images/mobiles/redmi1.webp";
import img6 from "../../../../../images/mobiles/vivo1.webp";
import img7 from "../../../../../images/mobiles/oppo1.webp";
import img8 from "../../../../../images/mobiles/google1.webp";
// import img2 from "../../../../../images/mobiles/samsung1.webp";
// import img3 from "../../../../../images/mobiles/realme1.webp";

export default function AllBrandCard() {
  const smartphoneDatas = [
    {
      category: "smartphone",
      brand: "apple",
      deals: "Top Selling Drimmers",
      pic: img1,
      price: "From RS : 499",
    },

    {
      category: "smartphone",
      brand: "samsung",
      deals: "Top Mirrorless Cameras",
      pic: img2,
      price: "From RS : 60,000",
    },

    {
      category: "smartphone",
      brand: "realme",
      deals: "Best Deals On Sonata Watches",
      pic: img3,
      price: "From RS : 599",
    },

    {
      category: "smartphone",
      brand: "poco",
      deals: "Laptop and College Bags",
      pic: img4,
      price: "From RS 449",
    },

    {
      category: "smartphone",
      brand: "redmi",
      deals: "Top Mirrorless Cameras",
      pic: img5,
      price: "From RS : 60,000",
    },

    {
      category: "smartphone",
      deals: "Best Deals On Sonata Watches",
      brand: "vivo",
      pic: img6,
      price: "From RS : 599",
    },

    {
      category: "smartphone",
      deals: "Laptop and College Bags",
      brand: "oppo",
      pic: img7,
      price: "From RS 449",
    },

    {
      category: "smartphone",
      deals: "Laptop and College Bags",
      brand: "google",
      pic: img8,
      price: "From RS 449",
    },
  ];

  return (
    <>
      {/* {smartphoneDatas.map((Md) => ( */}
      <section class="container-body">
        {smartphoneDatas.map((MD) => (
          <div class="card-1 cards">
            <div class="pic">
              <img src={MD.pic} alt="image" />
            </div>

            <h2>{MD.brand}</h2>

            <h5>{MD.deals}</h5>

            <p>{MD.price}</p>
          </div>
        ))}
      </section>
      {/* ))} */}
    </>
  );
}
