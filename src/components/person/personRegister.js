import React, { useState, useEffect } from 'react';
import './person.css'
import AddressForm from '../address/address';

function PersonRegister() {
  const [imate, setData] = useState([])
  //const [selectedOption, setSelectedOption] = useState(1); // Esse useState 1, significa que eu estou por padrão acessando o primeiro elemento da lista

    const [visitor, setVisitor] = useState({
      name: '',
      age: '',
      socialSecure: '',
      gender:'',
      cellfoneNumber: '',
      imates: [],
      addressDto: {
        street: '',
        number: '',
        cityName: '',
        stateName: ''
      }
    });

    console.log(visitor)

 const handleChange = (e) => {
    const { name, value } = e.target;

    setVisitor(prevState => ({
      ...prevState,
      [name]: value,
      addressDto: {
        ...prevState.addressDto,
        [name]: value
      }
    })  
    )}


    const handleSelectChange = (e) => {
      const selectedId = e.target.value;
      setVisitor((prevState) => ({
        ...prevState,
      imates: [...prevState.imates, { id: selectedId }] // Adiciona um objeto com o ID selecionado ao array de imates
      }));
    };

  
  //Trás minha lista de presos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/imates');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const jsonData = await response.json();
        console.log('Chegou os presos + ', jsonData)
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envie os dados para o backend usando uma requisição HTTP (por exemplo, usando fetch ou axios)
      const response = await fetch('http://localhost:8080/visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitor)
        
      });

      if (response.ok) {
        // Limpe os campos do formulário após o envio bem-sucedido
      
        console.log('Entidade criada com sucesso!');
      } else {
        // Manipule erros de requisição aqui, se necessário
        console.log('Erro ao criar entidade. Por favor, tente novamente.');
      }
    } catch (error) {
      // Manipule erros de rede aqui, se necessário
      console.log('Erro de rede ao tentar criar entidade. Por favor, verifique sua conexão e tente novamente.');
    }
  };

  return (
    <div className='container'>
    
    <div className='listaImates'>
        <select onChange={handleSelectChange} >
          {/* Mapeia o array para gerar as opções */}
          {imate.map((option, index) => (   
            <option key={index} value={option.id} >
                {/* Condicional esperando o array carregar,
                enquanto isso ele exibe o nome carregando
                */}
                {option.name ? option.name: 'Carregando'}
            </option>
          ))} 
        </select>
        <p className=''> Select the family's imate</p>
  </div>

      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>
          <p> Name:</p>
            <input type="text" name="name" value={visitor.name} onChange={handleChange} />

            <p> Age:</p> 
            <input type="text" name="age" value={visitor.age} onChange={handleChange} />
            <p> Gender:</p> 
            <input type="text" name="gender" value={visitor.gender} onChange={handleChange} />

                <p>Cell fone number: </p> 
                <input type="text" name="cellfoneNumber" value={visitor.cellfoneNumber} onChange={handleChange} />

                <p>Social Secure</p>
                <input type="text" name="socialSecure" value={visitor.socialSecure} onChange={handleChange} />

            </label>
        
        {/* Adicione mais campos do formulário conforme necessário */}

            {/* Renderiza o AddressForm e passa o método handleAddAddress como prop */}
              <AddressForm 
                      addressDto={visitor.addressDto}
                      handleChange={handleChange}

              />

      <button  type="submit">Create</button>
      </form>
      </div>

</div>
  );
}

export default PersonRegister;
