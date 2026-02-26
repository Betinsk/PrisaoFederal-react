import { useState } from 'react';
import './person.css';
import Person from '../person/person';
import { createPerson } from '../../services/personService';
import AddressRegister from '../address/addressRegister'; 
import { createAddress } from '../../services/addressService';

function PersonRegister() {
  const [person, setPerson] = useState({
    name: '',
    birthDate: '',
    socialSecurity: '',
    gender: '',
    email: ''
  });

  const [address, setAddress] = useState({
  street: '',
  addressComplement: '',
  city: '',
  state: '',
  country: ''
});


  // Função para atualizar o estado baseado no input
  const handleChange = (name, value) => {
    setPerson(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (name, value) => {
  setAddress(prev => ({
    ...prev,
    [name]: value
  }));
};

  // Envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     const personCreated = await createPerson(person);

       console.log('Person criada com sucesso!', personCreated);

    // 2. cria address vinculado
        await createAddress({
          ...address,
          person: { id: personCreated.id }
        });

        console.log("Tudo criado com sucesso");

        setPerson({
          name: '',
          birthDate: '',
          socialSecurity: '',
          gender: '',
          email: ''
        }); // limpa o formulário
      }
      
   catch (error) {
      console.log('Erro de rede. Verifique sua conexão.');
    }
  };

  return (
    <div className='container'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <Person attributes={person} onChange={handleChange} />
          <AddressRegister attributes={address} onChange={handleAddressChange} />
          <button type="submit">Create Person</button>
        </form>
      </div>
    </div>
  );
}

export default PersonRegister;
