import { useState } from 'react';
import './person.css';
import Person from './PersonForm';
import { createPersonWithAddress } from '../../services/personService';
import { AddressForm } from '../address/AddressForm'; 
import { useNavigate } from 'react-router-dom';
import { useAddresses } from '../../hooks/useAddresses';
import { validatePerson } from '../../validations/personValidation';

function PersonRegister() {

const navigate = useNavigate();
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

  const [person, setPerson] = useState({
    name: '',
    birthDate: '',
    socialSecurity: '',
    gender: "Male",
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
 const handleChange = (e) => {
  const { name, value } = e.target;

  setPerson(prev => ({
    ...prev,
    [name]: value,
  }));

     // limpa erro do campo ao digitar
  setErrors(prev => ({
    ...prev,
    [name]: null
  }));

};

  // Envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

       if (loading) return; // evita spam

        setLoading(true);

    try {
    const payload = {
      ...person,
      addresses: addresses
    };

    console.log("Payload being sent:", payload);
   
      const validationErrors = validatePerson(payload);
      
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
  } finally {
    setLoading(false);
  }
};

  return (
    
    <div className='container'>
      <div className='form'>
        <form onSubmit={handleSubmit} className="border rounded p-3 bg-white">
            <h6 className="text-uppercase fw-bold mb-3">Person Information</h6>
          <Person attributes={person} onChange={handleChange} errors={errors} isEdit={false}
/>
      <h6 className="text-uppercase fw-bold mb-3">Address</h6>
          <AddressForm attributes={address} 
          onChange={handleAddressChange} 
          errors={errors} />
          <button
              type="button"
              className="btn btn-outline-primary btn-sm mt-2"
              onClick={addAddress}
            >
             Some address
        </button>
            <div>
           <button type="submit" className="btn btn-primary" disabled={addresses.length === 0}>
            {loading ? "Salvando..." : "Create Person"}
          </button>
          </div>
        </form>
            {addresses.map((address, index) => (
        <div key={index} className="card p-2 mb-2">
          <div>{address.street}</div>
          <div>{address.city}</div>
          <div>{address.state}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default PersonRegister;
