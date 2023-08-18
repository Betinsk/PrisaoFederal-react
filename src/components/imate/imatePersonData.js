import { Context } from "./imateData";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useEffect, useState} from "react";
import './imate.css'

 const ImatePersonData = () => {

    const dadosJson = useContext(Context);
    const [foundImate, setFoundImate] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Estado para rastrear carregamento

    const id = useParams();

    useEffect(() => {
      const foundItem = dadosJson.find(imate => imate[id] === parseInt[id]);
      if (foundItem) {
        // Marca o carregamento como concluído
        setFoundImate(foundItem);
        console.log('Carregamento conluido')
        setIsLoading(false); 
      }

    }, [id, dadosJson]);

    
    console.log(foundImate)

    if (isLoading) {
      return <p>Carregando...</p>;
    }

    return( 
      <div className="container">
        <div className="imate-information">
          <h2>Imate's identification: {foundImate.id.name}{foundImate.id.value} </h2>
          <img src={foundImate.picture.large} alt=''></img>
          <p><strong>Date of birth:</strong> {foundImate.dob.date}</p>
          <p>Date got arrested: {foundImate.registered.date}</p>
          <p>Age: {foundImate.dob.age}</p>
          <p>Gender: {foundImate.gender}</p>
          <p>Name: {foundImate.name.first} {foundImate.name.last}</p>
          <p>Email: {foundImate.email}</p>
          <p>CellFone: {foundImate.cell}</p>
          <p>Location: </p>
          <p>City: {foundImate.location.city}</p>
          <p>Coordinates: {foundImate.location.coordinates.latitude}   {foundImate.location.coordinates.longitude}</p>
          <p>Nat: {foundImate.nat}</p> 

          <p>Contry: {foundImate.location.country}</p> 
          <p>postcode: {foundImate.location.postcode}</p>
          <p>state: {foundImate.location.state}</p>
          <p>Street: {foundImate.location.street.name} {foundImate.location.street.number}</p>
        </div>
    </div>
    )
    
}

export default ImatePersonData