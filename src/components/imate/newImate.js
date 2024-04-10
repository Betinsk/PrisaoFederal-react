import { useState, useEffect} from "react";
import DeletImate from "../controller/delete";
import './imate.css'

function NewImate() {

    const [jsonData, setData] = useState([]);

    const [imate, setImate] = useState({
      age: '',
      gender: '',
      name: ''
    });

    

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    fetch('http://localhost:8080/imates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imate),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Imate criado com sucesso:', data);
      // Faça algo após o sucesso, como redirecionar para outra página
    })
    .catch(error => {
      console.error('Ocorreu um erro ao criar o Imate:', error);
    });
  };


        return (
          
          <>
                <div className='card-container'>
                  {jsonData.map((imate, index) => (
                    <div className='imate-card' key={index} >
                      <div className='card-img'>
                      </div>
                      <p className='card-title'>{imate.name}</p>
                      <div className='card-information'>
                        <span>Imate's id: {imate.id} </span>
                          <p>Age: {imate.age}</p>
                        <p> Gender: {imate.gender}</p>
                        <p>Social Security: {imate.socialSecurity}</p>

                      </div>

                    <DeletImate imateId={imate.id} />

                    </div>
                  ))}
              </div>

                    <div className="divCreateImate">
                      Criando imate
                    <form onSubmit={handleSubmit}>
                      <div className='inputs'>
                        Age:
                        <input type="text" name="age" value={imate.age} onChange={handleChange} />

                        Gender:
                        <input type="text" name="gender" value={imate.gender} onChange={handleChange} />
      
                        Name:
                        <input type="text" name="name" value={imate.name} onChange={handleChange} />

                        Social Security:
                        <input type="text" name="socialSecurity" value={imate.socialSecurity} onChange={handleChange} />

                          <button className='button-38' type="submit">Submit</button>
                        </div>
                      </form>
                      </div>
               </>
        )
    }
    export default NewImate