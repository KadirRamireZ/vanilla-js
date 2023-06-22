let sumar = (numero1, numero2) => {
  return numero1 + numero2;
};
let restar = (numero1, numero2) => {
  return numero1 - numero2;
};
let dividir = (numero1, numero2) => {
  return numero1 / numero2;
};
let multiplicar = (numero1, numero2) => {
  return numero1 * numero2;
};

const calculadora = {
  sumar,
  restar,
  multiplicar,
  dividir,
};

export { calculadora };
