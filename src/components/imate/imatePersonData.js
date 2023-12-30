import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useEffect, useState } from "react";
import React from "react";
import './imate.css';
import Context from "../../context/appContext";

 const ImatePersonData = () => {

    const {dadosJson} = useContext(Context);
    const [foundImate, setFoundImate] = useState('');
    //const [isLoading, setIsLoading] = useState(true); // Estado para rastrear carregamento

    //recebendo o paramentro da url
    const id = useParams()
    //const [idInt, setFoundImate] = useState('');

    //convertendo de string para int fazendo a desestruturação
    const idInt = Number.parseInt(id.index)
    console.log(idInt)

    useEffect(() => {
      const foundItem = dadosJson[idInt]
        setTimeout(() => {
          setFoundImate(foundItem);
        }, 1000);
              // Marca o carregamento como concluído
         //    console.log('Carregamento conluido')
        
    }, []);

    console.log(foundImate)

    if(!foundImate) {
      return( 
        <p>Carregando ...</p> 
      )
    }
      else {
    return( 
      <div className="container">
        <div className="imate-information">
          <h2>Imate's identification: {foundImate.id.name}{foundImate.id.value} </h2>
          <img src={foundImate.picture.large} alt=''></img>
          <p><strong>Date got arrested:</strong> {foundImate.registered.date}</p>
          <p><strong>Age:</strong> {foundImate.dob.age}</p>
          <p><strong>Gender:</strong> {foundImate.gender}</p>
          <p><strong>Name:</strong> {foundImate.name.first} {foundImate.name.last}</p>
          <p><strong>Email:</strong> {foundImate.email}</p>
          <p><strong>CellFone:</strong> {foundImate.cell}</p>
          <p><strong>Location:</strong> </p>
          <p><strong>City:</strong> {foundImate.location.city}</p>
          <p><strong>Coordinates:</strong> {foundImate.location.coordinates.latitude}   {foundImate.location.coordinates.longitude}</p>
          <p><strong>Nat:</strong> {foundImate.nat}</p> 

          <p><strong>Contry:</strong> {foundImate.location.country}</p> 
          <p><strong>postcode:</strong> {foundImate.location.postcode}</p>
          <p><strong>state: </strong>{foundImate.location.state}</p>
          <p><strong>Street: </strong>{foundImate.location.street.name} {foundImate.location.street.number}</p>
        </div>
    </div>
    )
  }
}

export default ImatePersonData