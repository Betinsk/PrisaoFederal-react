import { useState, useEffect } from 'react';
import Context from './appContext';
import propTypes from 'prop-types';

function Provider({ children }) {

  const [dadosJson, setData] = useState([]);
  const [user, setUser] = useState(null);

  // 🔄 mantém login após refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ name: "Usuário" }); // depois você pode puxar do backend
    }
  }, []);

  function login(userData, token) {
    localStorage.setItem("token", token);
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  const contextValue = {
    dadosJson,
    setData,
    user,
    login,
    logout
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;