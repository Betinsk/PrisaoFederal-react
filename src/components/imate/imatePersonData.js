import { Context } from "./imateData";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useEffect, useState} from "react";
import './imate.css';

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

export default ImatePersonData