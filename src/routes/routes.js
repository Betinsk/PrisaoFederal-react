import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import ImatePersonData from "../components/imate/imatePersonData";
import '../components/imate/imate.css';
import WorkInside from "../components/home/hiring/workInside";
import Provider from "../context/provider";
import NewImate from "../components/imate/newImate";
import PersonRegister from "../components/visitor/personRegister";
import AdminPanel from "../components/administration/adminPanel";
import PersonConsult from "../components/visitor/personConsult";
import ImateConsult from "../components/imate/imatesList";
import EditeImate from "../components/controller/editImate";
import Prision from "../components/institution/prision";

const Routess = () => {
   return(
    
           <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/personRegister" element={ < PersonRegister/>} />
              <Route path="/adminPanel" element={ < AdminPanel/>} />
              <Route path="/personConsult" element={ < PersonConsult/>} />
              <Route path="/imatesList" element={ < ImateConsult/>} />

              <Route path="/prisions" element={ < Prision/>} />


            <Route path="/imate" element={
                <Provider>
                <NewImate />
                </Provider>
            } />
            <Route path="/imateEdit/:index" element={
                <Provider>
                <EditeImate />
                </Provider>
            } />

           <Route path="/hiring" element={<WorkInside />} />

           </Routes>
    
   )
}

export default Routess;

//<Route path="/Filter" element={<Filter />} />
    //     <Route component = { ImateCard }  path="/imates" />
