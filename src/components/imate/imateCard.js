
import './imate.css'
import { Link } from 'react-router-dom'
import calculateAge from '../Utils/calcBirth'

export const ImateCard = ({jsonData}) => (
  console.log(jsonData),

<div className='card-container'>

{ jsonData && jsonData.length > 0 ? ( jsonData.map((imate) => (
	<Link to={`/imateEdit/${imate.id}`} 	className="link-with-underline"  key={imate.id} >
    
  <div className='imate-card'>
    <div className='card-img'>
    </div>
    <p className='card-title'>{imate.name} </p>
    <div className='card-information'>
      
                     <p>Imate's id: {imate ? imate.id  : "Não disponível"}</p>
                      <p>Imates's nome: {imate ? imate.name  : "Não disponível"}</p>
                      <p>Age: {imate ? calculateAge(imate.dateOfBirth) : "Não disponível"}</p> 
                        <p> Gender: {imate ? imate.gender : "Não disponível"}</p>
                        <p>Street: {imate ? imate.addresses?.[0]?.street : "Não disponível"}</p>
                        <p>Street number: {imate ? imate.addresses?.[0]?.number : "Não disponível"}</p>
                        <p>City: {imate ? imate.addresses?.[0]?.city.city : "Não disponível"}</p>
                        <p>State: {imate ? imate.addresses?.[0]?.city.state.state : "Não disponível"}</p>
    </div>
  </div>
  </Link>
))
): (
  <p>Carregando...</p>

)}

</div>
)



export default ImateCard

