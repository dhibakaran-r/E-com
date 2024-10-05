import React, { useEffect, useMemo, useState } from "react";
// import apple from "../json/apple.json";
import "./Cases.css";
// import mobiles from "../../../../../../json/models.json";
// import spec from "../../../../../../json/specs.json";
import { useSelector } from "react-redux";
import ProductListCase from "../../../../../ProductShowcase/ProductListCase";

const Products = () => {
  const [dealcardData, setDealcardData] = useState([]);

  useMemo(async () => {
    const response1 = await fetch("/json/models.json");
    const mobiles = await response1.json();
    setDealcardData(mobiles);

    // const response2 = await fetch("/json/specs.json");
    // const specs = await response2.json();
    // setSpecData(specs);
  }, []);

  const sdata = useSelector((state) => state.search.searchValue);
  console.log(sdata);
  // useEffect(() => {
  //   let filterDatas = [...dealcardData];
  //   if (sdata) {
  //     filterDatas = dealcardData.filter((products) => {
  //       if (products.model.toLowerCase().includes(sdata.toLowerCase())) {
  //         return products;
  //       }
  //     });
  //   }
  // });

  return <ProductListCase ShowcaseData={dealcardData} />;
};

export default Products;
