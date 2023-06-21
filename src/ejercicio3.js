//Ejercicio01

function clonarArreglo(arregloInicial) {
  return [...arregloInicial];
}
const arregloInicial = [1, 2, 3, 4, 5];
const arregloClonado = clonarArreglo(arregloInicial);

console.log(arregloClonado);
console.log(arregloInicial === arregloClonado);

//Ejercicio02

function clonarObjeto(objetoInicial) {
  return { ...objetoInicial };
}
const objetoInicial = { nombre: "John", edad: 30, ciudad: "Nueva York" };
const objetoClonado = clonarObjeto(objetoInicial);

console.log(objetoClonado);
console.log(objetoInicial === objetoClonado);

//Ejercicio03

function sumar(...sum) {
  return sum.reduce((total, num) => total + num, 0);
}

//ejercicio04

function saludar(nombre = "Desconocido") {
  return `Hola ${nombre}`;
}
console.log(saludar());
console.log(saludar("Juan"));
console.log(saludar("María"));

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };
