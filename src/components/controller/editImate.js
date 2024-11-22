
import '../imate/imate.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function EditeImate () {

  const [data, setData] = useState({
    id: null,
    gender: '',
    dateOfBirth: '',
    name: '',
    socialSecurity: null,
    commitedCrime: '',
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
    ],
    phones: []
});


const [imate, setImate] = useState({
  id: null,
  gender: '',
  dateOfBirth: '',
  name: '',
  socialSecurity: null,
  commitedCrime: ''
})

   // const [data, setData] = useState([''])
    const [isEditingName, setIsEditingName] = useState(false);
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

              setData({
                id: jsonData.id,
                gender: jsonData.gender,
                dateOfBirth: jsonData.dateOfBirth,
                name: jsonData.name,
                socialSecurity: jsonData.socialSecurity,
                commitedCrime: jsonData.commitedCrime,
                addresses: jsonData.addresses.map(address => ({
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
                    
                })), 
                 phones: jsonData.phones.map(phone => ({
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

      const handleEditClick = () => {
        setIsEditingName(true);
      };


  const handleSaveClick = () => {
    // Aqui, salve os dados atualizados na API ou estado global
    setIsEditingName(false);
    setData((prevData) => ({ ...prevData, name: inputValue }));
    setImate((prevData) => ({ ...prevData, name: inputValue }));

  };

  const handleEdit = (field) => {
    setEditingField(field); // Ativa o campo para edição
    setInputValue(data[field]); // Preenche o input com o valor atual do campo
  };

  const handleSave = async () => {
    const updatedData = { ...data, [editingField]: inputValue }; // Atualiza o campo editado
  }

  console.log(imate)

    return (

        <div>
       
        <div className="container">
        <div className="imate-information">

        <p>
          <strong>Name:</strong>
          {editingField === 'name' ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleSave} // Salva ao sair do campo
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('name')}>{data.name}</span>
          )}
        </p>

        {/* Outros campos */}

          <h2>Imate's identification: {data.name} </h2>
          
          <p><strong>Date got arrested:</strong> </p>
          <p><strong>Age:</strong> {data.dateOfBirth}</p>
          <p><strong>Gender:</strong></p>
          {editingField === 'gender' ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleSave} // Salva ao sair do campo
              autoFocus
            />
          ) : (
            <span onClick={() => handleEdit('gender')}>{data.gender}</span>
          )}
          <p><strong>Name:</strong> {data.name} </p>
          <p><strong>Social Securyt:</strong> {data.socialSecurity}</p>
         {/* Renderiza cada telefone no array phones */}
        {data.phones.length > 0 ? (
          data.phones.map(phone => (
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
           {data.addresses.length > 0 ? (
            data.addresses.map(address => (
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
          <p><strong>Comited Crime:</strong> {data.commitedCrime} </p>
       
        </div>
    </div>
       
        <button className="button-38">Edit Imate</button>
        </div>
    )

}

export default EditeImate
