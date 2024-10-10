import { useState } from "react";
import './imate.css'
import AddressForm from "../address/address";

function NewImate() {


  const [imate, setImate] = useState({
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


  const handleChange = (e) => {
    const { name, value } = e.target;
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
            <input type="text" name="name" value={imate.imateName} onChange={handleChange}  placeholder="Name" />
              <input type="text" name="age" value={imate.age} onChange={handleChange} placeholder="Age"/>
              <select name="gender" value={imate.gender} onChange={handleChange}>
                <option value="">Select Gender</option> {/* Opção padrão */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
              <input type="text" name="socialSecurity" value={imate.socialSecurity} onChange={handleChange} placeholder="Social Security" />
              <p>Comitted Crime</p>
            
              <textarea className="styled-textarea" type='text' name="commitedCrime" value={imate.commitedCrime} onChange={handleChange}  ></textarea>

                        {/* Endereço */}
              <h3>Endereço</h3>
             
                <AddressForm addressDto={imate.addressDto} handleChange={handleChange} ></AddressForm>

            <button className='button-38' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewImate