import {Ejercicio1} from "../ejercicio1";
import {distinct, groupBy, map, mergeMap, toArray} from "rxjs/operators";
import {AppUtil} from "../../utils/app-util";
// import { groupBy, mergeMap, toArray } from 'rxjs/operators';

declare var require: any;
const rxjs = require('rxjs');
// const map = require('rxjs/operators').map;
// const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const pathArchivo = '../../pokemon/data.json';

async function resolverEjercicio4() {
    const ejercicio1 = new Ejercicio1('../../pokemon/data.json');
    const tipes = (await ejercicio1.resolver()).map(value => {
        return {"nombre": value.tipo};
    });
    const dataObject: any[] = await AppUtil.getObjectFromJSON(pathArchivo);

    const arregloResultado: any[] = [];
    rxjs.from(await ejercicio1.resolver())
        .pipe(
            distinct(value => value.tipo),
            map(value => {
                return {"nombre": value.tipo, "pokemons": []}
            }),
        )
        .subscribe(value => arregloResultado.push(value),
            error => console.log(error),
            () => {
                console.log(arregloResultado);
                arregloResultado.forEach(value => {
                    dataObject.forEach(pokemon => {
                        pokemon.types.forEach(type => {
                            if (value.nombre === type.type.name) {
                                value.pokemons.push(pokemon)
                            }
                        })
                    });
                });
                console.log(arregloResultado)
            }
        );
}

resolverEjercicio4().then();
// resolverEjercicio4v2().then();