
export const PrisonDetails = ({prison}) => {

         return (
            <div>
            <h2>{prison.name}</h2>
            <p><strong>Security Level:</strong> {prison.securityLevel}</p>
            <p><strong>Established On:</strong> {new Date(prison.establishmentDate).toLocaleDateString()}</p>
            <p><strong>Current Population:</strong> {prison.currentPopulation}</p>
            <p><strong>Capacity:</strong> {prison.capacity}</p>
            <p><strong>Description:</strong> {prison.description}</p>
            <h3>Address:</h3>
            <p>{prison.address.street}, {prison.address.number}</p>
            <p>City: {prison.address.city.city}, {prison.address.city.state.state}</p>
          </div>
         )   

}