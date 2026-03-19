import Person from "../person/person";

export function PersonalTab({ person, formData, editing, onChange }) {
  
       const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    const fields = [
        {name: "name", placeholder: "Name", col: "col-md-6"},
        {name: "name", placeholder: "Name", col: "col-md-6"},
        {name: "name", placeholder: "Name", col: "col-md-6"},
        {name: "name", placeholder: "Name", col: "col-md-6"}
    ]
  
    return (
    <div className="row">

        {editing ? (

          <Person attributes={person} onChange={handleChange} /> 
        ) : (
               <>
            <h1>Name:</h1>
            <p>{person.name}</p>
            </>
        )
    }
     {/*  <> 
        {fields.map((field) => (
              <div className={field.col} key={field.name}>
        <label>{field.name}</label><div className={field.col} key={field.name}>
                {editing ? (
                    <input
                        type="text"
                        name={field.name}
                        value={formData[field.name] || ""}
                        placeholder={field.placeholder}
                        onChange={onChange}
                        className="form-control" />
                ) : (
                    <p>{person.name}</p>
                )}

            </div>
            </div>
        ))}

        </>
        </div> */}
        </div>
  );
}