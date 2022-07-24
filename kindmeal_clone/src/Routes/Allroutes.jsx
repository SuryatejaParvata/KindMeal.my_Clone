import React from "react";
import Navbar from "../Components/Navbar";
import Join from "../Pages/Signup";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
import Login from "../Pages/Login";

import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Help from "../Pages/Help";
import Mealdeals from "../Pages/Mealdeals";
import Coupon from "../Pages/Coupon";
const Allroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Join />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/help" element={<Help />} />
        <Route path="/deals" element={<Mealdeals />} />
        <Route path="/coupon" element={<Coupon/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default Allroutes;
