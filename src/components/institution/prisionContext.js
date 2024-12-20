import React, { createContext, useState, useEffect, useContext } from 'react';

// Criando o contexto
export const PrisonContext = createContext();

// Criando o Provider que vai compartilhar o estado
export const PrisonProvider = ({ children }) => {
  const [prisons, setPrisons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBaseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}prisions`);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const jsonData = await response.json();
        setPrisons(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PrisonContext.Provider value={{ prisons, loading, error }}>
      {children}
    </PrisonContext.Provider>
  );
};
