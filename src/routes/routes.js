import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Imate from "../components/imate/imate";

const Routess = () => {
   return(
    
           <Routes>
            <Route path="/imate" element={<Imate />} />
      
           <Route path="/" element={<Home />} />

           </Routes>
    
   )
}

export default Routess;

//<Route path="/Filter" element={<Filter />} />
    //     <Route component = { ImateCard }  path="/imates" />
