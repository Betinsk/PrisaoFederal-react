import React, { useState, useEffect } from 'react';
import './person.css'

function PersonRegister() {
  const [nome, setNome] = useState('');
  const [age, setAge] = useState('')
  const [socialSecure, setSocialSecure] = useState('')
  const [cellFoneNumber, setcellFoneNumber] = useState('')

  const [imate, setData] = useState([])
  // Adicione mais estados conforme necessário para outros campos do formulário
  const [selectedOption, setSelectedOption] = useState(1); // Esse useState 1, significa que eu estou por padrão acessando o primeiro elemento da lista


 
    const [visitor, setVisitor] = useState({
      name: '',
      age: '',
      socialSecure: '',
      cellfoneNumber: '',
      imates: [] // Inicializa como um array vazio
    });


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

   
  const handleSelectChange = (event) => {

    setSelectedOption(event.target.value);
    console.log('id para back', event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();



    // Construa o objeto com os dados da entidade a serem enviados para o backend
    const newImateVisitor = {
      name: nome,
      age: age,
      socialSecure: socialSecure,
      cellfoneNumber: cellFoneNumber,
     
      // O objeto espera o id incapsulado dentro de um objeto, caso contrario
      // da o erro JSON parse error: Cannot construct instance of `com.example.demo.domain.Imate` (although at least one Creator exists): no String-argument constructor/factory method to deserialize from String value ('5')]
      imates: [ {
        id: selectedOption
      }
    ]
      // Adicione outros campos aqui conforme necessário
    };
    console.log(newImateVisitor)
    try {
      // Envie os dados para o backend usando uma requisição HTTP (por exemplo, usando fetch ou axios)
      const response = await fetch('http://localhost:8080/visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newImateVisitor)
        
      });

      if (response.ok) {
        // Limpe os campos do formulário após o envio bem-sucedido
        setNome('');
        // Limpe outros campos do formulário conforme necessário

        console.log('Entidade criada com sucesso!');
      } else {
        // Manipule erros de requisição aqui, se necessário
        console.log('Erro ao criar entidade. Por favor, tente novamente.');
      }
    } catch (error) {
      // Manipule erros de rede aqui, se necessário
      console.log('Erro de rede ao tentar criar entidade. Por favor, verifique sua conexão e tente novamente.');
      console.log(newImateVisitor)
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
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
            <p> Age:</p> 
                <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
                <p>Cell fone number: </p> 
                <input type="text" value={cellFoneNumber} onChange={(event) => setcellFoneNumber(event.target.value)} />
                <p>Social Secure</p>
            <input type="text" value={socialSecure} onChange={(event) => setSocialSecure(event.target.value)} />
          </label>
        <br/>
        {/* Adicione mais campos do formulário conforme necessário */}
      <button  type="submit">Create</button>
      </form>
      </div>

</div>
  );
}

export default PersonRegister;
