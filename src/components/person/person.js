
export const Person = ({ attributes, onChange}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
      };

    return (

        <div>

            <input
                type="text"
                name="name"
                value={attributes.name}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                type="date"
                name="dateOfBirth"
                value={attributes.dateOfBirth}
                onChange={handleChange }
                placeholder="dateOfBirth"
            />

            <input
                type="text"
                name="socialSecurity"
                value={attributes.socialSecurity}
                onChange={handleChange}
                placeholder="Social security"
            />
            <select name="gender" value={attributes.gender} onChange={handleChange}>
                <option value="">Select Gender</option> {/* Opção padrão */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
          
        </div>

    )

}

export default Person