import React, { useState, useEffect } from 'react';

function PersonRegister() {
  const [nome, setNome] = useState('');
  const [socialSecurity, setSocialSecurity] = useState('');
  const [imate, setData] = useState([''])
  // Adicione mais estados conforme necessário para outros campos do formulário
  const [selectedOption, setSelectedOption] = useState('');


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

   
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construa o objeto com os dados da entidade a serem enviados para o backend
    const newImateVisitor = {
      nome: nome,
      imate: selectedOption
      
      // Adicione outros campos aqui conforme necessário
    };
    console.log(newImateVisitor)
    try {
      // Envie os dados para o backend usando uma requisição HTTP (por exemplo, usando fetch ou axios)
      const response = await fetch('http://localhost:8080/visitor/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newImateVisitor),
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
    }
  };

  return (
    <>
    
    <div>
<select value={selectedOption} onChange={handleSelectChange}>
  <option value="">Selecione uma opção</option>
  {/* Mapeia o array para gerar as opções */}
  {imate.map((option, index) => (
    <option key={index} value={JSON.stringify(option)}>
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
      </label>
      <br/>
      {/* Adicione mais campos do formulário conforme necessário */}
      <button type="submit">Create</button>
    </form>


</>
  );
}

export default PersonRegister;