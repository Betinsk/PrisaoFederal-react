import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home.jsx";
import WorkInside from "../components/home/hiring/workInside";
import PersonRegister from "../components/person/personRegister";
import Prison from "../components/institution/prision";
import { PrisonProvider } from "../components/institution/prisionContext";
import PersonList from "../components/person/personList";
import AddressForm from "../components/address/AddressForm";
import PersonProfile from "../components/person/personPage";
import LoginPage from "../components/login/LoginPage";
import PrivateRoute from "../components/login/PrivateRoute";
import PageNotFound from "../validations/PageNotFound";
import InmateRegister from "../components/imate/InmateRegister";
import Layout from "../components/layout/Layout.jsx";
import AdminPanel from "../components/administration/AdminPanel.jsx";


const Routess = () => {
  return (
    <Routes>

      {/* rotas públicas — sem navbar */}
      <Route path="/" element={<Home />} />
      <Route path="/hiring" element={<WorkInside />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />

      {/* rotas privadas — com navbar */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>

          <Route path="/personRegister" element={<PersonRegister />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/person" element={<PersonList />} />
          <Route path="/person/:id" element={<PersonProfile />} />
          <Route path="/addresses" element={<AddressForm />} />
          <Route path="/imate" element={<InmateRegister />} />

          <Route path="/prisions" element={
            <PrisonProvider>
              <Prison />
            </PrisonProvider>
          } />

        </Route>
      </Route>

    </Routes>
  );
};

export default Routess;