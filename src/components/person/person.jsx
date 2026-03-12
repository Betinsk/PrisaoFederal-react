export const Person = ({ attributes, onChange, errors}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="person-form row g-2">

           <div className="col-md-6">

            <input
                type="text"
                name="name"
                value={attributes.name || ''}
                onChange={handleChange}
                placeholder="Name"
                className={`form-control ${errors?.name ? "is-invalid" : ""}`}
            />

            {errors?.name && (
                <div className="invalid-feedback">
                {errors.name}
                </div>
            )}

            </div>

            <div className="col-md-4">
               <input
                type="date"
                name="birthDate"
                value={attributes.birthDate || ''}
                onChange={handleChange}
                placeholder="birthDate"
                className={`form-control ${errors?.birthDate ? "is-invalid" : ""}`}
            />

            {errors?.birthDate && (
                <div className="invalid-feedback">
                {errors.birthDate}
                </div>
            )}

            </div>

               <div className="col-md-4">
               <input
                type="text"
                name="socialSecurity"
                value={attributes.socialSecurity || ''}
                onChange={handleChange}
                placeholder="Social Security"
                className={`form-control ${errors?.socialSecurity ? "is-invalid" : ""}`}
            />

            {errors?.socialSecurity && (
                <div className="invalid-feedback">
                {errors.socialSecurity}
                </div>
            )}

            </div>

                            
                <div className="col-md-4">
                    <select
                        name="gender"
                        value={attributes.gender || ""}
                        onChange={handleChange}
                        className={`form-control ${errors?.gender ? "is-invalid" : ""}`}>

                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                        {errors?.gender && (
                            <div className="invalid-feedback">
                            {errors.gender}
                            </div>
                        )}
                </div>


                 <div className="col-md-6">

                <input
                    type="text"
                    name="email"
                    value={attributes.email || ''}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`form-control ${errors?.email ? "is-invalid" : ""}`}
                />

                {errors?.email && (
                    <div className="invalid-feedback">
                    {errors.email}
                    </div>
                )}

                </div>
            </div>
    );
};

export default Person;
