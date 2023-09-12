import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Imate from "../components/imate/imate";
import ImatePersonData from "../components/imate/imatePersonData";
import ImateData from "../components/imate/imateData";
import '../components/imate/imate.css';

const Routess = () => {
   return(
    
           <Routes>
            <Route path="/imate" element={<Imate />} />
            <Route path="/imatePerson/:index" element={
                <ImateData>
                <ImatePersonData />
                </ImateData>
            } />

           <Route path="/" element={<Home />} />

           </Routes>
    
   )
}

export default Routess;

//<Route path="/Filter" element={<Filter />} />
    //     <Route component = { ImateCard }  path="/imates" />
