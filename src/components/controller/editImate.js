
import '../imate/imate.css'
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
  } catch (error) {
    console.error('Erro ao salvar Imate:', error);
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
                <p><strong>Age:</strong> {imate.dateOfBirth}</p>
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
                <p><strong>Name:</strong> {imate.name} </p>
                <p><strong>Social Securyt:</strong> {imate.socialSecurity}</p>
                <p><strong>Comited Crime:</strong> {imate.commitedCrime} </p>

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
                    <p><strong>Street:</strong> {address.street}</p>
                    <p><strong>Number:</strong> {address.number}</p>

                    <p><strong>City:</strong> {address.city.city}</p>
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
