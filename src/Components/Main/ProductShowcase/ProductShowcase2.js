import React from "react";
import "../../../css/Style.css";
import "../../../css/ProductShowcase2.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ProductShowcase2({ ShowcaseData }) {
  return (
    // <>
    <div className="product-2-card-section">
      {ShowcaseData.map((ShowcaseData) => (
        <section className="section product-2-container" id={ShowcaseData.id}>
          <div className="heading-2 title-2-block">
            <h2 className="title-2">{ShowcaseData.title}</h2>
          </div>

          <div className="product-2">
            {ShowcaseData.plan.map((caseData) => (
              <div className="images-2 product-2-image" id={caseData.category}>
                <img
                  src={caseData.pic}
                  alt={caseData.category}
                  className="image-2"
                />
                <div className="deals-2">
                  <h2 className="tag-2">{caseData.deals}</h2>
                  <NavLink to={caseData.category}>
                    <span className="price-2 color" id={ShowcaseData.color}>
                      <span className="pricetag">{caseData.price}</span>
                      <span className="moreic-2" id={ShowcaseData.color}>
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
    </div>
    // </>
  );
}
