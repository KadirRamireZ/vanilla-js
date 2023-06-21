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
  
  obtenerListaUsuarios();
  
  function obtenerListaUsuarios() {
    fetch("https://api.hacienda.go.cr/fe/ae?identificacion=604400254")
      .then((response) => response.json())
      .then((data) => {
        console.log("Lista de usuarios:", data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }
  
  function usuarios() {
    return new Promise(obtenerListaUsuarios);
  }
  