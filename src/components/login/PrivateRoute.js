import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../auth/Jwt";

export default function PrivateRoute() {
   return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}


export function PublicRoute({ children }) {
  const token = sessionStorage.getItem("token");

  return token ? <Navigate to="/home" /> : children;
}