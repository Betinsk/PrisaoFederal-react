
import { useEffect, useState } from "react";
import DeletPerson from "./deletPerson";
import calculateAge from "../Utils/calcBirth";

function PersonConsult() {

    const [data, setData] = useState(['']);
    const [loading, setLoading] = useState(true);

    const apiBaseUrl = process.env.REACT_APP_API_URL;


    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
            setTimeout(async () => {
              const response = await fetch(`${apiBaseUrl}visitor`);
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

      
      const handleDeleteVisitor = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/visitor/${id}`, {
                method: 'DELETE'
            });
            console.log(response)

            if (response.ok) {
                // Atualize o estado ou faça qualquer ação necessária após a exclusão bem-sucedida
               setData(data.filter(item => item.id !== id));

                console.log('Visitor excluído com sucesso!');
            } else {
                console.error('Falha ao excluir visitor, ele não existe ou possui pendencias');
            }
        } catch (error) {
            console.error('Erro ao processar solicitação de exclusão:', error);
        }
    };

    return (
        <div className="">

            <div className='card-container'>
            {loading ? (
            <p>Carregando...</p>
                 ) : (
                    <>
                  {data !== null && data.map((person, index) => (
                    <div className='imate-card' key={index} >
                      <div className='card-img'>
                      </div>
                      <p className='card-title'>{person.name ?? "Não disponível"}</p>
                      <div className='card-information'>
                        {/* Aqui estava ocorrendo um erro, que parece que a página renderizava
                            antes do array carregar, então para corrigir esse erro é feito a verificação
                            se a parte do array person.imate não é nula, usando o ?
                        */}
                      <p>Person age: {person.dateOfBirth ? calculateAge(person.dateOfBirth)  : "Não disponível"}</p>
                      {/* <p>Person cellfone: {person.cellfoneNumber ? person.cellfoneNumber  : "Não disponível"}</p> */}
                      <p>Person socialSecurity: {person.socialSecurity ? person.socialSecurity  : "Não disponível"}</p>
                      <hr></hr>
                      {/* <h1>Imate</h1>
                      <p>Imates's nome: {person.imates ? person.imates.name  : "Não disponível"}</p>
                      <p>Age: {person.imates ? person.imates.dateOfBirth : "Não disponível"}</p> 
                        <p> Gender: {person.imates ? person.imates.gender : "Não disponível"}</p>
                        <p>Social Security: {person.imates ? person.imates.socialSecurity : "Não disponível"}</p> */}

                          {/* Verificando se há algum imates associado */}
                    {person.imates && person.imates.length > 0 ? (
                      person.imates.map((imate, idx) => (
                        <div key={idx}>
                          <p>Imate's name: {imate.name ?? "Não disponível"}</p>
                          <p>Age: {imate.dateOfBirth ? calculateAge(imate.dateOfBirth) : "Não disponível"}</p>
                          <p>Gender: {imate.gender ?? "Não disponível"}</p>
                          <p>Social Security: {imate.socialSecurity ?? "Não disponível"}</p>
                        </div>
                      ))
                    ) : (
                      <p><b>Imate não disponível</b></p>
                    )}
                            
                      </div>

                          <button className='button-38' onClick={() => handleDeleteVisitor(person.id)}>Delete</button >

                    </div>
                  ))}
                  </>
                )}
              </div>
            
        </div>
    )


    }   

    export default PersonConsult