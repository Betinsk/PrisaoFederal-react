import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";

function LogOut() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();  
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <button onClick={handleLogout} className="btn btn-outline-secondary ">
      Log out
    </button>
  );
}

export default LogOut;