import { useState } from "react";
import './imate.css'

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
        })
        .catch(error => {
          console.log(imate);

          console.error('Ocorreu um erro ao criar o Imate:', error);

        });
    };


  return (
    <div className="container">
      <div className="divCreateImate">
        Criando imate
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
          <p>Name:</p>
            <input type="text" name="name" value={imate.imateName} onChange={handleChange} />
             <p> Age:</p>
              <input type="text" name="age" value={imate.age} onChange={handleChange} />
                 <p>Gender:</p>
                   <input type="text" name="gender" value={imate.gender} onChange={handleChange} />
               <p>Social Security:</p>
              <input type="text" name="socialSecurity" value={imate.socialSecurity} onChange={handleChange} />
              <p>Comitted Crime</p>
            
              <textarea className="styled-textarea" type='text' name="commitedCrime" value={imate.commitedCrime} onChange={handleChange}  ></textarea>

                        {/* Endereço */}
              <h3>Endereço</h3>
             
                <label>Street:</label>
                <input
                  type="text"
                  name="street"
                  value={imate.addressDto.street}
                  onChange={handleChange}
                />
             
              <div>
                <label>Number:</label>
                <input
                  type="text"
                  name="number"
                  value={imate.addressDto.number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>City:</label>
                <input
                  type="text"
                  name="cityName"
                  value={imate.addressDto.cityName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>State:</label>
                <input
                  type="text"
                  name="stateName"
                  value={imate.addressDto.stateName}
                  onChange={handleChange}
                />
              </div>


            <button className='button-38' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewImate