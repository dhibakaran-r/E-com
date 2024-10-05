// import React, { useEffect, useState } from "react";
// // import "../../../style.css";
// import "../../Product-category/Mobiles/AllBrandMobiles/AllBrandMobiles.css";
// import img1 from "../../../../images/mobiles/apple1.webp";
// import img2 from "../../../../images/mobiles/samsung1.webp";
// import img3 from "../../../../images/mobiles/realme1.webp";
// import img4 from "../../../../images/mobiles/poco1.webp";
// import img5 from "../../../../images/mobiles/redmi1.webp";
// import img6 from "../../../../images/mobiles/vivo1.webp";
// import img7 from "../../../../images/mobiles/oppo1.webp";
// import img8 from "../../../../images/mobiles/google1.webp";
// // import img2 from "../../../../../images/mobiles/samsung1.webp";
// // import img3 from "../../../../../images/mobiles/realme1.webp";
// import { LiaRupeeSignSolid } from "react-icons/lia";
// import { NavLink } from "react-router-dom";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import Fetchalign1 from "../Fetchalign1";
// import ProductShowcase3 from "../../ProductShowcase/ProductShowcase3";

// export default function Fdata() {
//   const [smartphoneDatas, setPhonedatas] = useState([]);
//   const phoneDatas = [
//     {
//       category: "smartphone",
//       brand: "apple",
//       model: "Apple iPhone 15 (Black, 128 GB)",
//       highlights:
//         "128 GB ROM 15.49 cm | (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
//       pic: img1,
//       price: "66,999",
//       mrp: "79,900",
//       emi: "EMI starting from ₹2,356/month",
//       url: "/Apple",
//     },

//     {
//       category: "smartphone",
//       brand: "samsung",
//       model: "SAMSUNG Galaxy A34 5G (8 GB RAM)",
//       highlights:
//         "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display | 48MP + 8MP + 5MP | 13MP Front Camera 5000 mAh Li-ion Battery Battery Dimensity 1080, Octa Core Processor",
//       pic: img2,
//       price: "29,499",
//       mrp: "39,499",
//       emi: "EMI starting from ₹1,038/month",
//       url: "/Samsung",
//     },

//     {
//       category: "smartphone",
//       brand: "realme",
//       model: "realme 11 5G (Glory Black, 128 GB)  (8 GB RAM)",
//       highlights:
//         "8 GB RAM | 128 GB ROM | Expandable Upto 2 TB 17.07 cm (6.72 inch) Full HD+ Display 108MP + 2MP | 16MP Front Camera 5000 mAh Battery Dimensity 6100+ Processor",
//       pic: img3,
//       price: "15,999",
//       mrp: "20,999",
//       emi: "EMI starting from ₹563/month",
//       url: "/Realme",
//     },

//     {
//       category: "smartphone",
//       brand: "poco",
//       model: "POCO C51 (Royal Blue, 64 GB)  (4 GB RAM)",
//       highlights:
//         "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB 16.56 cm (6.52 inch) HD+ Display 8MP Dual Rear Camera | 5MP Front Camera 5000 mAh Battery Helio G36 Processor",
//       pic: img4,
//       price: "5,499",
//       mrp: "9,999",
//       emi: "EMI starting from ₹194/month",
//       url: "/Poco",
//     },

//     {
//       category: "smartphone",
//       brand: "redmi",
//       model: "REDMI Note 13 Pro 5G (Coral Purple, 128 GB)  (8 GB RAM)",
//       highlights:
//         "8 GB RAM | 128 GB ROM 16.94 cm (6.67 inch) Display 200MP (OIS) + 8MP + 2MP | 16MP Front Camera 5100 mAh Battery 7s Gen 2 Mobile Platform 5G Processor",
//       pic: img5,
//       price: "25,999",
//       mrp: "28,900",
//       emi: "No cost EMI starting from ₹2,889/month",
//       url: "/Redmi",
//     },

//     {
//       category: "smartphone",
//       brand: "vivo",
//       model: "vivo T2x 5G (Glimmer Black, 128 GB)  (6 GB RAM)",
//       highlights:
//         "6 GB RAM | 128 GB ROM 16.71 cm (6.58 inch) Full HD+ Display 50MP + 2MP | 8MP Front Camera 5000 mAh Battery Mediatek Dimensity 6020 Processor",
//       pic: img6,
//       price: "12,999",
//       mrp: "18,999",
//       emi: "EMI starting from ₹458/month",
//       url: "/Vivo",
//     },

//     {
//       category: "smartphone",
//       brand: "oppo",
//       model: "OPPO Reno11 5G (Wave Green, 128 GB)  (8 GB RAM",
//       highlights:
//         "8 GB RAM | 128 GB ROM | Expandable Upto 2 TB 17.02 cm (6.7 inch) Full HD+ Display 50MP + 8MP + 32MP | 32MP Front Camera 5000 mAh Battery Mediatek Dimensity 7050 Processor",
//       pic: img7,
//       price: "29,999",
//       mrp: "39,999",
//       emi: "No cost EMI starting from ₹5,000/month",
//       url: "/Oppo",
//     },

//     {
//       category: "smartphone",
//       brand: "google",
//       model: "Google Pixel 7a (Snow, 128 GB)  (8 GB RAM)",
//       highlights:
//         "8 GB RAM | 128 GB ROM 15.49 cm (6.1 inch) Full HD+ Display 64MP (OIS) + 13MP | 13MP Front Camera 4300 mAh Battery Tensor G2 Processor",
//       pic: img8,
//       price: "38,999",
//       mrp: "43,999",
//       emi: "No cost EMI starting from ₹6,500/month",
//       url: "/Apple",
//     },
//   ];

//   useEffect(() => {
//     setPhonedatas(phoneDatas);
//   }, []);
//   return <ProductShowcase3 ShowcaseData={smartphoneDatas} />;
// }
