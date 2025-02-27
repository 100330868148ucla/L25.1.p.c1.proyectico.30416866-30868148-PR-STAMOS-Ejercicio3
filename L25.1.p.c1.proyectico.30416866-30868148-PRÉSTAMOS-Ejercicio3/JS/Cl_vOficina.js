import Cl_mPrestamo from "./Cl_mPrestamo.js";

export default class Cl_vOficina {
    constructor() {
        this.controlador = null;
        this.btAgregar = document.getElementById("prestamoForm_btAgregar");
        this.salida_montoDisponible = document.getElementById("salida_montoDisponible");
        this.salida_clientes2Meses = document.getElementById("salida_clientes2Meses");
        this.salida_clienteMenor = document.getElementById("salida_clienteMenor");
        this.inCliente = document.getElementById("prestamoForm_inCliente");
        this.inCodigo = document.getElementById("prestamoForm_inCodigo");
        this.inMonto = document.getElementById("prestamoForm_inMonto");
        this.inMeses = document.getElementById("prestamoForm_inMeses");
        this.btAgregar.onclick = () => this.controlador.agregarPrestamo();
    }

    leerDatosPrestamo() {
        return new Cl_mPrestamo({
            cliente: this.inCliente.value,
            codigo: parseInt(this.inCodigo.value),
            prestamo: parseFloat(this.inMonto.value),
            meses: parseInt(this.inMeses.value),
        });
    }

    reportar(montoFinalDisponible, cantidadClientes2Meses, clientePrestamoMenor) {
        this.salida_montoDisponible.textContent = montoFinalDisponible;
        this.salida_clientes2Meses.textContent = cantidadClientes2Meses;
        this.salida_clienteMenor.textContent = clientePrestamoMenor;
    }
}
