

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function EditeImate () {


const [imate, setImate] = useState({
  id: '',
  gender: '',
  dateOfBirth: '',
  name: '',
  socialSecurity: '',
  commitedCrime: ''
})

const [refreshKey, setRefreshKey] = useState(0);


const [address, setAdress] = useState({
  addresses: [
    {
        id: null,
        street: '',
        number: '',
        city: {
            id: null,
            city: '',
            state: {
                id: null,
                state: ''
            }
        }
    }
]
})

const [phone, setPhone] = useState({
  phones: []
})

const saveImate = async () => {
  try {
    const response = await fetch(`http://localhost:8080/imates/${imate.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(imate),
    });

    if (!response.ok) throw new Error('Erro ao salvar os dados do Imate');
    console.log('Dados do Imate atualizados com sucesso!');
    // Após salvar, recarrega os dados do Imate

    // Atualiza a chave para "reiniciar" visualmente, se necessário
    setRefreshKey((prev) => prev + 1);


  } catch (error) {
    console.error('Erro ao salvar Imate:', error);
  }
};

const saveAddress = async () => {
  try {
    const response = await fetch(`http://localhost:8080/addresses/${address.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(imate),
    });

    if (!response.ok) throw new Error('Erro ao salvar os dados do Address');
    console.log('Dados do Address atualizados com sucesso!');
    // Após salvar, recarrega os dados do Imate

    // Atualiza a chave para "reiniciar" visualmente, se necessário
    setRefreshKey((prev) => prev + 1);


  } catch (error) {
    console.error('Erro ao salvar Address:', error);
  }
};
useEffect(() => {
  // Aqui você pode adicionar lógica adicional, como recarregar dados
  console.log('Componente reiniciado após salvar!');
}, [refreshKey]); // Executa sempre que `refreshKey` mudar


    const [inputValue, setInputValue] = useState('');
    const [editingField, setEditingField] = useState(null); // Controla qual campo está sendo editado
    //recebendo o paramentro da url
    const id = useParams()
    //const [idInt, setFoundImate] = useState('');
 
    //convertendo de string para int fazendo a desestruturação
    const idInt = Number.parseInt(id.index)
    console.log(idInt)

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
            const response = await fetch(`http://localhost:8080/imates/${idInt}`);
              if (!response.ok) {
                throw new Error('Erro ao buscar dados da API');
              }
              const jsonData = await response.json();
              console.log('Chegou os preso + ', jsonData);

              setImate({
                id: jsonData.id,
                gender: jsonData.gender,
                dateOfBirth: jsonData.dateOfBirth,
                name: jsonData.name,
                socialSecurity: jsonData.socialSecurity,
                commitedCrime: jsonData.commitedCrime,
              })
              setAdress({ addresses: jsonData.addresses.map(address => ({
                    id: address.id,
                    street: address.street,
                    number: address.number,
                    city: {
                        id: address.city.id,
                        city: address.city.city,
                        state: {
                            id: address.city.state.id,
                            state: address.city.state.state
                        }
                    }
                    
                })) 
              })
              setPhone({   phones: jsonData.phones.map(phone => ({
                  phones: phone
                }))
            });

          }
           catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

      console.log(imate)
      console.log(address)
      console.log(phone)

  const handleImateChange = (field, value) => {
    setImate(prev => ({ ...prev, [field]: value }));
  };

  
  const handleAddressChange = (index, field, value) => {
    setAdress((prev) => {
      const updatedAddresses = [...prev.addresses]; // Copia o array existente
      updatedAddresses[index] = {
        ...updatedAddresses[index], // Copia o objeto de endereço atual
        [field]: value, // Atualiza apenas o campo específico
      };
      return { ...prev, addresses: updatedAddresses }; // Retorna o novo estado
    });
  };
  

  const handleEdit = (field) => {
    setEditingField(field); // Ativa o campo para edição
    setInputValue(imate[field]); // Preenche o input com o valor atual do campo
  };

    return (

        <div>
         <div className="container">
            <div className="imate-information">
              <p>
                <strong>Name: </strong>
                {editingField === 'name' ? (
                <input
                type="text"
                value={imate.name}  // O valor vem do estado 'imate'
                onChange={(e) => handleImateChange('name', e.target.value)}  // Atualiza o estado local
              />
                ) : (
                  <span onClick={() => handleEdit('name')}>{imate.name}</span>
                )}
              </p>

              {/* Outros campos */}

                <h2>Imate's identification: {imate.name} </h2>
                
                <p><strong>Date got arrested:</strong> </p>
                <p><strong>Age: </strong> 
                  {editingField === 'dateOfBirth' ? (
                  <input
                  type="text"
                  value={imate.dateOfBirth}  // O valor vem do estado 'imate'
                  onChange={(e) => handleImateChange('dateOfBirth', e.target.value)}  // Atualiza o estado local
                />
                ) : (
                  <span onClick={() => handleEdit('dateOfBirth')}>{imate.dateOfBirth}</span>
                )}
                </p>

                <p><strong>Gender: </strong>
                {editingField === 'gender' ? (
                  <input
                  type="text"
                  value={imate.gender}  // O valor vem do estado 'imate'
                  onChange={(e) => handleImateChange('gender', e.target.value)}  // Atualiza o estado local
                />
                ) : (
                  <span onClick={() => handleEdit('gender')}>{imate.gender}</span>
                )}
                </p>
                <p>
                    <strong>Social Securyt: </strong>
                  {editingField === 'socialSecurity' ? (
                    <input
                    type="text"
                    value={imate.socialSecurity}  // O valor vem do estado 'imate'
                    onChange={(e) => handleImateChange('socialSecurity', e.target.value)}  // Atualiza o estado local
                  />
                  ) : (
                    <span onClick={() => handleEdit('socialSecurity')}>{imate.socialSecurity}</span>
                  )}
                </p>
                
                <p><strong>Comited Crime: </strong> 
                {editingField === 'commitedCrime' ? (
                  <textarea 
                  className="styled-textarea"
                  type="text"
                  value={imate.commitedCrime}  // O valor vem do estado 'imate'
                  onChange={(e) => handleImateChange('commitedCrime', e.target.value)}  // Atualiza o estado local
                />
                ) : (
                  <span onClick={() => handleEdit('commitedCrime')}>{imate.commitedCrime}</span>
                )}
                 </p>

                <button className='button-38' onClick={saveImate}>Edit Imate</button>

              {/* Renderiza cada telefone no array phones */}
              {phone.phones.length > 0 ? (
                phone.phones.map(phone => (
                  <div key={phone.id}>
                    <p><strong>Phone Number:</strong> {phone.phones.number ? phone.phones.number : 'No number assigned'}</p>
                    <hr />
                  </div>
                ))
              ) : (
                <p>No phones available</p>
              )}
              <hr></hr>
                <p><strong>Addresses:</strong> </p>
                  {address.addresses.length > 0 ? (
                    address.addresses.map(address => (
                      <>
                      <p><strong>Street:</strong> {address.street}
                    {editingField === 'street' ? (
                    <input 
                    className='inputEdition'
                    type="text"
                    value={address.addresses[0].street} // Exemplo: primeiro endereço
                    onChange={(e) => handleAddressChange(0, 'street', e.target.value)}
                  />
                  ) : (
                    <span onClick={() => handleEdit('street')}>{address.street}</span>
                  )}
              

                    </p>
                    <p><strong>Number:</strong> {address.number}</p>

                    <p><strong>City:</strong> {address.city.city},  {address.city.state.state}</p>
                    <hr />
                    </>
                  ))
                ) : (
                  <p>No addresses available</p>
                )}
            
        </div>
    </div>
       
        <button className="button-38">Edit Imate</button>
        </div>
    )

}

export default EditeImate
