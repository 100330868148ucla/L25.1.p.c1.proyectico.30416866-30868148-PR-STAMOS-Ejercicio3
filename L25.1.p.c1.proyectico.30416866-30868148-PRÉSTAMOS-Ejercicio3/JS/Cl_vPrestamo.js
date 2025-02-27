export default class Cl_vPrestamo {
  leerDatos() {
      let cliente = prompt("cliente");
      let codigo = prompt("codigo");
      let prestamo = prompt("prestamo");
      let meses = prompt("meses");
      return { cliente, codigo, prestamo, meses };
  }

  reportar(salida, montoFinalDisponible, cantidadClientes2Meses, clientePrestamoMenor) {
      salida.innerHTML += `<br>Monto final disponible:${montoFinalDisponible}`;
      salida.innerHTML += `<br>Cantidad de clientes que pidieron por 2 meses: ${cantidadClientes2Meses}`;
      salida.innerHTML += `<br>Cliente que pidió el préstamo menor: ${clientePrestamoMenor}`;
  }
}
