"use strict";
var _a, _b;
class Nivel {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Ruta {
    constructor(nombre) {
        this.nombre = nombre;
        this.niveles = [];
    }
    agregarNivel(nivel) {
        this.niveles.push(nivel);
    }
}
class Camper {
    constructor(nombre) {
        this.nombre = nombre;
        this.nivelActual = null;
        this.contratado = false;
    }
    avanzarNivel(nivel) {
        this.nivelActual = nivel;
    }
    obtenerContrato(tipo) {
        if (this.nivelActual !== null && !this.contratado) {
            this.contratado = true;
            return new Contrato(tipo, this);
        }
        return null;
    }
}
class Contrato {
    constructor(tipo, camper) {
        this.tipo = tipo;
        this.camper = camper;
    }
}
class Centro {
    constructor(nombre) {
        this.nombre = nombre;
        this.campers = [];
    }
    agregarCamper(camper) {
        this.campers.push(camper);
    }
    obtenerCamperPorNombre(nombre) {
        return this.campers.find(camper => camper.nombre === nombre);
    }
    obtenerCampersPorContrato(tipoContrato) {
        return this.campers.filter(camper => {
            const contrato = camper.obtenerContrato(tipoContrato);
            return contrato !== null;
        });
    }
    obtenerCentroConMayorMenorCampers() {
        let centroMayorCampers = null;
        let centroMenorCampers = null;
        for (const centro of centrosEntrenamiento) {
            if (!centroMayorCampers || centro.campers.length > centroMayorCampers.campers.length) {
                centroMayorCampers = centro;
            }
            if (!centroMenorCampers || centro.campers.length < centroMenorCampers.campers.length) {
                centroMenorCampers = centro;
            }
        }
        return { mayor: centroMayorCampers, menor: centroMenorCampers };
    }
}
const nivelBasico = new Nivel('Básico');
const nivelIntermedio = new Nivel('Intermedio');
const nivelAvanzado = new Nivel('Avanzado');
const rutaProgramacion = new Ruta('Node js');
rutaProgramacion.agregarNivel(nivelBasico);
rutaProgramacion.agregarNivel(nivelIntermedio);
rutaProgramacion.agregarNivel(nivelAvanzado);
const camper1 = new Camper('Juan Torres');
const camper2 = new Camper('Javier Martinez');
const camper3 = new Camper('Juan Durán');
const camper4 = new Camper('Cristian arce');
const camper5 = new Camper('Camilo garza');
camper1.avanzarNivel(nivelBasico);
camper2.avanzarNivel(nivelIntermedio);
camper3.avanzarNivel(nivelAvanzado);
camper4.avanzarNivel(nivelBasico);
camper5.avanzarNivel(nivelIntermedio);
const centroEntrenamiento1 = new Centro('CampusLands');
centroEntrenamiento1.agregarCamper(camper1);
centroEntrenamiento1.agregarCamper(camper2);
centroEntrenamiento1.agregarCamper(camper3);
const centroEntrenamiento2 = new Centro('CampusMedellin');
centroEntrenamiento2.agregarCamper(camper4);
centroEntrenamiento2.agregarCamper(camper5);
const contrato1 = camper1.obtenerContrato('remoto');
const contrato2 = camper2.obtenerContrato('presencial');
const contrato3 = camper3.obtenerContrato('remoto');
const contrato4 = camper4.obtenerContrato('remoto');
const contrato5 = camper5.obtenerContrato('presencial');
const centrosEntrenamiento = [centroEntrenamiento1, centroEntrenamiento2];
const centroConMayorMenorCampers = centrosEntrenamiento[0].obtenerCentroConMayorMenorCampers();
console.log('Camper 1:', contrato1);
console.log('Camper 2:', contrato2);
console.log('Camper 3:', contrato3);
console.log('Camper 4:', contrato4);
console.log('Camper 5:', contrato5);
console.log('Centro con más campers:', (_a = centroConMayorMenorCampers.mayor) === null || _a === void 0 ? void 0 : _a.nombre);
console.log('Centro con menos campers:', (_b = centroConMayorMenorCampers.menor) === null || _b === void 0 ? void 0 : _b.nombre);
