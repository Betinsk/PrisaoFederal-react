import { useState } from 'react';
import './person.css';
import Person from './person';
import { createPersonWithAddress } from '../../services/personService';
import Address from '../address/address'; 
import { useNavigate } from 'react-router-dom';
import { useAddresses } from '../../hooks/useAddresses';
import { validatePerson } from '../../validations/personValidation';

function PersonRegister() {

const navigate = useNavigate();
const [errors, setErrors] = useState({});

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
} = useAddresses(setErrors);

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
    const payload = {
      ...person,
      addresses: addresses
    };

    console.log("Payload being sent:", payload);
   
    const validationErrors = {
     ...validatePerson(payload),
    }
      if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);
        return;
      }

    const response = await createPersonWithAddress(payload);
  
      console.log("Tudo criado com sucesso");
       console.log('Address create with success!', addresses);

  // redireciona para o perfil
    navigate(`/person/${response.id}`);

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
          <h2>Person information</h2>
          <Person attributes={person} onChange={handleChange} errors={errors}
 />
         <h2>Addresses</h2>
          <Address attributes={address} onChange={handleAddressChange} errors={errors} />
            <button type="button" onClick={addAddress}>
              Adicionar endereço
            </button>
            <div>
          <button type="submit">Create Person</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonRegister;
