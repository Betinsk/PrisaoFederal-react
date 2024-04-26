
import '../imate/imate.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function EditeImate () {

    const [data, setData] = useState([''])
    //recebendo o paramentro da url
    const id = useParams()
    //const [idInt, setFoundImate] = useState('');
    console.log(id)

    //convertendo de string para int fazendo a desestruturação
    const idInt = Number.parseInt(id.index)
    console.log(idInt)

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
            const response = await fetch(`http://localhost:8080/imates/${idInt}`);
              if (!response.ok) {
                throw new Error('Erro ao buscar dados da API');
              }
              const jsonData = await response.json();
              console.log('Chegou os preso + ', jsonData);
              setData(jsonData);

          }
           catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);



    return (

        <div>
       
        <div className="container">
        <div className="imate-information">
          <h2>Imate's identification: {data.name} </h2>
          <p><strong>Date got arrested:</strong> </p>
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Name:</strong> {data.name} </p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>CellFone:</strong> {data.cell}</p>
          <p><strong>Location:</strong> </p>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>Coordinates:</strong> </p>
          <p><strong>Nat:</strong></p> 

          <p><strong>Contry:</strong> </p> 
          <p><strong>postcode:</strong> </p>
          <p><strong>state: </strong></p>
          <p><strong>Street: </strong> </p>

        </div>
    </div>
       
        <button className="button-38">Edit Imate</button>
        </div>
    )

}

export default EditeImate
