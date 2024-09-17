import { useState } from "react";
import './imate.css'

function NewImate() {


  const [imate, setImate] = useState({
    age: '',
    gender: '',
    name: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setImate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    fetch('http://localhost:8080/imates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imate),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Imate criado com sucesso:', data);
        // Faça algo após o sucesso, como redirecionar para outra página
      })
      .catch(error => {
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
            <input type="text" name="name" value={imate.name} onChange={handleChange} />
             <p> Age:</p>
              <input type="text" name="age" value={imate.age} onChange={handleChange} />
                 <p>Gender:</p>
                   <input type="text" name="gender" value={imate.gender} onChange={handleChange} />
               <p>Social Security:</p>
              <input type="text" name="socialSecurity" value={imate.socialSecurity} onChange={handleChange} />
              <p>Comitted Crime</p>
              <textarea className="styled-textarea" type='text' ></textarea>
            <button className='button-38' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewImate