
import { useEffect, useState } from "react";
import DeletPerson from "./deletPerson";

function PersonConsult() {

    const [jsonData, setData] = useState(['']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
            setTimeout(async () => {
              const response = await fetch('http://localhost:8080/visitor');
              if (!response.ok) {
                throw new Error('Erro ao buscar dados da API');
              }
              const jsonData = await response.json();
              console.log('Chegou os presos + ', jsonData);
              setData(jsonData);
              setLoading(false); // Define carregando como false após receber os dados
            }, 1000);
          } catch (error) {
            console.error(error);
            setLoading(false); // Em caso de erro, também definimos carregando como false
          }
        };
    
        fetchData();
      }, []);


    return (
        <div className="">

            Person consult


            <div className='card-container'>
            {loading ? (
            <p>Carregando...</p>
                 ) : (
                    <>
                  {jsonData !== null && jsonData.map((person, index) => (
                    <div className='imate-card' key={index} >
                      <div className='card-img'>
                      </div>
                      <p className='card-title'>{person.name ?? "Não disponível"}</p>
                      <div className='card-information'>
                        {/* Aqui estava ocorrendo um erro, que parece que a página renderizava
                            antes do array carregar, então para corrigir esse erro é feito a verificação
                            se a parte do array person.imate não é nula, usando o ?
                        */}
                      <p>Imate's id: {person.imate ? person.imate.id  : "Não disponível"}</p>
                      <p>Imates's nome: {person.imate ? person.imate.name  : "Não disponível"}</p>
                      <p>Age: {person.imate ? person.imate.age : "Não disponível"}</p> 
                        <p> Gender: {person.imate ? person.imate.gender : "Não disponível"}</p>
                        <p>Social Security: {person.imate ? person.imate.socialSecurity : "Não disponível"}</p>

                      </div>

                      <DeletPerson visitorId={person.id} />

                    </div>
                  ))}
                  </>
                )}
              </div>
            
        </div>
    )


    }   

    export default PersonConsult