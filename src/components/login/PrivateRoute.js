import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;


export function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/home" /> : children;
}