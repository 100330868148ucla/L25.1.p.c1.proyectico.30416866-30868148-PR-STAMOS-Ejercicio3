export default class Cl_mOficina {
  constructor() {
      this.montoCaja = 20000.0;
      this.porcComisionMensual = 5.0;
      this.contClientes2Meses = 0;
      this.prestamoMenor = Infinity;
      this.clientePrestamoMenor = "";
  }

  procesarPrestamo(prestamo) {
      const comision = prestamo.meses * this.porcComisionMensual;
      const totalPrestamo = prestamo.prestamo + comision;
      this.montoCaja -= totalPrestamo;

      if (prestamo.meses === 2) {
          this.contClientes2Meses += 1;
      }

      if (prestamo.prestamo < this.prestamoMenor) {
          this.prestamoMenor = prestamo.prestamo;
          this.clientePrestamoMenor = prestamo.cliente;
      }
  }

  montoFinalDisponible() {
      return this.montoCaja;
  }

  cantidadClientes2Meses() {
      return this.contClientes2Meses;
  }

  clienteConPrestamoMenor() {
      return this.clientePrestamoMenor;
  }
}
