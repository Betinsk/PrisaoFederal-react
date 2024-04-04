import { useState, useEffect} from "react";

function NewImate() {

    const [jsonData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/imates');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchData();
  }, []);

        return (
            <div>
                  {jsonData.map((imate, index) => (
                    <div key={imate.id}>
                    <p>{imate.age}</p>
                    <p>{imate.gender}</p>
                    <p>{imate.name}</p>
                    </div>
                  ))}
            
            </div>
        )
    }
    export default NewImate