import React from "react";
import Navbar from "../Components/Navbar";
import Join from "../Pages/Signup";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
import Login from "../Pages/Login";

import { Route, Routes } from "react-router-dom";
const Allroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Join />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
