import React, { useState, useEffect } from 'react';

function PersonRegister() {
  const [nome, setNome] = useState('');
  const [socialSecurity, setSocialSecurity] = useState('');
  const [imate, setData] = useState([''])
  // Adicione mais estados conforme necessário para outros campos do formulário
  const [selectedOption, setSelectedOption] = useState([]);


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
      // O objeto espera o id incapsulado dentro de um objeto, caso contrario
      // da o erro JSON parse error: Cannot construct instance of `com.example.demo.domain.Imate` (although at least one Creator exists): no String-argument constructor/factory method to deserialize from String value ('5')]
      imate: {
        id: selectedOption
      } 
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
    <>
    
    <div>
<select value={JSON.stringify(selectedOption)} onChange={handleSelectChange} >
  <option value="">Selecione uma opção</option>
  {/* Mapeia o array para gerar as opções */}
  {imate.map((option, index) => (
    <option key={index}value={option.id} >
      {option.name}

    </option>
  ))}
</select>
<p>Opção selecionada: {selectedOption}</p>
</div>

    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
        {  console.log('nome para back', nome)
}
      </label>
      <br/>
      {/* Adicione mais campos do formulário conforme necessário */}
      <button type="submit">Create</button>
    </form>


</>
  );
}

export default PersonRegister;
