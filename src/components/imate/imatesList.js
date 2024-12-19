
import { useEffect, useState } from "react";
import DeletImate from "../controller/deleteImate";
import { Link } from "react-router-dom";
import ImateCard from "./imateCard";

function ImateList() {

    const [jsonData, setData] = useState(['']);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
            setTimeout(async () => {
              const response = await fetch('http://3.14.131.47:8080/imates');
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

            <div className='card-container'>
            {loading ? (
            <p>Carregando...</p>
                 ) : (
                    <>
                    <ImateCard jsonData={jsonData}></ImateCard>
               {/*   {jsonData !== null && jsonData.map((imate, index) => (
                   	<Link to={`/imateEdit/${imate.id}`} skey={index} 	className="link-with-underline">

                   <div className='imate-card' key={index} >
                      <div className='card-img'>
                      </div>
                      <p className='card-title'>{imate.name ?? "Não disponível"}</p>
                      <div className='card-information'>
                        {/* Aqui estava ocorrendo um erro, que parece que a página renderizava
                            antes do array carregar, então para corrigir esse erro é feito a verificação
                            se a parte do array person.imate não é nula, usando o ?
                       

                      </div>


                      <DeletImate imateId={imate.id} />

                    </div>
                    </Link>
                  ))}

                  */}
                  </>
                )}
              </div>
            
        </div>
        )
    }

    export default ImateList