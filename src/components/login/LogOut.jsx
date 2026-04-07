import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";
import "./LogOut.css";

function LogOut() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <button onClick={handleLogout} className="logout-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      <span>Log out</span>
    </button>
  );
}

export default LogOut;