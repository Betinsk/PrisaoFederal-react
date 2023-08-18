
import './imate.css'
import { Link } from 'react-router-dom'
export const ImateCard = ({ imates }) => (

<div className='card-container'>
{imates.map((imate, index) => (
	<Link to={`/imatePerson/${index}`} key={index}	>

  <div className='imate-card'key={index} >
    <div className='card-img'>
      <img src={imate.picture.large} alt=''></img><br />
    </div>
    <p className='card-title'>{imate.name.first} {imate.name.last}</p>
    <div className='card-information'>
      <span>Imate's id: {imate.id.value} Age: {imate.dob.age}</span>
      <p>{imate.email}</p>
      <p>{imate.gender}</p>
    </div>
  </div>
  </Link>
))}

</div>
)

export default ImateCard

