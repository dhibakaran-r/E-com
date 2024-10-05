import React from "react";
import "../../../css/Style.css";
import "../../../css/ProductShowcase3.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function ProductShowcase3({ ShowcaseData }) {
  return (
    <>
      <NavLink to="/" className="backward">
        <span>
          <MdOutlineKeyboardBackspace />
        </span>
      </NavLink>
      <section class="container-body">
        {ShowcaseData.map((ShowcaseData) => (
          <>
            <div className="brand-block">
              <h2 className="brand" id={ShowcaseData.brand}>
                {ShowcaseData.brand} {ShowcaseData.category}
              </h2>
              <Link to={ShowcaseData.url} className="all-button">
                view all
              </Link>
            </div>
            <NavLink to={ShowcaseData.model}>
              <div class="card-1 cards">
                <div class="pic">
                  <img src={ShowcaseData.pic} alt="image" />
                </div>
                <div className="details-block">
                  <h1 className="model">{ShowcaseData.model}</h1>
                  <h5 className="highlight">{ShowcaseData.highlights}</h5>
                  <p className="price-block">
                    <p className="offer-price">
                      <span>
                        <LiaRupeeSignSolid />
                      </span>{" "}
                      <span className="rs">{ShowcaseData.price}</span>
                    </p>
                    <p className="mrp">
                      <span>
                        <LiaRupeeSignSolid />
                      </span>{" "}
                      <span className="rs">{ShowcaseData.mrp}</span>
                    </p>
                  </p>
                  <p className="emi">{ShowcaseData.emi}</p>
                </div>
              </div>
            </NavLink>
          </>
        ))}
      </section>
    </>
  );
}
