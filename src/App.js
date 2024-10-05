import React from "react";
import { useState } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/App.css";
import Login from "./Components/Login/Login";
import Home from "./Home";
import PageNotFount from "./PageNotFount";
import Mobiles from "./Components/Main/Product-category/Mobiles/Mobiles";
import UserData from "./Components/Main/Product-category/Electronics/Users";
import Electronic from "./Components/Main/Product-category/Electronics/Electronic";
import Furnitures from "./Components/Main/Product-category/Furnitures/Furnitures";
import Appliances from "./Components/Main/Product-category/Appliances/Appliances";
import Fashion from "./Components/Main/Product-category/Fashion/Fashion";
import BeautyProducts from "./Components/Main/Product-category/Beauty Products/BeautyProducts";
import GlassesFraimes from "./Components/Main/Product-category/Glasses & Fraimes/GlassesFraimes";
import Toys from "./Components/Main/Product-category/Toys/Toys";
import Apple from "./Components/Main/Product-category/Mobiles/AllBrandMobiles/Brands/AllBrand/Apple";
import ProductDetailsCard from "./Components/Main/ProductShowcase/ProductDetailsCard";
import { Provider } from "react-redux";
import { store } from "./store/store";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/Mobiles" element={<Mobiles />}></Route>
//           <Route path="/Electronics" element={<UserData />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="*" element={<PageNotFount />}></Route>
//         </Routes>
//       </Router>
//       ;
//       {/* <Navigation />
//       <Products /> */}
//       {/* <Login /> */}
//     </div>
//   );
// }

// export default App;

function App() {
  const navigator = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/mobiles", element: <Mobiles /> },
    { path: "/mobiles/:mobile", element: <Apple /> },
    { path: "/electronics", element: <Electronic /> },
    { path: "/furnitures", element: <Furnitures /> },
    { path: "/appliances", element: <Appliances /> },
    { path: "/fashion", element: <Fashion /> },
    { path: "/beautyProducts", element: <BeautyProducts /> },
    { path: "/glassesFraimes", element: <GlassesFraimes /> },
    { path: "/toys", element: <Toys /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <PageNotFount /> },
    { path: "productdetails", element: <ProductDetailsCard /> },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={navigator} />
      </div>
    </Provider>
  );
}

export default App;
