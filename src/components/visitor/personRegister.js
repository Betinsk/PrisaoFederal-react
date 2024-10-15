import React, { useState, useEffect } from 'react';
import './person.css'
import AddressForm from '../address/address';
import Person from '../person/person';

function PersonRegister() {
  const [imate, setData] = useState([])
  //const [selectedOption, setSelectedOption] = useState(1); // Esse useState 1, significa que eu estou por padrão acessando o primeiro elemento da lista
  const [newPhone, setNewPhone] = useState(''); // State for the new phone number

    const [visitor, setVisitor] = useState({
      name: '',
      dateOfBirth: '',
      socialSecurity: '',
      gender:'',
      phone:[],
      imates: [],
      addressDto: {
        street: '',
        number: '',
        cityName: '',
        stateName: ''
      }
    });

    console.log(visitor)

 const handleChange = (name, value) => {

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

    const handleAddPhone = () => {
      if (newPhone) {
        setVisitor(prevState => ({
          ...prevState,
          phone: [...prevState.phone, { number: newPhone }] // Add new phone to the array
        }));
        setNewPhone(''); // Clear the input field
      }
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

        <Person attributes={imate} onChange={handleChange} />
          
                    {/* New phone input */}
                    <input
                      type="text"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                    <button className='button-38'  type="button" onClick={handleAddPhone}>Add Phone</button>

            {/* Renderiza o AddressForm e passa o método handleAddAddress como prop */}
              <AddressForm   addressDto={visitor.addressDto}    handleChange={handleChange}
                    
              />

      <button  type="submit">Create</button>
      </form>
      </div>

</div>
  );
}

export default PersonRegister;
