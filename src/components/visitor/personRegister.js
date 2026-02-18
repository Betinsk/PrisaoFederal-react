import React, { useState } from 'react';
import './person.css';
import Person from '../person/person';

function PersonRegister() {
  const [person, setPerson] = useState({
    name: '',
    birthDate: '',
    socialSecurity: '',
    gender: '',
    email: ''
  });

  const apiBaseUrl = process.env.REACT_APP_API_URL;

  // Função para atualizar o estado baseado no input
  const handleChange = (name, value) => {
    setVisitor(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiBaseUrl}person`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(person)
      });

      if (response.ok) {
        console.log('Person criada com sucesso!');
        setVisitor({
          name: '',
          birthDate: '',
          socialSecurity: '',
          gender: '',
          email: ''
        }); // limpa o formulário
      } else {
        console.log('Erro ao criar Person. Tente novamente.');
      }
    } catch (error) {
      console.log('Erro de rede. Verifique sua conexão.');
    }
  };

  return (
    <div className='container'>
      <div className='form'>
        <form onSubmit={handleSubmit}>

          <Person attributes={person} onChange={handleChange} />

          <button type="submit">Create Person</button>
        </form>
      </div>
    </div>
  );
}

export default PersonRegister;
