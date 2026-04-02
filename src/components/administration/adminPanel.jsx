import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";
import './adminPanel.css';

function AdminPanel() {
  const { user } = useContext(AuthContext);

  const functions = [
    { name: "Consult Persons", path: "/person" },
    { name: "Inmate Registration", path: "/imate" },
    { name: "Person Register", path: "/personRegister" },
  ];

  return (
        <div className="container">

    <div className="d-flex">

      {/* SIDEBAR */}
      <div className="sidebar p-3">
        <h5 className="mb-4">Admin Panel</h5>

        <ul className="nav flex-column">

          {functions.map((item, index) => (
            <li key={index} className="nav-item mb-2">

              <Link to={item.path} className="nav-link sidebar-link">
                {item.name}
              </Link>

            </li>
          ))}

        </ul>
      </div>

      {/* CONTENT */}
      <div className="content p-4 w-100">

        <h4 className="mb-2">Dashboard</h4>
        <p className="text-muted">Usuário: {user?.name}</p>

        <div className="mt-4">
          <p>Selecione uma opção no menu lateral.</p>
        </div>

      </div>

    </div>
    </div>
  );
}

export default AdminPanel;