import {AppUtil} from "../utils/app-util";

export class Ejercicio1 {
    private pathArchivo: string;

    constructor(path) {
        this.pathArchivo = path;
    }

    async resolver() {
        const dataObject: any[] = await AppUtil.getObjectFromJSON(this.pathArchivo);
        const arregloRespuestaTypes: any[] = [];
        dataObject.forEach(value => {
            arregloRespuestaTypes.push(...value.types)
        });
        return arregloRespuestaTypes.map(value => {
            return {"tipo": value.type.name}
        });
    }
}

const ejercicio1 = new Ejercicio1('../pokemon/data.json');
// ejercicio1.resolver().then(value => console.log(value));

