
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import '../components/imate/imate.css';
import WorkInside from "../components/home/hiring/workInside";
import Provider from "../context/provider";
import NewImate from "../components/imate/newImate";
import PersonRegister from "../components/person/personRegister";
import AdminPanel from "../components/administration/adminPanel";
import ImateConsult from "../components/imate/imatesList";
import EditeImate from "../components/controller/editImate";
import Prison from "../components/institution/prision";
import { PrisonProvider } from "../components/institution/prisionContext";
import PersonList from "../components/person/personList";
import Addresses from "../components/address/address";

const Routess = () => {
   return(
    
           <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/personRegister" element={ < PersonRegister/>} />
              <Route path="/adminPanel" element={ < AdminPanel/>} />
              <Route path="/person" element={ < PersonList/>} />
              <Route path="/imatesList" element={ < ImateConsult/>} />
             <Route path="/addresses" element={ < Addresses/>} />


              <Route path="/prisions" element={ 
                
                <PrisonProvider>
                <Prison />
               </PrisonProvider>  }    />
    
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
