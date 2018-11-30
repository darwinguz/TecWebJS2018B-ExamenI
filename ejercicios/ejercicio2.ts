import {AppUtil} from "../utils/app-util";

class Ejercicio2 {
    private pathArchivo: string;

    constructor(path) {
        this.pathArchivo = path;
    }

    async resolver() {
        const dataObject: any[] = await AppUtil.getObjectFromJSON(this.pathArchivo);
        const arregloRespuestaAbilities: any[] = [];
        dataObject.forEach(value => {
            arregloRespuestaAbilities.push(...value.abilities)
        });
        return arregloRespuestaAbilities.map(value => {
            return {"nombre": value.ability.name}
        });
    }
}

const ejercicio2 = new Ejercicio2('../pokemon/data.json');
ejercicio2.resolver().then(value => console.log(value));

