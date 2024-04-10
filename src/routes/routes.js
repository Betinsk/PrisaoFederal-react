import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import ImatePersonData from "../components/imate/imatePersonData";
import '../components/imate/imate.css';
import WorkInside from "../components/home/hiring/workInside";
import Provider from "../context/provider";
import NewImate from "../components/imate/newImate";
import PersonRegister from "../components/person/personRegister";

const Routess = () => {
   return(
    
           <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/personRegister" element={ < PersonRegister/>} />
            <Route path="/imate" element={
                <Provider>
                <NewImate />
                </Provider>
            } />
            <Route path="/imatePerson/:index" element={
                <Provider>
                <ImatePersonData />
                </Provider>
            } />

           <Route path="/hiring" element={<WorkInside />} />

           </Routes>
    
   )
}

export default Routess;

//<Route path="/Filter" element={<Filter />} />
    //     <Route component = { ImateCard }  path="/imates" />
