export const validateForm = (formData) => {
  let errors = {};

  for (let [key, value] of Object.entries(formData)) {
    if (!value) {
      errors[key] = `${key.toUpperCase()} is required`;
    }
  }

  return errors;
};
