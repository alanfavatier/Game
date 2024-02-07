const Validator = (data) => {
  let errors = {};

  // Validación del campo nombre
  if (!data.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  // Validación del campo email
  if (!data.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email es inválido";
  }

  // Validación del campo phone
  if (!data.phone.trim()) {
    errors.phone = "El teléfono es obligatorio";
  } else if (isNaN(data.phone)) {
    errors.phone = "El teléfono debe ser un número";
  }

  // Validación del campo imagen
  if (!data.image) {
    errors.image = "La imagen es obligatoria";
  }

  return errors;
};

export default Validator;