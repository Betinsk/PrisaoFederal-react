

const addressSchema = {
  street: {
    required: true,
    message: "Street name is required"
  },
  addressComplement: {
    required: true,
    message: "Can't be empty"
  },
  city: {
    required: true,
    message: "Can't be empty"
  },
  state: {
    required: true,
    message: "Can't be empty"
  }
};

export function validateAddress(data){

  const errors = {};

  Object.keys(addressSchema).forEach(field => {

    const rules = addressSchema[field];
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