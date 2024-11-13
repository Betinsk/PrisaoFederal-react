import { useEffect, useState } from "react";
import { PrisonDetails } from "./PrisonDetails";

function Prision () {

    const [prisons, setPrisons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
            const response = await fetch(`http://localhost:8080/prisions`);
              if (!response.ok) {
                throw new Error('Erro ao buscar dados da API');
              }
              const jsonData = await response.json();
              console.log('Chegou os preso + ', jsonData);

              setPrisons(
                jsonData
            );

          }
           catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);


    return(
        <div className="container">
          <h1>Prisons List</h1>
              {prisons.map((prison, index) => (
          <PrisonDetails key={index} prison={prison} />
      ))}
        </div>    
    )

}

export default Prision