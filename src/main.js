function obtenerHoraActual() {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  return hora + ":" + minutos + ":" + segundos;
}

function actualizarHora() {
  let horaElemento = document.getElementById("hora");
  horaElemento.textContent = obtenerHoraActual();
}

setInterval(actualizarHora, 1000);

let fechaActual = document.getElementById("fechaActual");
let fecha = new Date();
fechaActual.textContent = fecha.toLocaleDateString();
