import Cl_vOficina from "./Cl_vOficina.js";
import Cl_mOficina from "./Cl_mOficina.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_Principal {
    constructor() {
        let vista = new Cl_vOficina();
        let modelo = new Cl_mOficina();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}

