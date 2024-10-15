import { useState } from "react";
import './imate.css'
import AddressForm from "../address/address";
import Person from "../person/person";

function NewImate() {

  const [imate, setImate] = useState({
    dateOfBirth: '',
    gender: '',
    name: '',
    socialSecurity: '',
    commitedCrime: '',
    phone: [],
    addressDto: {
      street: '',
      number: '',
      cityName: '',
      stateName: ''
    }
  });
  console.log(imate)

  const [newPhone, setNewPhone] = useState(''); // State for the new phone number

  const handleImateChange = (name, value) => {
    // Verifica se o campo pertence a addressDto
    if (name in imate.addressDto) {
      setImate(prevState => ({
        ...prevState,
        addressDto: {
          ...prevState.addressDto,
          [name]: value // Atualiza o campo dentro de addressDto
        }
      }));
    } else {
      // Atualiza outros campos do imate
      setImate(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleAddPhone = () => {
    if (newPhone) {
      setImate(prevState => ({
        ...prevState,
        phone: [...prevState.phone, { number: newPhone }] // Add new phone to the array
      }));
      setNewPhone(''); // Clear the input field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/imates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imate),

    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Network response was not ok: ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Imate criado com sucesso:', data);

        // Faça algo após o sucesso, como redirecionar para outra página
        //Reseta os campos do imate
        setImate({
          age: '',
          gender: '',
          name: '',
          socialSecurity: '',
          commitedCrime: '',
          addressDto: {
            street: '',
            number: '',
            cityName: '',
            stateName: ''
          }
        });


      })
      .catch(error => {
        console.log(imate);

        console.error('Ocorreu um erro ao criar o Imate:', error);

      });
  };

  return (
    <div className="container">
      <div className="divCreateImate">
        <h3>Prisoner registration</h3>

        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <Person attributes={imate} onChange={handleImateChange} />

            {/* New phone input */}
            <input
              type="text"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="Enter phone number"
            />
            <button className='button-38' type="button" onClick={handleAddPhone}>Add Phone</button>
            <p>Comitted Crime</p>

            <textarea className="styled-textarea" type='text' name="commitedCrime" value={imate.commitedCrime} onChange={handleImateChange}  ></textarea>

            {/* Endereço */}
            <h3>Endereço</h3>

            <AddressForm addressDto={imate.addressDto} handleChange={handleImateChange} ></AddressForm>

            <button className='button-38' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewImate