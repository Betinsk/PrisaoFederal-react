import React, { useState, useEffect, createContext } from 'react';

export const Context = createContext();

function ImateData ({ children }) {
  const [dadosJson, setData] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const resposta = await fetch('https://randomuser.me/api/?results=75');
        const dadosJson = await resposta.json();
        setData(dadosJson.results);
        console.log(dadosJson.results)
      } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
      }
    }

    fetchDataFromAPI();
    }, []);
    

    return (
      <Context.Provider value={dadosJson}>
        {children}
      </Context.Provider>
    );
  }

 
export default ImateData