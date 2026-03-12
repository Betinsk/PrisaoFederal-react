

const personSchema = {
  name: {
    required: true,
    message: "Name is required"
  },
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
    message: "Invalid email"
  },
  birthDate: {
    required: true,
    message: "Birth date is required"
  },
  socialSecurity: {
    required: true,
    minLength: 9,
    message: "SSN must have 9 digits"
  }
};

export function validatePerson(data){

  const errors = {};

  Object.keys(personSchema).forEach(field => {

    const rules = personSchema[field];
    const value = data[field];

    if(rules.required && !value){
      errors[field] = rules.message;
      return;
    }

    if(rules.pattern && !rules.pattern.test(value)){
      errors[field] = rules.message;
    }

  });

  return errors;
}