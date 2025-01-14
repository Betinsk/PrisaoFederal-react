

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function EditeImate () {

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando um tempo de carregamento de 2 segundos antes de buscar os dados
        const response = await fetch(`http://3.14.131.47:8080/imates/${idInt}`);
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
            profileImage: jsonData.profileImage
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
        id: '',
        street: '',
        number: '',
        city: {
            id:  '',
            city: '',
            state: {
                id: '',
                state: ''
            }
        }
    }
]
})

const [phone, setPhone] = useState({
  phones: []
})

console.log(imate)
 
console.log(phone)

const saveImate = async () => {
  try {
    const response = await fetch(`http://3.14.131.47:8080/imates/${imate.id}`, {
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

const saveAddress = async (index) => {
  try {

// Obtém o endereço pelo índice fornecido
const addressToSave = address.addresses[index]; 
console.log("Adress to save", addressToSave)

if (!addressToSave || !addressToSave.id) {
  throw new Error('Endereço ou ID inválido');
}

const addressDto = {
  street: addressToSave.street,
  number: addressToSave.number,
  stateName: addressToSave.city?.state?.state, // Nome do estado
  cityName: addressToSave.city?.city // Nome da cidade
};

    const response = await fetch(`http://3.14.131.47:8080/${addressToSave.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addressDto),
    });

    if (!response.ok) throw new Error('Erro ao salvar os dados do Address');
    console.log('Dados do Address atualizados com sucesso!');
    // Após salvar, recarrega os dados do Imate


  } catch (error) {
    console.error('Erro ao salvar Address:', error);
  }
};



    const [inputValue, setInputValue] = useState('');
    const [editingField, setEditingField] = useState(null); // Controla qual campo está sendo editado
    //recebendo o paramentro da url
    const id = useParams()
    //const [idInt, setFoundImate] = useState('');
 
    //convertendo de string para int fazendo a desestruturação
    const idInt = Number.parseInt(id.index)
    console.log(idInt)

   

  const handleImateChange = (field, value) => {
    setImate(prev => ({ ...prev, [field]: value }));
  };

  
  const handleAddressChane = (index, field, value) => {
    setAdress((prev) => {
      const updatedAddresses = [...prev.addresses]; // Copia o array existente
      updatedAddresses[index] = {
        ...updatedAddresses[index], // Copia o objeto de endereço atual
        [field]: value, // Atualiza apenas o campo específico
      };
      return { ...prev, addresses: updatedAddresses }; // Retorna o novo estado
    });
  };

  const handleAddressChange = (index, fieldPath, value) => {
    setAdress((prev) => {
      const updatedAddresses = [...prev.addresses]; // Copia o array existente
      
      // Encontra o endereço específico
      const address = updatedAddresses[index];
  
      // Função para lidar com campos aninhados
      const setNestedField = (obj, path, val) => {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const deepObj = keys.reduce((acc, key) => acc[key] || (acc[key] = {}), obj);
        deepObj[lastKey] = val;
      };
  
      // Aplica a atualização ao endereço específico
      setNestedField(address, fieldPath, value);
  
      updatedAddresses[index] = { ...address }; // Garante imutabilidade
  
      return { ...prev, addresses: updatedAddresses }; // Retorna o novo estado
    });
  };
  

  console.log(address)
  

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

                 <div className='profileImg'><img src={imate.profileImage} /></div> 

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
                <h2>Addresses:</h2>
                  {address.addresses.length > 0 ? (
                    address.addresses.map((address, index) => (
                      <>
                      <p><strong>Street:</strong>
                    {editingField === 'street' ? (
                    <input 
                    className='inputEdition'
                    type="text"
                    value={address.street} // Exemplo: primeiro endereço
                    onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                  />
                  ) : (
                    <span onClick={() => handleEdit('street')}>{address.street}</span>
                  )}
              

                    </p>
                    <p><strong>Number:</strong>
                      {editingField === 'number' ? (
                      <input 
                      className='inputEdition'
                      type="text"
                      value={address.number} // Exemplo: primeiro endereço
                      onChange={(e) => handleAddressChange(index, 'number', e.target.value)}
                    />
                    ) : (
                      <span onClick={() => handleEdit('number')}>{address.number}</span>
                  )}
                     </p>

                    <p><strong>City: </strong> 
                    {editingField === 'city' ? (
                     <input 
                      className='inputEdition'
                      type="text"
                      value={address.city.city} // Exemplo: primeiro endereço
                      onChange={(e) => handleAddressChange(index, 'city.city', e.target.value)}
                    />
                    ) : (
                      <span onClick={() => handleEdit('city')}>{address.city.city}</span>
                  )}
                    </p>
                    <p><strong>State: </strong>  
                    {editingField === 'state' ? (
                      <input 
                      className='inputEdition'
                      type="text"
                      value={address.city.state.state} // Exemplo: primeiro endereço
                      onChange={(e) => handleAddressChange(index, 'city.state.state', e.target.value)}
                    />
                    ) : (
                      <span onClick={() => handleEdit('state')}>{address.city.state.state}</span>
                  )}
                   </p>
                    <hr />
                    <button className="button-38" onClick={() => saveAddress(index)}>Salvar Endereço</button>

                    </>
                    
                  ))
                ) : (
                  <p>No addresses available</p>
                )}

               

            
        </div>
    </div>
       
        </div>
    )

}

export default EditeImate
