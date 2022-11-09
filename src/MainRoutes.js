import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import TurList from "./Components/TurList/TurList";
import AddTur from "./Components/AddTur/AddTur";
import EditTur from "./Components/EditTur/EditTur";
import TurView from "./Components/TurCard/TurView/TurView";
import Basket from "./Components/Basket/Basket";
import AddOrder from "./Components/AddOrder/AddOrder";
import AboutUs from "./Components/AboutUs/AboutUs";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />

      {/* tur crud */}
  
      <Route path="/list" element={<TurList />} />
      <Route path="/add" element={<AddTur />} />
      <Route path="/edit/:id" element={<EditTur />} />
      <Route path="/view/:id" element={<TurView />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/addorder/:price" element={<AddOrder />} />

      {/* <Route path="/details/:id" element={<ProductDetails />} /> */}
      {/* <Route path="/edit/:id" element={<EditProduct />} /> */}
    </Routes>
  );
};

export default MainRoutes;
