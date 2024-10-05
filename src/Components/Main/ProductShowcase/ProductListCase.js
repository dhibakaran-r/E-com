import React, { useState } from "react";
import "../../../css/Style.css";
import "../../../css/ProductListCase.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProDetails } from "../../../store/slices/prodetailSlice";
// import { MdOutlineCurrencyRupee } from "react-icons/md";

export default function ProductListCase({ ShowcaseData }) {
  // const [prodetails, setprodetails] = useState();
  const dispatch = useDispatch();

  const proDetails = (value) => {
    if (value) {
      dispatch(addProDetails(value));
      console.log(value);
    }
    // alert("link");
    // e.stopPropagation();
  };
  // console.log(prodetails);
  const whishList = (e) => {
    // alert("list");
    e.stopPropagation();
  };
  return (
    <>
      <NavLink to="/" className="goback">
        <span>
          <MdOutlineKeyboardBackspace />
        </span>
      </NavLink>
      <section className="List-container">
        {ShowcaseData.map((ShowcaseData) => (
          //   <section className="section product-container" id={ShowcaseData.id}>
          <div className="product list-product" id={ShowcaseData.id}>
            <NavLink
              // to={{
              //   pathname: "/ProductDetails",
              //   state: { value: ShowcaseData.model },
              // }}
              to={"/productdetails?value=" + ShowcaseData.model}
              className="content-block"
              // onChange={setprodetails(ShowcaseData.model)}
              onClick={() => {
                proDetails(ShowcaseData.model);
              }}
            >
              <div
                className="images product-image list-product-image"
                id={ShowcaseData.category}
              >
                <img
                  src={ShowcaseData.pic}
                  alt={ShowcaseData.category}
                  className="image"
                />
                <button className="wishlist-ic" onClick={whishList}>
                  <FaRegHeart />
                </button>
              </div>
              <div className="deals">
                <h2 className="tag">{ShowcaseData.model}</h2>

                <p className="price-block">
                  <p className="offer-price">
                    <span>
                      <LiaRupeeSignSolid />
                    </span>
                    {""}
                    <span className="offrt">{ShowcaseData.price}</span>
                  </p>
                  <p className="mrp">
                    <span>
                      <LiaRupeeSignSolid />
                    </span>
                    {""}
                    <span className="mrprt">{ShowcaseData.mrp}</span>
                  </p>
                  <p className="off">
                    <span className="offer">{ShowcaseData.offer}</span>
                  </p>
                </p>
              </div>
            </NavLink>
          </div>
          //   </section>
        ))}
      </section>
    </>
  );
}
