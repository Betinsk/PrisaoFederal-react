import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}


export function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/home" /> : children;
}