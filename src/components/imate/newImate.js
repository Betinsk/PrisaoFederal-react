import { useState, useEffect} from "react";

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
    e.preventDefault();
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
            <div>
                  {jsonData.map((imate, index) => (
                    <div key={imate.id}>
                    <p>{imate.age}</p>
                    <p>{imate.gender}</p>
                    <p>{imate.name}</p>
                    </div>
                  ))}
            
            </div>

                    <div>
                      Criando imate
                    <form onSubmit={handleSubmit}>
                    Age:
                    <input type="text" name="age" value={imate.age} onChange={handleChange} />

                    Gender:
                    <input type="text" name="gender" value={imate.gender} onChange={handleChange} />
  
                    Name:
                    <input type="text" name="name" value={imate.name} onChange={handleChange} />

                    <button type="submit">Submit</button>

                      </form>

                    </div>
                    </>

        )
    }
    export default NewImate