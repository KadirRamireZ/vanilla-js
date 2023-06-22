import { calculadora } from "./calculadora.js";

function calcular(operacion, numero1, numero2) {
  let resultado;
  if (operacion === "sumar") {
    resultado = calculadora.sumar(numero1, numero2);
  }

  console.log(resultado);
  return resultado;
}

calcular("sumar", 1, 2);
