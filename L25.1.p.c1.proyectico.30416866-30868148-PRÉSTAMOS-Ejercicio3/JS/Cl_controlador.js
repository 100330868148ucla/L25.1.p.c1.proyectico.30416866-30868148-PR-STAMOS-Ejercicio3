export default class Cl_controlador {
  constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
  }

  agregarPrestamo() {
      this.modelo.procesarPrestamo(this.vista.leerDatosPrestamo());
      this.vista.reportar(
          this.modelo.montoFinalDisponible(),
          this.modelo.cantidadClientes2Meses(),
          this.modelo.clienteConPrestamoMenor()
      );
  }
}
