import { PrisonDetails } from "./PrisonDetails";
import React, { useContext } from 'react';
import { PrisonContext } from "./prisionContext";
import './prison.css'

function Prison () {

  const { prisons, loading, error } = useContext(PrisonContext);


    return(
        <div className="container">
            <h1>Prisons List</h1>
          <div className="card-container">
      {loading && <p>Carregando prisões...</p>}
      {error && <p>Erro: {error}</p>}
      {prisons.length === 0 && !loading && <p>Nenhuma prisão encontrada</p>}

      {prisons.map((prison) => (
        <div className='imate-card'> 
        <PrisonDetails  key={prison.id} prison={prison} />
        </div>
      ))}
        </div>    
        </div>
    )

}

export default Prison