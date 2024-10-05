import React from "react";
import "../../../css/Style.css";
import "../../../css/ProductShowcase4.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { MdOutlineCurrencyRupee } from "react-icons/md";

export default function ProductShowcase4({ ShowcaseData }) {
  return (
    <>
      {ShowcaseData.map((ShowcaseData) => (
        <section className="section product-container" id={ShowcaseData.id}>
          <div className="heading title-block">
            <h2 className="title">{ShowcaseData.title}</h2>
          </div>

          <div className="product">
            {ShowcaseData.plan.map((caseData) => (
              <div className="images product-image" id={caseData.category}>
                <img
                  src={caseData.pic}
                  alt={caseData.category}
                  className="image"
                />
                <div className="deals">
                  <h2 className="tag">{caseData.deals}</h2>
                  <NavLink to={caseData.category}>
                    <span className="price color" id={ShowcaseData.color}>
                      <blockquote>{caseData.price}</blockquote>
                      <span className="moreic" id={ShowcaseData.color}>
                        <MdKeyboardDoubleArrowRight />
                      </span>
                    </span>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="see-more">
        <a href="#" className="more-btn">
          see more <GiArmoredBoomerang />{" "}
        </a>
      </div> */}
        </section>
      ))}
    </>
  );
}
