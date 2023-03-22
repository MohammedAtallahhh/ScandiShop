export const validateForm = (formData) => {
  let errors = {};

  for (let [key, value] of Object.entries(formData)) {
    if (typeof value === "number" && value < 0) {
      errors[key] = `${key.toUpperCase()} must not be negative`;
    }

    if (!value) {
      errors[key] = `${key.toUpperCase()} is required`;
    }
  }

  return errors;
};
