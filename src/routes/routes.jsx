
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
import AddressForm from "../components/address/AddressForm";
import PersonProfile from "../components/person/personPage";
import LoginPage from "../components/login/LoginPage";
import PrivateRoute from "../components/login/PrivateRoute";

const Routess = () => {
    return (
       
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/personRegister" element={<PersonRegister />} />

                <Route
                    path="/adminPanel"
                    element={
                        <PrivateRoute>
                            <AdminPanel />
                        </PrivateRoute>
                    }
                />
                <Route path="/person" element={<PersonList />} />
                <Route path="/person/:id" element={<PersonProfile />} />
                <Route path="/imatesList" element={<ImateConsult />} />
                <Route path="/addresses" element={<AddressForm />} />

                <Route path="/prisions" element={
                    <PrisonProvider>
                        <Prison />
                    </PrisonProvider>
                } />

                <Route path="/imate" element={<NewImate />} />
                <Route path="/imateEdit/:index" element={<EditeImate />} />
                <Route path="/hiring" element={<WorkInside />} />
            </Routes>
    )
}

export default Routess;

//<Route path="/Filter" element={<Filter />} />
//     <Route component = { ImateCard }  path="/imates" />
