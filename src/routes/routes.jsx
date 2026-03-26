
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import '../components/imate/imate.css';
import WorkInside from "../components/home/hiring/workInside";
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
import PageNotFound from "../validations/PageNotFound";

const Routess = () => {
    return (

        <Routes>

            {/* public routes*/}
            <Route path="/" element={<Home />} />
            <Route path="/hiring" element={<WorkInside />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<PageNotFound />} />
                    
                            {/* private routes*/}
            <Route element={<PrivateRoute />}>

                <Route path="/personRegister" element={<PersonRegister />} />
                <Route
                    path="/adminPanel"
                    element={
                            <AdminPanel />
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
            </Route>
        </Routes>
    )
}

export default Routess;

//<Route path="/Filter" element={<Filter />} />
//     <Route component = { ImateCard }  path="/imates" />
