import React, { useContext } from 'react';
import { Context } from './imateData';
import './imate.css'
const Imates = () => {

  const dadosJson = useContext(Context);

  return (
    <div className='card-container'>
      {dadosJson.map(imate => (
        <div className='imate-card' key={imate.id.value}>
          <div className='card-img'>
            <img src={imate.picture.large}></img><br />
          </div>
          <p className='card-title'>{imate.name.first} {imate.name.last}</p>
          <div className='card-information'>
            <span>{imate.cell}</span>
            <p>{imate.email}</p>
            <p>{imate.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );

}

export default Imates
