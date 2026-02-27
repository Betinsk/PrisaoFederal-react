import { useState } from 'react';

const initialAddressState = {
  street: '',
  addressComplement: '',
  city: '',
  state: '',
  country: ''
};

export function useAddresses() {
  const [address, setAddress] = useState(initialAddressState);
  const [addresses, setAddresses] = useState([]);

  // Atualiza o form
  const handleAddressChange = (name, value) => {
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Adiciona na lista
  const addAddress = () => {
    setAddresses(prev => [...prev, address]);

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