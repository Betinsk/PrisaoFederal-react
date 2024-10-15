import React, { useState, useEffect } from 'react';
import './person.css'
import AddressForm from '../address/address';

function PersonRegister() {
  const [imate, setData] = useState([])
  //const [selectedOption, setSelectedOption] = useState(1); // Esse useState 1, significa que eu estou por padrão acessando o primeiro elemento da lista
  const [newPhone, setNewPhone] = useState(''); // State for the new phone number

    const [visitor, setVisitor] = useState({
      name: '',
      dateOfBirth: '',
      socialSecure: '',
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
          <label>
            <input type="text" name="name" value={visitor.name} onChange={handleChange} placeholder='Name' />

            <input type="date" name="dateOfBirth" value={visitor.dateOfBirth} onChange={handleChange} placeholder='Date of birth' />
            <select name="gender" value={visitor.gender} onChange={handleChange}>
                <option value="">Select Gender</option> {/* Opção padrão */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
                    {/* New phone input */}
                    <input
                      type="text"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                    <button className='button-38'  type="button" onClick={handleAddPhone}>Add Phone</button>
                <input type="text" name="socialSecure" value={visitor.socialSecure} onChange={handleChange} placeholder='Social Security'/>

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
