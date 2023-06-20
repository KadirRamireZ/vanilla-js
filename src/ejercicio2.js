class Contador {
  valor = 0;
  siguiente() {
    this.valor += 1;
  }
}
const instancia = new Contador();

// console.log(instancia);

export { instancia };
