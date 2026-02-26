export const Person = ({ attributes, onChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="person-form">

            <input
                type="text"
                name="name"
                value={attributes.name || ''}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                type="date"
                name="birthDate" // ajustado para bater com backend
                value={attributes.birthDate || ''}
                onChange={handleChange}
                placeholder="Birth Date"
            />

            <input
                type="text"
                name="socialSecurity"
                value={attributes.socialSecurity || ''}
                onChange={handleChange}
                placeholder="Social Security"
            />

            <select
                name="gender"
                value={attributes.gender || ''}
                onChange={handleChange}
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>

            <input
                type="email"
                name="email"
                value={attributes.email || ''}
                onChange={handleChange}
                placeholder="Email"
            />

        </div>
    );
};

export default Person;
