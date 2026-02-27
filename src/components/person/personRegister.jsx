import { useState } from 'react';
import './person.css';
import Person from './person';
import { createPerson } from '../../services/personService';
import AddressRegister from '../address/addressRegister'; 
import { createAddress } from '../../services/addressService';
import { useAddresses } from '../../hooks/useAddresses';

function PersonRegister() {
  const [person, setPerson] = useState({
    name: '',
    birthDate: '',
    socialSecurity: '',
    gender: '',
    email: ''
  });

const {
  address,
  addresses,
  handleAddressChange,
  addAddress,
  resetAddresses
} = useAddresses();

  // Função para atualizar o estado baseado no input
  const handleChange = (name, value) => {
    setPerson(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     const personCreated = await createPerson(person);

       console.log('Person criada com sucesso!', personCreated);
          await Promise.all(
          addresses.map(addr =>
       createAddress({ ...addr, person: { id: personCreated.id } 
          }))
        );

      console.log("Tudo criado com sucesso");
       console.log('Address create with success!', addresses);

        setPerson({
          name: '',
          birthDate: '',
          socialSecurity: '',
          gender: '',
          email: ''
        }); // limpa o formulário

        // limpa o form de address
        resetAddresses();

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
         <h2>Addresses</h2>
          <AddressRegister attributes={address} onChange={handleAddressChange} />
            <button type="button" onClick={addAddress}>
              Adicionar endereço
            </button>
          <button type="submit">Create Person</button>
        </form>
      </div>
    </div>
  );
}

export default PersonRegister;
