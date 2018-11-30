import {AppUtil} from "../utils/app-util";

class Ejercicio3 {
    private pathArchivo: string;

    constructor(path) {
        this.pathArchivo = path;
    }

    async resolver() {
        const dataObject: any[] = await AppUtil.getObjectFromJSON(this.pathArchivo);
        const arregloRespuestaAbilities: any[] = [];
        dataObject.forEach(value => {
            arregloRespuestaAbilities.push(...value.moves)
        });
        return arregloRespuestaAbilities.map(value => {
            return {"nombre": value.move.name}
        });
    }
}

const ejercicio3 = new Ejercicio3('../pokemon/data.json');
ejercicio3.resolver().then(value => console.log(value));

