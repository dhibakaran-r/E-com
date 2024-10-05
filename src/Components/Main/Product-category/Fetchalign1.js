// import React, { useEffect, useState } from "react";
// // import "../../../style.css";
// // import "../../Product-category/Mobiles/AllBrandMobiles/AllBrandMobiles.css";
// // import img1 from "../../../../images/mobiles/apple1.webp";
// // import img2 from "../../../../images/mobiles/samsung1.webp";
// // import img3 from "../../../../images/mobiles/realme1.webp";
// // import img4 from "../../../../images/mobiles/poco1.webp";
// // import img5 from "../../../../images/mobiles/redmi1.webp";
// // import img6 from "../../../../images/mobiles/vivo1.webp";
// // import img7 from "../../../../images/mobiles/oppo1.webp";
// // import img8 from "../../../../images/mobiles/google1.webp";
// // import img2 from "../../../../../images/mobiles/samsung1.webp";
// // import img3 from "../../../../../images/mobiles/realme1.webp";
// import { LiaRupeeSignSolid } from "react-icons/lia";
// import { NavLink } from "react-router-dom";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";

// export default function Fetchalign1({ smartphoneDatas }) {
//   return (
//     <>
//       {/* {smartphoneDatas.map((Md) => ( */}
//       <NavLink to="/">
//         <span className="backward">
//           <MdOutlineKeyboardBackspace />
//         </span>
//       </NavLink>
//       <section class="container-body">
//         {smartphoneDatas.map((MD) => (
//           <>
//             <div className="brand-block">
//               <h2 className="brand" id={MD.brand}>
//                 {MD.brand} {MD.category}
//               </h2>
//               <NavLink to={MD.url} className="all-button">
//                 view all
//               </NavLink>
//             </div>
//             <NavLink to={MD.url / MD.model}>
//               <div class="card-1 cards">
//                 <div class="pic">
//                   <img src={MD.pic} alt="image" />
//                 </div>
//                 <div className="details-block">
//                   <h1 className="model">{MD.model}</h1>
//                   <h5 className="highlight">{MD.highlights}</h5>
//                   <p className="price-block">
//                     <p className="offer-price">
//                       <span>
//                         <LiaRupeeSignSolid />
//                       </span>{" "}
//                       <span className="rs">{MD.price}</span>
//                     </p>
//                     <p className="mrp">
//                       <span>
//                         <LiaRupeeSignSolid />
//                       </span>{" "}
//                       <span className="rs">{MD.mrp}</span>
//                     </p>
//                   </p>
//                   <p className="emi">{MD.emi}</p>
//                 </div>
//               </div>
//             </NavLink>
//           </>
//         ))}
//       </section>
//       {/* ))} */}
//     </>
//   );
// }
