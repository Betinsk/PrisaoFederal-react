import { useState } from 'react';
import { validateAddress } from '../validations/addressValidation';

const initialAddressState = {
  street: '',
  addressComplement: '',
  city: '',
  state: '',
  country: ''
};

export function useAddresses(setErrors) {
  const [address, setAddress] = useState(initialAddressState);
  const [addresses, setAddresses] = useState([]);


const handleAddressChange = (e) => {
  const { name, value } = e.target;

  setAddress(prev => ({
    ...prev,
    [name]: value
  }));
};

  // Adiciona na lista
  const addAddress = () => {
    console.log("address atual:", address);
      console.log("clicou no botão");

    const validationErrors = validateAddress(address);
  console.log("erros:", validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // adiciona na lista
  setAddresses(prev => [...prev, address]);

  // limpa erros
  setErrors({});
    // limpa o form
    setAddress(initialAddressState);
  };

  // Reset geral (vai te ajudar depois)
  const resetAddresses = () => {
    setAddress(initialAddressState);
    setAddresses([]);
  };

  return {
    address,
    addresses,
    handleAddressChange,
    addAddress,
    resetAddresses
  };
}