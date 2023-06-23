export function sumar(num1, num2) {
  return num1 + num2;
}

export function restar(num1, num2) {
  return num1 - num2;
}

export function dividir(num1, num2) {
  return num1 / num2;
}

export function multiplicar(num1, num2) {
  return num1 * num2;
}

export function filtrarNumerosPares(lista) {
  let lista1 = lista.filter((numero) => numero % 2 === 0);
  console.log(lista1);
  return lista1;
}


export function filtrarNumerosQuintos(lista) {
  let lista2 = lista.filter((numero) => numero % 5 === 0);
  console.log(lista2);
  return lista2;
}


