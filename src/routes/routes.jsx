import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home.jsx";
import WorkInside from "../components/home/hiring/workInside";
import PersonRegister from "../components/person/personRegister";
import Prison from "../components/institution/prision";
import { PrisonProvider } from "../components/institution/prisionContext";
import PersonList from "../components/person/personList";
import PersonProfile from "../components/person/personPage";
import LoginPage from "../components/login/LoginPage";
import PrivateRoute from "../components/login/PrivateRoute";
import PageNotFound from "../validations/PageNotFound";
import InmateRegister from "../components/imate/InmateRegister";
import Layout from "../components/layout/Layout.jsx";
import AdminLayout from "../components/administration/AdminLayout.jsx";
import AdminDashboard from "../components/administration/AdminDashboard.jsx";

const Routess = () => {
  return (
    <Routes>

      {/* rotas públicas */}
      <Route path="/"       element={<Home />} />
      <Route path="/hiring" element={<WorkInside />} />
      <Route path="/login"  element={<LoginPage />} />
      <Route path="*"       element={<PageNotFound />} />

      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>

          {/* rotas normais */}
          <Route path="/personRegister" element={<PersonRegister />} />
          <Route path="/person"         element={<PersonList />} />
          <Route path="/person/:id"     element={<PersonProfile />} />
          <Route path="/imate"          element={<InmateRegister />} />
          <Route path="/prisions" element={
            <PrisonProvider><Prison /></PrisonProvider>
          } />

          {/* admin — dentro do Layout para manter a NavBar */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index                  element={<AdminDashboard />} />
            <Route path="persons"         element={<PersonList />} />
            <Route path="persons/:id"     element={<PersonProfile />} />
            <Route path="person-register" element={<PersonRegister />} />
            <Route path="inmate-register" element={<InmateRegister />} />
          </Route>

        </Route>
      </Route>

    </Routes>
  );
};

export default Routess;