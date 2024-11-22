import { useEffect, useState } from "react";
import { PrisonDetails } from "./PrisonDetails";
import React, { useContext } from 'react';
import { PrisonContext } from "./prisionContext";

function Prison () {

  const { prisons, loading, error } = useContext(PrisonContext);


    return(
        <div className="container">
          <h1>Prisons List</h1>
          {loading && <p>Carregando prisões...</p>}
      {error && <p>Erro: {error}</p>}
      {prisons.length === 0 && !loading && <p>Nenhuma prisão encontrada</p>}

      {prisons.map((prison) => (
        <PrisonDetails key={prison.id} prison={prison} />
      ))}
        </div>    
    )

}

export default Prison