import React, { useState } from 'react';
import Context from './appContext';
import propTypes from 'prop-types'

function Provider  ({children}) {

  const [dadosJson, setData] = useState([]) 

  const contextValue = {
    dadosJson,
    setData
  };

    return (
      <Context.Provider value={contextValue}>
        {children}
      </Context.Provider>
    );
  }

  export default Provider

  Provider.propTypes = {
    children: propTypes.any,
}.isRequired
