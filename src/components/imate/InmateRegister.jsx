import { useState } from 'react';
//import './person.css';
import { createInmateWithAddress } from '../../services/inmateService';
import { AddressForm } from '../address/AddressForm';
import { useNavigate } from 'react-router-dom';
import { useAddresses } from '../../hooks/useAddresses';
import { requestWithToast } from '../../exceptions/toast';
import InmateForm from './InmateForm';
import { validateInmate } from '../../validations/inmateValidation';

function InmateRegister() {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [inmate, setInmate] = useState({
    name: '',
    birthDate: '',
    socialSecurity: '',
    gender: "Male",
    email: '',
    commitedCrime: '',
    arrestDate: '',
    sentenceYears: ''
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

    setInmate(prev => ({
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
        ...inmate,
        addresses: addresses
      };

      console.log("Payload being sent:", payload);

      const validationErrors = validateInmate(payload);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      const res = await requestWithToast(
        createInmateWithAddress(payload),
        "Inmate created!"
      );

      console.log("RETORNO:", res);

      // redireciona para o perfil
      navigate(`/person/${res.id}`);

      console.log("Tudo criado com sucesso");
      console.log('Address create with success!', addresses);

      setInmate({
        name: '',
        birthDate: '',
        socialSecurity: '',
        gender: "Male",
        email: '',
        commitedCrime: '',
        arrestDate: '',
        sentenceYears: ''

      }); // limpa o formulário

      // limpa o form de address
      resetAddresses();

    } catch (err) {
      console.log("Erro tratado, não navega");
      console.log('Erro de rede. Verifique sua conexão.')
      // const response = await createPersonWithAddress(payload);

    } finally {
      setLoading(false);
    }
  };

  return (

    <div className='container'>
      <div className='form'>
        <form onSubmit={handleSubmit} className="border rounded p-3 bg-white">
          <h6 className="text-uppercase fw-bold mb-3">Inmate Information</h6>
          <InmateForm attributes={inmate} onChange={handleChange} errors={errors} isEdit={false}
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
            Add address
          </button>
          <div>
            <button type="submit" className="btn btn-primary" disabled={addresses.length === 0}>
              {loading ? "Salvando..." : "Create Inmate"}
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

export default InmateRegister;
