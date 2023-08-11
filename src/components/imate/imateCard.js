
import './imate.css'
export const ImateCard = ({ imates }) => (

<div className='card-container'>
{imates.map((imate, index) => (
<div className='imate-card'key={index} >
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
)

export default ImateCard