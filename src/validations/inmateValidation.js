const inmateSchema = {
commitedCrime: {
  required: {
    value: true,
    message: "Commited Crime is required"
  },
  minLength: {
    value: 20,
    message: "Must be at least 20 characters"
  },
  maxLength: {
    value: 250,
    message: "Must be at most 250 characters"
  }
}, 
  
 arrestDate: {
  required: {
    value: true,
    message: "Arrest date is required"
  }
},
sentencedYears: {
  required: {
    value: true,
    message: "Sentenced Years must be filled"
  }
}
};

export function validateInmate(data) {
  const errors = {};

  Object.keys(inmateSchema).forEach(field => {
    const rules = inmateSchema[field];
    const value = data[field];

    // ✅ REQUIRED
    if (rules.required?.value && !value) {
      errors[field] = rules.required.message;
      return;
    }

    // ✅ MIN LENGTH
    if (rules.minLength && value) {
      if (value.length < rules.minLength.value) {
        errors[field] = rules.minLength.message;
        return;
      }
    }

    // ✅ MAX LENGTH
    if (rules.maxLength && value) {
      if (value.length > rules.maxLength.value) {
        errors[field] = rules.maxLength.message;
        return;
      }
    }

    // ✅ PATTERN
    if (rules.pattern && value) {
      if (!rules.pattern.test(value)) {
        errors[field] = rules.pattern.message;
        return;
      }
    }
  });

  return errors;
}