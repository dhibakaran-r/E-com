import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import mobiles from "./json/models.json";
// import specs from "./json/specs.json";
import "../../../css/Style.css";
import "../../../css/ProductDetailsCard.css";
import { FaRegHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { HiShoppingCart } from "react-icons/hi";
import { HiCurrencyRupee } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import SecNavigation from "../../Navigation/SecNavigation";
import { useSelector } from "react-redux";

export default function ProductDetailsCard() {
  const [mobileData, setMobileData] = useState([]);
  const [specData, setSpecData] = useState([]);
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const value = queryParams.get("value");
  // const data = queryParams.get("data");
  // console.log(data);
  // console.log(value);

  useMemo(async () => {
    // Assuming your JSON file is named `example.json` and located in the `public` folder
    const response1 = await fetch("/json/models.json");
    const mobiles = await response1.json();
    setMobileData(mobiles);

    const response2 = await fetch("/json/specs.json");
    const specs = await response2.json();
    setSpecData(specs);
  }, []);
  // useEffect(() => {
  //   setMobileData(mobiles);
  //   setSpecData(specs);
  // }, []);
  // console.log(mobileData);
  // console.log(specData);
  const AllDatas = mobileData.map((mobile) => {
    const Allspecs = specData.find((spec) => spec.id === mobile.id);
    return { ...mobile, ...Allspecs };
  });
  const sdata = useSelector((state) => state.search.searchValue);
  console.log(sdata);
  // const prodata = useSelector((state) => state.details.productID);
  // const prodata = "Apple iPhone 15 (Green, 128 GB)";
  // console.log(prodata);
  return (
    <>
      <SecNavigation />
      <NavLink to="/" className="goback">
        <span>
          <MdOutlineKeyboardBackspace />
        </span>
      </NavLink>
      <section className="productdetails-container">
        {/* {AllDatas.map((pData) => {
          if (prodata == pData.model) {
            console.log(pData.model);
          }
        })} */}
        {AllDatas.map((productDatas) => (
          // if (prodata == productDatas.model) {
          // if (prodet == { productDatas.model }) {
          <div className="productdetails">
            <div className="product-block-1">
              <div className="product-image-block">
                <span className="products-image">
                  <img src={productDatas.pic} alt="products-image" />
                </span>
              </div>
              <div className="product-buttons">
                <button className="card button-style">
                  <HiShoppingCart className="icon-style" /> add to cart
                </button>
                <button className="buy button-style">
                  <HiCurrencyRupee className="icon-style" /> buy now
                </button>
              </div>
            </div>
            <div className="product-detail">
              <div className="product-name-block">
                <h1 className="product-name">{productDatas.model}</h1>
              </div>
              <div className="product-price-block">
                <div className="offer-price-block">
                  <span>
                    <LiaRupeeSignSolid />
                  </span>
                  {""}
                  <span className="off-price">{productDatas.price}</span>
                </div>
                <div className="max-price-block">
                  <span>
                    <LiaRupeeSignSolid />
                  </span>
                  {""}
                  <span className="max-price">{productDatas.mrp}</span>
                </div>
                <div className="discount-block">
                  <span className="discount">{productDatas.offer}</span>
                </div>
              </div>
              <div className="product-base-block">
                <div className="product-highlights-block container-block-style">
                  <p className="highlight-title title-style">highlights</p>
                  <ul className="highlight-list">
                    <li>{productDatas.internal}</li>
                    <li>{productDatas.displaysize}</li>
                    <li>
                      {productDatas.primarycamera}|
                      {productDatas.secondarycamera}
                    </li>
                    <li>
                      {productDatas.processortype}|{productDatas.processorcore}
                    </li>
                  </ul>
                </div>
                <div className="paymentoption-block container-block-style">
                  <p className="payment-title title-style">payment options</p>
                  <ul className="payment-list">
                    <li>{productDatas.emi}</li>
                    <li>cash on delivery</li>
                    <li>net banking & credit/ debit/ ATM card</li>
                  </ul>
                </div>
                <div className="protuct-description-block">
                  <p className="description-title title-style">description</p>
                  <p className="description-block">
                    {productDatas.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          // }
        ))}
      </section>
    </>
  );
}
