import {distinct, map} from "rxjs/operators";
import {AppUtil} from "../../utils/app-util";
import {Ejercicio2} from "../ejercicio2";
// import { groupBy, mergeMap, toArray } from 'rxjs/operators';

declare var require: any;
const rxjs = require('rxjs');
// const map = require('rxjs/operators').map;
// const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const pathArchivo = '../../pokemon/data.json';

async function resolverEjercicio5() {
    const ejercicio2 = new Ejercicio2('../../pokemon/data.json');
    const dataObject: any[] = await AppUtil.getObjectFromJSON(pathArchivo);

    const arregloResultado: any[] = [];
    rxjs.from(await ejercicio2.resolver())
        .pipe(
            distinct(value => value.nombre),
            map(value => {
                return {"nombre": value.nombre, "pokemons": []}
            }),
        )
        .subscribe(value => arregloResultado.push(value),
            error => console.log(error),
            () => {
                console.log(arregloResultado);
                arregloResultado.forEach(value => {
                    dataObject.forEach(pokemon => {
                        pokemon.abilities.forEach(type => {
                            if (value.nombre === type.ability.name) {
                                value.pokemons.push(pokemon)
                            }
                        })
                    });
                });
                console.log(arregloResultado)
            }
        );
}

resolverEjercicio5().then();
// resolverEjercicio4v2().then();