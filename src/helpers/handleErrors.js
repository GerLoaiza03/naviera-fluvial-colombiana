export const handleErrors = (isValidEmail, isValidPassword) => {
  //   console.log("Errors");
  let error = { email: "", password: "" };

  if (!isValidEmail) {
    error.email = "Correo inválido.";
  }

  if (!isValidPassword) {
    error.password =
      "Contraseña debe tener mínimo 6 caracteres y máximo 15 caracteres.";
  }

  return error;
};
