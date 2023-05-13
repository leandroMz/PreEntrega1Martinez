export const ValidateName = ({ name }) => {
  let errores = [];
  if (name === "") {
    errores.push('<span class="errores-push danger">Nombre: (Por favor, completa este campo)</span>');
  } else if (name.length < 3) {
    errores.push('<span class="errores-push danger">Nombre: (Por favor, mínimo tres caracteres)</span>');
  } else if (!soloLetras(name)) {
    errores.push('<span class="errores-push danger">Nombre: (Por favor, ingresa solo letras)</span>');
  }
  return errores;
};
const reg = /^[a-zA-ZÀ-ÿ ]+$/;
const soloLetras = (str) => {
  return reg.test(str);
};
export const ValidateMail = ({ email }) => {
  let errores = [];
  if (email === "") {
    errores.push('<span class="errores-push danger">Email: (Por favor, completa este campo)</span>');
  } else if (!validar_email(email)) {
    errores.push('<span class="errores-push danger">Email: (Por favor, ingresa un correo válido)</span>');
  }
  return errores;
};
const expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const validar_email = (email) => {
  return expReg.test(email);
};